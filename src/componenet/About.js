import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMapMarkerAlt, FaPhone, FaEnvelope, FaAward, FaUsers, FaCode, FaMobile, FaDesktop, FaGlobe, FaShieldAlt, FaCog, FaChartLine, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
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
              About Universal Soft Lab
            </h1>
            <p className="text-white text-xl mb-8 max-w-3xl">
              Leading software development company with 18 years of experience in delivering innovative solutions for Desktop, Web, and Mobile applications.
            </p>
            <div className="flex items-center text-white">
              <FaMapMarkerAlt className="mr-2" />
              <span>13, Press Complex, Apni Duniya Press Campus, Behind Dainik Bhaskar, A.B. Road, Indore - 452010</span>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                18 Years of Excellence in Software Development
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Universal Soft Lab has been at the forefront of software innovation since 2006. We specialize in developing comprehensive software solutions for various industries including banking, healthcare, manufacturing, and cooperative societies. Our prestigious client portfolio includes M.P. Police, Jawarlal Nehru Soot Mill, Hardiya Ete Hospital, SBI Bank Employee Society, IPC Bank Employee Society, Sarafa Association, and Indore Municipal Corporation Society.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our expertise spans across multiple technologies and platforms, enabling us to deliver robust, scalable, and user-friendly applications that meet the evolving needs of our clients. We have demonstrated our ability to work across different time zones, cultural contexts, and business requirements, making us a trusted partner for global enterprises.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">18+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Our Team"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering cutting-edge software solutions that drive business growth and operational efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <FaAward className="text-orange-500 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To provide innovative, reliable, and scalable software solutions that empower businesses to achieve their goals through technology. We strive to deliver excellence in every project while maintaining the highest standards of quality and customer satisfaction. Our mission is to bridge the gap between complex business requirements and cutting-edge technology solutions, ensuring our clients stay ahead in the digital transformation journey.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <FaUsers className="text-orange-500 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To be the leading software development company in India, recognized for our technical expertise, innovative solutions, and commitment to client success. We envision a future where technology seamlessly integrates with business processes, creating a world where every organization can leverage cutting-edge software solutions to achieve unprecedented growth and efficiency. Our vision is to be the trusted technology partner for businesses worldwide, driving digital transformation and innovation across all industries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our work and define our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">We continuously explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the competition.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">We maintain the highest standards of code quality, security, and performance in every project we deliver.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Client-Centric</h3>
              <p className="text-gray-600">Our clients' success is our success. We prioritize their needs and work collaboratively to achieve their business objectives.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCog className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every aspect of our work, from initial consultation to final delivery and ongoing support.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Scalability</h3>
              <p className="text-gray-600">We design solutions that grow with our clients' businesses, ensuring long-term value and adaptability.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeadset className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600">We conduct business with honesty, transparency, and ethical practices, building lasting relationships based on trust.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Expertise */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Technical Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust and scalable applications across multiple platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FaDesktop className="text-orange-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Desktop Applications</h3>
              <p className="text-gray-600">C#, .NET Framework, Windows Forms, WPF</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FaGlobe className="text-orange-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Web Development</h3>
              <p className="text-gray-600">React, MVC, CodeIgniter, Node.js</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FaMobile className="text-orange-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mobile Apps</h3>
              <p className="text-gray-600">React Native, Flutter, iOS, Android</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FaCode className="text-orange-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Database</h3>
              <p className="text-gray-600">MSSQL, PostgreSQL, MongoDB</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FaCode className="text-orange-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600">AWS, Azure, Docker, CI/CD</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FaCode className="text-orange-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">AI & ML</h3>
              <p className="text-gray-600">Python, TensorFlow, Machine Learning</p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working with Universal Soft Lab.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  MP
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">M.P. Police Department</h4>
                  <p className="text-gray-600 text-sm">Government Organization</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Universal Soft Lab delivered an exceptional police management system that has streamlined our operations. Their attention to detail and understanding of our requirements was outstanding. The system has significantly improved our efficiency."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JN
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Jawarlal Nehru Soot Mill</h4>
                  <p className="text-gray-600 text-sm">Manufacturing Industry</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The ERP solution developed by Universal Soft Lab has transformed our manufacturing processes. Their expertise in industrial software development is evident in the robust and scalable system they delivered."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  HE
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Hardiya Ete Hospital</h4>
                  <p className="text-gray-600 text-sm">Healthcare Sector</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The hospital management system has revolutionized our patient care and administrative processes. Universal Soft Lab's healthcare expertise and commitment to quality is truly commendable."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  SB
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">SBI Bank Employee Society</h4>
                  <p className="text-gray-600 text-sm">Banking Sector</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Universal Soft Lab's banking software solution has enhanced our member services significantly. Their understanding of banking operations and security requirements is exceptional."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  IP
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">IPC Bank Employee Society</h4>
                  <p className="text-gray-600 text-sm">Banking Sector</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The cooperative society management system has streamlined our operations and improved member satisfaction. Universal Soft Lab's expertise in financial software is outstanding."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  SA
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Sarafa Association</h4>
                  <p className="text-gray-600 text-sm">Trade & Commerce</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The trade management system has modernized our business operations. Universal Soft Lab's understanding of commercial requirements and their technical expertise is remarkable."
              </p>
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
              We are proud to serve a diverse range of clients across various sectors, from government organizations to private enterprises and cooperative societies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Government Sector</h3>
              <p className="text-gray-600">M.P. Police</p>
              <p className="text-gray-600">Indore Municipal Corporation Society</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Healthcare</h3>
              <p className="text-gray-600">Hardiya Ete Hospital</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Manufacturing</h3>
              <p className="text-gray-600">Jawarlal Nehru Soot Mill</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Banking & Finance</h3>
              <p className="text-gray-600">SBI Bank Employee Society</p>
              <p className="text-gray-600">IPC Bank Employee Society</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Trade & Commerce</h3>
              <p className="text-gray-600">Sarafa Association</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">International Clients</h3>
              <p className="text-gray-600">USA, UK, Canada, Australia</p>
              <p className="text-gray-600">European Countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Get in Touch with Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center">
                <FaMapMarkerAlt className="text-2xl mr-3" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-sm">13, Press Complex, Apni Duniya Press Campus</div>
                  <div className="text-sm">Behind Dainik Bhaskar, A.B. Road, Indore - 452010</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <FaPhone className="text-2xl mr-3" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-sm">+91 83588 111 00</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <FaEnvelope className="text-2xl mr-3" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm">info@universalsoftlab.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
