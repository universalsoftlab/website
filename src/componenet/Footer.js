import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#070a13] border-t border-gray-800 text-gray-400">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="univarsal_logo.png"
                alt="Universal Soft Lab Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="text-white text-xl font-bold font-sans">
                Universal Soft Lab
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Custom software development and product engineering agency. We design, build, optimize, and modernize high-performance web, mobile, and cloud systems for businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/universal-soft-lab/about/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#ff4d01] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#ff4d01] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#ff4d01] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#ff4d01] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Core Focus Areas */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wider uppercase mb-6 relative">
              Core Capabilities
              <span className="absolute bottom-[-8px] left-0 w-8 h-[3px] bg-[#ff4d01] rounded-full"></span>
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Product Discovery & Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Web Applications (React, .NET)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Mobile Apps (Flutter, React Native)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Database Optimization (PostgreSQL)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Legacy WinForms Modernization
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wider uppercase mb-6 relative">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-8 h-[3px] bg-[#ff4d01] rounded-full"></span>
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Agency
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Service Offerings
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Case Studies Portfolio
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Our Engineering Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wider uppercase mb-6 relative">
              Office Details
              <span className="absolute bottom-[-8px] left-0 w-8 h-[3px] bg-[#ff4d01] rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#ff4d01] mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  13, Press Complex, Apni Duniya Press Campus, Behind Dainik Bhaskar, A.B. Road, Indore - 452010, M.P.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#ff4d01] flex-shrink-0" />
                <span>+91 83588 111 00</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#ff4d01] flex-shrink-0" />
                <a
                  href="mailto:info@universalsoftlab.com"
                  className="hover:text-white transition-colors"
                >
                  info@universalsoftlab.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaGlobe className="text-[#ff4d01] flex-shrink-0" />
                <span>www.universalsoftlab.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Footer (Copyrights) */}
      <div className="bg-[#04060b] border-t border-gray-900/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-center md:text-left">
            &copy; 2026 Universal Soft Lab. Technology division of Universal Tradecom Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;