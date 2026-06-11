import React, { useState, useEffect } from "react";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaComments,
  FaSpinner,
  FaCheckCircle,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Captcha security state variables
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaLoading, setCaptchaLoading] = useState(false);

  const fetchCaptcha = async () => {
    setCaptchaLoading(true);
    const captchaUrl = window.location.hostname === "localhost" 
      ? "http://localhost:5001/captcha" 
      : "/api/captcha";
    try {
      const response = await fetch(captchaUrl);
      if (response.ok) {
        const data = await response.json();
        setCaptchaQuestion(data.question);
        setCaptchaToken(data.token);
        setCaptchaAnswer(""); // reset client input
      }
    } catch (err) {
      console.error("Error loading mathematical captcha challenge:", err);
    } finally {
      setCaptchaLoading(false);
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error dynamically
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message details are required";
    if (!captchaAnswer.trim()) newErrors.captcha = "Security verification answer is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    // Select endpoint dynamically based on running host environment
    const targetUrl = window.location.hostname === "localhost" 
      ? "http://localhost:5001/send-email" 
      : "/api/send-email";

    try {
      const response = await fetch(targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          to: "info@universalsoftlab.com",
          from: formData.email,
          subject: `Contact Form Submission: ${formData.subject}`,
          message: `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Subject: ${formData.subject}
            
            Message details:
            ${formData.message}
          `,
          captchaAnswer: captchaAnswer,
          captchaToken: captchaToken
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
        setCaptchaAnswer("");
      } else {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || "Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting email request:", error);
      alert(error.message || "Failed to submit form. Please check your network or email us directly at info@universalsoftlab.com");
      fetchCaptcha(); // reload on error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* 1. Header Hero */}
      <section className="relative pt-20 pb-16 bg-[#090d16] border-b border-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#ff4d01] text-xs font-bold uppercase tracking-widest font-sans">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Connect With Our <br />
            <span className="text-gradient">Solution Architects</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
            Have an upcoming project, legacy modernization plan, or custom SaaS MVP concept? Write to us and an architect will review your files within 24 hours.
          </p>
        </div>
      </section>

      {/* 2. Main Layout Block */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Coordinates */}
            <div className="lg:col-span-4 space-y-8">
              <div className="glass-card p-8 rounded-2xl space-y-6 font-sans">
                <h3 className="text-xl font-bold text-white mb-2">Office Locations</h3>
                
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="text-[#ff4d01] text-xl mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <span className="text-white font-bold block text-sm">Headquarters</span>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      13, Press Complex, Apni Duniya Press Campus, Behind Dainik Bhaskar, A.B. Road, Indore - 452010, M.P., India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaPhoneAlt className="text-[#ff4d01] text-lg mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <span className="text-white font-bold block text-sm">Call Channels</span>
                    <p className="text-gray-400 text-xs sm:text-sm">+91 83588 111 00</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaEnvelope className="text-[#ff4d01] text-lg mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <span className="text-white font-bold block text-sm">Direct Email</span>
                    <a href="mailto:info@universalsoftlab.com" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                      info@universalsoftlab.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaClock className="text-[#ff4d01] text-lg mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <span className="text-white font-bold block text-sm">Business Schedule</span>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Monday - Friday: 10:00 AM - 7:00 PM <br />
                      Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="glass-card p-6 rounded-2xl flex items-center justify-between">
                <span className="text-white font-bold text-xs uppercase tracking-wider font-sans">Follow USL</span>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/company/universal-soft-lab/about/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-gray-900 hover:bg-[#ff4d01] text-gray-400 hover:text-white flex items-center justify-center transition-colors">
                    <FaLinkedin size={14} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-gray-900 hover:bg-[#ff4d01] text-gray-400 hover:text-white flex items-center justify-center transition-colors">
                    <FaFacebook size={14} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-gray-900 hover:bg-[#ff4d01] text-gray-400 hover:text-white flex items-center justify-center transition-colors">
                    <FaTwitter size={14} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-gray-900 hover:bg-[#ff4d01] text-gray-400 hover:text-white flex items-center justify-center transition-colors">
                    <FaInstagram size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-8">
              {isSubmitted ? (
                <div className="glass-card p-8 sm:p-12 rounded-2xl text-center space-y-6 flex flex-col items-center justify-center min-h-[400px]">
                  <FaCheckCircle className="text-6xl text-emerald-500" />
                  <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                  <p className="text-gray-400 font-sans text-sm sm:text-base max-w-md">
                    Thank you for reaching out. An automated confirmation copy has been sent to your inbox, and our architecture team will connect with you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gray-900 hover:bg-gray-800 text-white border border-gray-800 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="glass-card p-6 sm:p-10 rounded-2xl space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <FaComments className="text-[#ff4d01]" />
                    <span>Send Project Requirements</span>
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-400">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Hemant Mehta"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-gray-950 border text-white rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff4d01]/50 ${
                            errors.name ? "border-red-500" : "border-gray-800"
                          }`}
                        />
                        {errors.name && <span className="text-red-500 text-xs block">{errors.name}</span>}
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-400">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="example@universalsoftlab.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-gray-950 border text-white rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff4d01]/50 ${
                            errors.email ? "border-red-500" : "border-gray-800"
                          }`}
                        />
                        {errors.email && <span className="text-red-500 text-xs block">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-400">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91 83588 111 00"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full bg-gray-950 border text-white rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff4d01]/50 ${
                            errors.phone ? "border-red-500" : "border-gray-800"
                          }`}
                        />
                        {errors.phone && <span className="text-red-500 text-xs block">{errors.phone}</span>}
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-400">Subject / Category *</label>
                        <input
                          type="text"
                          name="subject"
                          placeholder="e.g. Legacy Modernization / SaaS MVP"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full bg-gray-950 border text-white rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff4d01]/50 ${
                            errors.subject ? "border-red-500" : "border-gray-800"
                          }`}
                        />
                        {errors.subject && <span className="text-red-500 text-xs block">{errors.subject}</span>}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-400">Message Details *</label>
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Provide details about your project stack, databases, or timeline..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full bg-gray-950 border text-white rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff4d01]/50 ${
                          errors.message ? "border-red-500" : "border-gray-800"
                        }`}
                      />
                      {errors.message && <span className="text-red-500 text-xs block">{errors.message}</span>}
                    </div>

                    {/* Security Math Captcha */}
                    <div className="space-y-1.5 bg-gray-950/40 p-4 border border-gray-900 rounded-xl">
                      <label className="text-xs font-semibold text-gray-400 block mb-1">Security Verification *</label>
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <div className="flex items-center justify-between gap-3 bg-gray-950 px-4 py-2.5 rounded-lg border border-gray-800 select-none">
                          <span className="text-white text-sm font-semibold tracking-wide min-w-[80px] text-center">
                            {captchaLoading ? "Loading..." : captchaQuestion}
                          </span>
                          <button
                            type="button"
                            onClick={fetchCaptcha}
                            disabled={captchaLoading}
                            className="text-xs text-[#ff4d01] hover:text-[#ff5d1a] disabled:text-gray-600 transition-colors focus:outline-none font-semibold cursor-pointer"
                          >
                            Reload
                          </button>
                        </div>
                        <div className="flex-grow">
                          <input
                            type="text"
                            placeholder="Enter the correct sum"
                            value={captchaAnswer}
                            onChange={(e) => {
                              setCaptchaAnswer(e.target.value);
                              if (errors.captcha) {
                                setErrors((prev) => ({ ...prev, captcha: "" }));
                              }
                            }}
                            className={`w-full bg-gray-950 border text-white rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff4d01]/50 ${
                              errors.captcha ? "border-red-500" : "border-gray-800"
                            }`}
                          />
                        </div>
                      </div>
                      {errors.captcha && <span className="text-red-500 text-xs block mt-1">{errors.captcha}</span>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#ff4d01] hover:bg-[#ff5d1a] disabled:bg-gray-800 text-white font-bold py-3.5 rounded-xl shadow-lg transition-colors cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="animate-spin text-sm" />
                          <span>Dispatching Request...</span>
                        </>
                      ) : (
                        <span>Submit Project Scope</span>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;