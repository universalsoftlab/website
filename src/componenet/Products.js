import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDesktop, FaMobile, FaGlobe, FaHospital, FaUniversity, FaIndustry, FaShoppingCart, FaChartLine, FaShieldAlt, FaCloud, FaCog, FaGraduationCap, FaBuilding, FaTruck, FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";

function Products() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const existingProducts = [
    {
      icon: <FaCreditCard className="text-4xl text-orange-500" />,
      title: "Banking Application for MFI",
      description: "Comprehensive banking solution designed specifically for MicroCare Finance Institutes (MFI) to manage loans, savings, and financial transactions.",
      features: ["Loan Management", "Savings Account Management", "Transaction Processing", "Reporting & Analytics", "Customer Management"],
      category: "Banking & Finance"
    },
    {
      icon: <FaUniversity className="text-4xl text-orange-500" />,
      title: "COSMOS - Credit Cooperative Society Software",
      description: "Specialized software for Credit Cooperative Societies to manage member accounts, loans, deposits, and cooperative operations.",
      features: ["Member Management", "Loan Processing", "Deposit Management", "Dividend Calculation", "Compliance Reporting"],
      category: "Banking & Finance"
    },
    {
      icon: <FaIndustry className="text-4xl text-orange-500" />,
      title: "ERP Solutions for Cotton Industry",
      description: "Enterprise Resource Planning system tailored for cotton industry covering procurement, processing, inventory, and sales management.",
      features: ["Procurement Management", "Inventory Tracking", "Production Planning", "Quality Control", "Sales Management"],
      category: "Manufacturing"
    },
    {
      icon: <FaHospital className="text-4xl text-orange-500" />,
      title: "Hospital Management Application",
      description: "Comprehensive hospital management system covering patient records, appointments, billing, pharmacy, and staff management.",
      features: ["Patient Management", "Appointment Scheduling", "Billing & Insurance", "Pharmacy Management", "Staff Management"],
      category: "Healthcare"
    }
  ];

  const newProducts = [
    {
      icon: <FaShoppingCart className="text-4xl text-orange-500" />,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with mobile-first design, payment integration, inventory management, and analytics dashboard.",
      features: ["Multi-vendor Support", "Payment Gateway Integration", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
      category: "E-Commerce"
    },
    {
      icon: <FaChartLine className="text-4xl text-orange-500" />,
      title: "Business Intelligence Suite",
      description: "Advanced analytics and reporting platform with real-time dashboards, predictive analytics, and data visualization.",
      features: ["Real-time Dashboards", "Predictive Analytics", "Data Visualization", "Custom Reports", "KPI Monitoring"],
      category: "Analytics"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-orange-500" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security suite including threat detection, vulnerability assessment, and security monitoring for enterprises.",
      features: ["Threat Detection", "Vulnerability Assessment", "Security Monitoring", "Incident Response", "Compliance Management"],
      category: "Security"
    },
    {
      icon: <FaCloud className="text-4xl text-orange-500" />,
      title: "Cloud Migration Services",
      description: "Complete cloud migration and management services for AWS, Azure, and Google Cloud platforms.",
      features: ["Cloud Assessment", "Migration Planning", "Data Migration", "Cost Optimization", "Ongoing Management"],
      category: "Cloud Services"
    },
    {
      icon: <FaGraduationCap className="text-4xl text-orange-500" />,
      title: "Learning Management System",
      description: "Comprehensive LMS platform for educational institutions and corporate training with course management and progress tracking.",
      features: ["Course Management", "Student Tracking", "Assessment Tools", "Video Conferencing", "Progress Analytics"],
      category: "Education"
    },
    {
      icon: <FaBuilding className="text-4xl text-orange-500" />,
      title: "Property Management System",
      description: "Complete property management solution for real estate companies covering listings, tenant management, and financial tracking.",
      features: ["Property Listings", "Tenant Management", "Rent Collection", "Maintenance Tracking", "Financial Reporting"],
      category: "Real Estate"
    },
    {
      icon: <FaTruck className="text-4xl text-orange-500" />,
      title: "Logistics Management System",
      description: "End-to-end logistics solution for supply chain management, fleet tracking, and delivery optimization.",
      features: ["Fleet Management", "Route Optimization", "Delivery Tracking", "Inventory Management", "Performance Analytics"],
      category: "Logistics"
    },
    {
      icon: <FaCog className="text-4xl text-orange-500" />,
      title: "IoT Platform",
      description: "Internet of Things platform for device management, data collection, and automation across various industries.",
      features: ["Device Management", "Data Collection", "Real-time Monitoring", "Automation Rules", "Alert System"],
      category: "IoT"
    }
  ];

  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        {/* Navbar */}
        <nav
          className={`${
            scrolled ? "bg-white shadow-md text-black" : "bg-black bg-opacity-50"
          } fixed top-0 left-0 w-full z-10 transition-all duration-300`}
          style={{
            backdropFilter: scrolled ? "none" : "blur(5px)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <img src="univarsal_logo.jpeg" alt="Universal Soft Lab Logo" className="h-11 w-15 rounded" />
                <div className="text-white text-2xl font-bold ml-3">
                  Universal Soft Lab
                </div>
              </div>

              <div className="md:hidden flex items-center">
                <button
                  className="text-white text-2xl mr-5"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-white text-lg hover:text-orange-500">
                  Home
                </Link>
                <Link to="/about" className="text-white text-lg hover:text-orange-500">
                  About
                </Link>
                <Link to="/services" className="text-white text-lg hover:text-orange-500">
                  Services
                </Link>
                <Link to="/products" className="text-white text-lg hover:text-orange-500">
                  Products
                </Link>
                <Link to="/team" className="text-white text-lg hover:text-orange-500">
                  Team
                </Link>
                <Link to="/gallery" className="text-white text-lg hover:text-orange-500">
                  Gallery
                </Link>
                <Link to="/contact" className="text-white text-lg hover:text-orange-500">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden fixed inset-0 bg-black bg-opacity-70 z-20 flex justify-start items-center px-4 py-10 transition-all duration-300`}
        >
          <div className="w-64 relative bottom-72 bg-black p-4 space-y-6 text-white">
            <Link to="/" className="text-lg hover:text-orange-500 block py-2">
              Home
            </Link>
            <Link to="/about" className="text-lg hover:text-orange-500 block py-2">
              About
            </Link>
            <Link to="/services" className="text-lg hover:text-orange-500 block py-2">
              Services
            </Link>
            <Link to="/products" className="text-lg hover:text-orange-500 block py-2">
              Products
            </Link>
            <Link to="/team" className="text-lg hover:text-orange-500 block py-2">
              Team
            </Link>
            <Link to="/contact" className="text-lg hover:text-orange-500 block py-2">
              Contact
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-white text-6xl font-bold mb-8">
              Our Products
            </h1>
            <p className="text-white text-xl mb-8 max-w-3xl">
              Innovative software solutions designed to meet the evolving needs of modern businesses across various industries.
            </p>
          </div>
        </div>
      </div>

      {/* Existing Products Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Proven Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-tested software solutions that have been successfully deployed across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {existingProducts.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  {product.icon}
                  <div className="ml-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Products Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge products built with modern technologies to address current market trends and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newProducts.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {product.icon}
                  <div className="ml-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>
                <ul className="space-y-1">
                  {product.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Integration */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technology Integration</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our products are built using the latest technologies and frameworks to ensure scalability, security, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <FaDesktop className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Desktop Applications</h3>
              <p className="text-gray-600">Native Windows applications built with C# and .NET Framework for optimal performance.</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <FaGlobe className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Web Applications</h3>
              <p className="text-gray-600">Modern web applications using React, MVC, and responsive design principles.</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <FaMobile className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mobile Applications</h3>
              <p className="text-gray-600">Cross-platform mobile apps using React Native and Flutter for iOS and Android.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Development */}
      <div className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            We specialize in creating custom software solutions tailored to your specific business requirements and industry needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">18+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">500+</div>
              <div className="text-orange-100">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">50+</div>
              <div className="text-orange-100">Happy Clients</div>
            </div>
          </div>
          <Link
            to="/contact"
            className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </div>
    </>
  );
}

export default Products;
