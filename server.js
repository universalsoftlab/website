const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like 'outlook', 'yahoo', etc.
  auth: {
    user: 'info@universalsoftlab.com',
    pass: 'USL_INFO*1234#*#' // In production, use environment variables
  }
});

// Email API endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, from, subject, message } = req.body;

    // Email to company
    const companyMailOptions = {
      from: 'info@universalsoftlab.com',
      to: 'info@universalsoftlab.com',
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
            
            <p>Dear Valued Customer,</p>
            
            <p>Thank you for reaching out to Universal Soft Lab. We have received your message and appreciate your interest in our services.</p>
            
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>Our team will review your inquiry within 24 hours</li>
              <li>We'll contact you back shortly to discuss your requirements</li>
              <li>If urgent, please call us at +91 9876543210</li>
            </ul>
            
            <p><strong>About Universal Soft Lab:</strong></p>
            <p>With 18+ years of experience in software development, we specialize in:</p>
            <ul>
              <li>Desktop Applications (C#, .NET)</li>
              <li>Web Development (React, MVC, CodeIgniter)</li>
              <li>Mobile Applications (React Native, Flutter)</li>
              <li>Database Solutions (MSSQL, PostgreSQL, MongoDB)</li>
              <li>Banking & Finance Software</li>
              <li>ERP Solutions</li>
              <li>Hospital Management Systems</li>
            </ul>
            
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #ff4d01; margin: 20px 0;">
              <h3 style="color: #ff4d01; margin-top: 0;">Our Contact Information:</h3>
              <p><strong>Address:</strong> 13, Press Complex, Apni Duniya Press Campus, Behind Dainik Bhaskar, A.B. Road, Indore - 452010</p>
              <p><strong>Phone:</strong> +91 9876543210</p>
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
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
