import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaComments, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/products" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f19]/80 backdrop-blur-md border-b border-gray-800/80 shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="univarsal_logo.png"
              alt="Universal Soft Lab Logo"
              className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-white text-xl font-bold tracking-tight font-sans group-hover:text-gray-100 transition-colors">
                Universal Soft Lab
              </span>
              <span className="text-[10px] text-gray-400 group-hover:text-[#ff4d01] tracking-wider uppercase font-medium transition-colors">
                Product Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-[#ff4d01]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#ff4d01] rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/downloads/CosmosSetup.exe"
              download="CosmosSetup.exe"
              className="inline-flex items-center gap-2 bg-gray-900/90 hover:bg-gray-800 text-gray-200 hover:text-white border border-gray-700/60 hover:border-[#ff4d01] px-4 py-2.5 rounded-lg text-xs lg:text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
              title="Download COSMOS Desktop Application (.exe)"
            >
              <FaDownload className="text-[#ff4d01]" />
              <span>Download COSMOS</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#ff4d01] hover:bg-[#ff5d1a] text-white px-5 py-2.5 rounded-lg text-xs lg:text-sm font-semibold shadow-lg shadow-[#ff4d01]/10 hover:shadow-[#ff4d01]/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FaComments />
              <span>Let's Talk</span>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d01]/50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Drawer Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-72 bg-[#0d1321] border-l border-gray-800 shadow-2xl z-50 p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <img
                src="univarsal_logo.png"
                alt="Universal Soft Lab Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-white font-bold text-lg">USL Menu</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-lg focus:outline-none"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-[#ff4d01]/10 text-[#ff4d01]"
                    : "text-gray-300 hover:bg-gray-800/40 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800 space-y-3">
          <a
            href="/downloads/CosmosSetup.exe"
            download="CosmosSetup.exe"
            onClick={() => setIsMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 py-3 rounded-lg text-sm font-semibold transition-all"
          >
            <FaDownload className="text-[#ff4d01]" />
            <span>Download COSMOS App</span>
          </a>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#ff4d01] hover:bg-[#ff5d1a] text-white py-3 rounded-lg text-sm font-semibold shadow-lg transition-all"
          >
            <FaComments />
            <span>Schedule Call</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
