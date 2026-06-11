const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 5001;

// Secret key for captcha signature, regenerated on server restart
const CAPTCHA_SECRET = crypto.randomBytes(32).toString('hex');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Email configuration: secure SMTP server using cPanel webmail
const transporter = nodemailer.createTransport({
  host: 'mail.universalsoftlab.com',
  port: 465,
  secure: true, // true for port 465 (SSL/TLS)
  auth: {
    user: 'info@universalsoftlab.com',
    pass: 'USL_INFO*1234#*#'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Generate Math Captcha Challenge
app.get('/captcha', (req, res) => {
  try {
    const num1 = Math.floor(Math.random() * 9) + 1; // 1-9
    const num2 = Math.floor(Math.random() * 9) + 1; // 1-9
    const sum = num1 + num2;
    
    // Expires in 5 minutes
    const expiry = Date.now() + 5 * 60 * 1000;
    const payload = `${sum}:${expiry}`;
    
    // Sign the payload
    const hmac = crypto.createHmac('sha256', CAPTCHA_SECRET).update(payload).digest('hex');
    const token = `${payload}:${hmac}`;
    
    res.json({
      success: true,
      question: `What is ${num1} + ${num2}?`,
      token
    });
  } catch (error) {
    console.error('Error generating captcha:', error);
    res.status(500).json({ success: false, message: 'Failed to generate captcha' });
  }
});

// Email API endpoint
app.post('/send-email', async (req, res) => {
  try {
    const { name, to, from, subject, message, captchaAnswer, captchaToken } = req.body;

    // Verify Captcha
    if (!captchaToken || !captchaAnswer) {
      return res.status(400).json({ success: false, message: 'Captcha verification is required.' });
    }
    
    const parts = captchaToken.split(':');
    if (parts.length !== 3) {
      return res.status(400).json({ success: false, message: 'Invalid captcha token structure.' });
    }
    
    const [sumStr, expiryStr, hmac] = parts;
    
    // Re-verify HMAC signature
    const payload = `${sumStr}:${expiryStr}`;
    const expectedHmac = crypto.createHmac('sha256', CAPTCHA_SECRET).update(payload).digest('hex');
    if (hmac !== expectedHmac) {
      return res.status(400).json({ success: false, message: 'Captcha validation failed (signature mismatch).' });
    }
    
    // Verify Expiry
    if (Date.now() > parseInt(expiryStr)) {
      return res.status(400).json({ success: false, message: 'Captcha challenge has expired. Please reload the captcha.' });
    }
    
    // Verify Answer
    if (parseInt(captchaAnswer) !== parseInt(sumStr)) {
      return res.status(400).json({ success: false, message: 'Incorrect captcha answer. Please try again.' });
    }

    // Email to company (recipient changed to hemant@universalsoftlab.com)
    const companyMailOptions = {
      from: 'info@universalsoftlab.com',
      to: 'hemant@universalsoftlab.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from the Universal Soft Lab website contact form.</em></p>
      `
    };

    // Auto-reply email to customer
    const customerMailOptions = {
      from: 'info@universalsoftlab.com',
      to: from,
      subject: 'Thank you for contacting Universal Soft Lab',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #ff4d01; color: white; padding: 20px; text-align: center;">
            <h1>Universal Soft Lab</h1>
            <p style="margin: 0; font-size: 18px;">Thank you for your interest!</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #333; margin-top: 0;">Thank You for Contacting Us!</h2>
            
            <p>Dear ${name || 'Valued Customer'},</p>
            
            <p>Thank you for reaching out to Universal Soft Lab. We have received your message and appreciate your interest in our services.</p>
            
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>Our team will review your inquiry within 24 hours</li>
              <li>We'll contact you back shortly to discuss your requirements</li>
              <li>If urgent, please call us at +91 83588 111 00</li>
            </ul>
            
            <p><strong>About Universal Soft Lab:</strong></p>
            <p>With 22+ years of experience in software development, we specialize in:</p>
            <ul>
              <li>Product Discovery & UI/UX Design</li>
              <li>Web Application Development (React, .NET, Node.js)</li>
              <li>Mobile Applications (React Native, Flutter)</li>
              <li>Database Engineering & Performance Tuning (PostgreSQL, SQL Server)</li>
              <li>Legacy Modernization (WinForms to React)</li>
              <li>QA Automation & Testing</li>
            </ul>
            
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #ff4d01; margin: 20px 0;">
              <h3 style="color: #ff4d01; margin-top: 0;">Our Contact Information:</h3>
              <p><strong>Address:</strong> 13, Press Complex, Apni Duniya Press Campus, Behind Dainik Bhaskar, A.B. Road, Indore - 452010</p>
              <p><strong>Phone:</strong> +91 83588 111 00</p>
              <p><strong>Email:</strong> info@universalsoftlab.com</p>
              <p><strong>Business Hours:</strong> Monday-Friday: 9:00 AM - 6:00 PM, Saturday: 9:00 AM - 2:00 PM</p>
            </div>
            
            <p>We look forward to working with you!</p>
            
            <p>Best regards,<br>
            <strong>Universal Soft Lab Team</strong><br>
            <em>Leading Software Development Company</em></p>
          </div>
          
          <div style="background-color: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
            <p>&copy; 2025 Universal Soft Lab. All rights reserved.</p>
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: `Failed to send email: ${error.message || error}` 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
