import React, { useState } from "react";
import {
    FaTwitter,
    FaYoutube,
    FaFacebook,
    FaLinkedinIn,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaCheckCircle,
    FaSpinner
  } from "react-icons/fa";
  
  const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
    };

    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      }
      
      if (!formData.subject.trim()) {
        newErrors.subject = 'Subject is required';
      }
      
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!validateForm()) {
        return;
      }
      
      setIsSubmitting(true);
      
      try {
        // API call to backend server
        const response = await fetch('http://localhost:5001/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'info@universalsoftlab.com',
            from: formData.email,
            subject: `Contact Form: ${formData.subject}`,
            message: `
              Name: ${formData.name}
              Email: ${formData.email}
              Phone: ${formData.phone}
              Subject: ${formData.subject}
              
              Message:
              ${formData.message}
            `
          })
        });
        
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        } else {
          throw new Error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again or contact us directly.');
      } finally {
        setIsSubmitting(false);
      }
    };

    if (isSubmitted) {
      return (
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your message has been sent successfully. We'll get back to you shortly.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 py-16">
        {/* Contact Heading */}
        <div className="text-center mb-12">
          <h4 className="text-xl text-orange-600 mb-1">Get in Touch</h4>
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Universal Soft Lab
          </h3>
          <p className="text-gray-600">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
  
        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section - Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-orange-500 text-xl mt-1 mr-4" />
                  <div>
                    <h5 className="font-semibold text-gray-800">Address</h5>
                    <p className="text-gray-600 text-sm">
                      13, Press Complex, Apni Duniya Press Campus<br />
                      Behind Dainik Bhaskar, A.B. Road<br />
                      Indore - 452010, Madhya Pradesh
                    </p>
                  </div>
          </div>
  
                <div className="flex items-start">
                  <FaPhone className="text-orange-500 text-xl mt-1 mr-4" />
                  <div>
                    <h5 className="font-semibold text-gray-800">Phone</h5>
                    <p className="text-gray-600 text-sm">+91 83588 111 00</p>
              </div>
              </div>
                
                <div className="flex items-start">
                  <FaEnvelope className="text-orange-500 text-xl mt-1 mr-4" />
                  <div>
                    <h5 className="font-semibold text-gray-800">Email</h5>
                    <p className="text-gray-600 text-sm">info@universalsoftlab.com</p>
          </div>
        </div>
  
                <div className="flex items-start">
                  <FaClock className="text-orange-500 text-xl mt-1 mr-4" />
                  <div>
                    <h5 className="font-semibold text-gray-800">Business Hours</h5>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
  
          {/* Social Media Icons */}
              <div className="mt-8">
                <h5 className="font-semibold text-gray-800 mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    <FaFacebook size={24} />
                  </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            >
                    <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://youtube.com"
                    aria-label="YouTube"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    <FaYoutube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
  
          {/* Right Section - Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  