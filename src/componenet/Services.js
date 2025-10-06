import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDesktop, FaMobile, FaGlobe, FaDatabase, FaCloud, FaCode, FaCog, FaShieldAlt, FaChartLine, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";

function Services() {
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

  const services = [
    {
      icon: <FaDesktop className="text-4xl text-orange-500" />,
      title: "Desktop Application Development",
      description: "Custom desktop applications using C#, .NET Framework, Windows Forms, and WPF for Windows platforms.",
      features: ["Windows Forms Applications", "WPF Applications", "Console Applications", "Service Applications"]
    },
    {
      icon: <FaGlobe className="text-4xl text-orange-500" />,
      title: "Web Development",
      description: "Modern web applications using React, MVC, CodeIgniter, and other cutting-edge web technologies.",
      features: ["React Applications", "MVC Architecture", "CodeIgniter Framework", "Responsive Design"]
    },
    {
      icon: <FaMobile className="text-4xl text-orange-500" />,
      title: "Mobile App Development",
      description: "Cross-platform and native mobile applications using React Native and Flutter for iOS and Android.",
      features: ["React Native Apps", "Flutter Applications", "iOS Development", "Android Development"]
    },
    {
      icon: <FaDatabase className="text-4xl text-orange-500" />,
      title: "Database Solutions",
      description: "Comprehensive database design, development, and management using MSSQL, PostgreSQL, and MongoDB.",
      features: ["Database Design", "MSSQL Development", "PostgreSQL Solutions", "MongoDB Implementation"]
    },
    {
      icon: <FaCloud className="text-4xl text-orange-500" />,
      title: "Cloud Solutions",
      description: "Cloud-based applications and infrastructure solutions using AWS, Azure, and other cloud platforms.",
      features: ["AWS Solutions", "Azure Services", "Cloud Migration", "DevOps Implementation"]
    },
    {
      icon: <FaCog className="text-4xl text-orange-500" />,
      title: "ERP Solutions",
      description: "Enterprise Resource Planning systems tailored for specific industries including cotton, healthcare, and manufacturing.",
      features: ["Custom ERP Development", "Industry-Specific Solutions", "Process Automation", "Integration Services"]
    },
    {
      icon: <FaShieldAlt className="text-4xl text-orange-500" />,
      title: "Banking & Finance Software",
      description: "Specialized banking applications for MicroCare Finance Institutes (MFI) and Credit Cooperative Societies.",
      features: ["Banking Applications", "MFI Software", "Credit Society Solutions", "Financial Management"]
    },
    {
      icon: <FaChartLine className="text-4xl text-orange-500" />,
      title: "Business Intelligence",
      description: "Data analytics and business intelligence solutions to help organizations make informed decisions.",
      features: ["Data Analytics", "Reporting Systems", "Dashboard Development", "KPI Monitoring"]
    },
    {
      icon: <FaHeadset className="text-4xl text-orange-500" />,
      title: "Support & Maintenance",
      description: "Comprehensive support and maintenance services to ensure your applications run smoothly.",
      features: ["24/7 Support", "Bug Fixes", "Updates & Upgrades", "Performance Optimization"]
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
              Our Services
            </h1>
            <p className="text-white text-xl mb-8 max-w-3xl">
              Comprehensive software development services for Desktop, Web, and Mobile platforms with 18 years of expertise. We have successfully delivered projects for prestigious clients including M.P. Police, Jawarlal Nehru Soot Mill, Hardiya Ete Hospital, SBI Bank Employee Society, and international clients across the USA, UK, Canada, Australia, and European countries.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end software development services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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

      {/* Technology Stack */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use the latest technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <FaCode className="text-3xl text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">C# & .NET</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <FaGlobe className="text-3xl text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">React</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <FaMobile className="text-3xl text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">React Native</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <FaDatabase className="text-3xl text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">MSSQL</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <FaDatabase className="text-3xl text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">PostgreSQL</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <FaDatabase className="text-3xl text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">MongoDB</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <FaMobile className="text-3xl text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">Flutter</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <FaGlobe className="text-3xl text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">CodeIgniter</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <FaCloud className="text-3xl text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">AWS</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <FaCloud className="text-3xl text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">Azure</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <FaCode className="text-3xl text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">Python</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <FaChartLine className="text-3xl text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">AI/ML</div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure quality delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Analysis & Planning</h3>
              <p className="text-gray-600">Understanding requirements and creating detailed project plans.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Design & Architecture</h3>
              <p className="text-gray-600">Creating system architecture and user interface designs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Development & Testing</h3>
              <p className="text-gray-600">Building the application with rigorous testing protocols.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Deployment & Support</h3>
              <p className="text-gray-600">Deploying the solution and providing ongoing support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our solutions have transformed businesses across different industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MP
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-800">M.P. Police Department</h4>
                  <p className="text-gray-600">Government Organization</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg mb-4">
                "Universal Soft Lab delivered an exceptional police management system that has streamlined our operations. Their attention to detail and understanding of our requirements was outstanding. The system has significantly improved our efficiency and helped us serve the community better."
              </p>
              <div className="text-orange-500 font-semibold">- Police Commissioner, M.P. Police</div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  HE
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-800">Hardiya Ete Hospital</h4>
                  <p className="text-gray-600">Healthcare Sector</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg mb-4">
                "The hospital management system has revolutionized our patient care and administrative processes. Universal Soft Lab's healthcare expertise and commitment to quality is truly commendable. Patient satisfaction has increased significantly since implementation."
              </p>
              <div className="text-orange-500 font-semibold">- Hospital Administrator</div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JN
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-800">Jawarlal Nehru Soot Mill</h4>
                  <p className="text-gray-600">Manufacturing Industry</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg mb-4">
                "The ERP solution developed by Universal Soft Lab has transformed our manufacturing processes. Their expertise in industrial software development is evident in the robust and scalable system they delivered. Production efficiency has improved by 40%."
              </p>
              <div className="text-orange-500 font-semibold">- Production Manager</div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  SB
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-800">SBI Bank Employee Society</h4>
                  <p className="text-gray-600">Banking Sector</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg mb-4">
                "Universal Soft Lab's banking software solution has enhanced our member services significantly. Their understanding of banking operations and security requirements is exceptional. Member satisfaction has reached new heights."
              </p>
              <div className="text-orange-500 font-semibold">- Society President</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Clients */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Prestigious Clients</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are proud to serve a diverse range of clients across various sectors, demonstrating our versatility and expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Government & Public Sector</h3>
              <p className="text-gray-600 mb-2">M.P. Police</p>
              <p className="text-gray-600">Indore Municipal Corporation Society</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Healthcare</h3>
              <p className="text-gray-600">Hardiya Ete Hospital</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Manufacturing</h3>
              <p className="text-gray-600">Jawarlal Nehru Soot Mill</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Banking & Finance</h3>
              <p className="text-gray-600 mb-2">SBI Bank Employee Society</p>
              <p className="text-gray-600">IPC Bank Employee Society</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Trade & Commerce</h3>
              <p className="text-gray-600">Sarafa Association</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-3">International Clients</h3>
              <p className="text-gray-600">USA, UK, Canada, Australia</p>
              <p className="text-gray-600">European Countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a solution that drives your business forward.
          </p>
          <Link
            to="/contact"
            className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </>
  );
}

export default Services;
