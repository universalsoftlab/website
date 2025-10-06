import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaCode, FaDesktop, FaMobile, FaDatabase, FaCloud, FaUsers, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";

function Team() {
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

  const teamMembers = [
    {
      name: "Priya Shivhare",
      position: "Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "18+ years of experience in the software industry with expertise in strategic planning, business development, and team leadership. Passionate about driving innovation and delivering exceptional software solutions. Successfully managed international projects for clients across the USA, UK, and European markets.",
      skills: ["Strategic Planning", "Business Development", "Team Leadership", "Project Management", "Software Architecture"],
      social: {
        linkedin: "#",
        email: "priya@universalsoftlab.com"
      }
    },
    {
      name: "Hemant Mehta",
      position: "Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "18+ years of experience in software development and business leadership. Expert in C#, .NET, and enterprise solutions with a focus on scalable and robust applications. Successfully delivered projects for international clients across multiple continents.",
      skills: ["C# & .NET", "Business Strategy", "Team Leadership", "Project Management", "Enterprise Solutions"],
      social: {
        linkedin: "#",
        email: "hemant@universalsoftlab.com"
      }
    },
    {
      name: "HR Manager",
      position: "Human Resources Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "5+ years of experience in human resources management, talent acquisition, and employee development. Ensures our team has the right skills and motivation to deliver exceptional results.",
      skills: ["Talent Acquisition", "Employee Development", "HR Strategy", "Team Building", "Performance Management"],
      social: {
        linkedin: "#",
        email: "hr@universalsoftlab.com"
      }
    },
    {
      name: "Naveen Raw",
      position: "Senior Software Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "Senior React Native developer with extensive experience in mobile application development. Specializes in cross-platform solutions and modern mobile technologies.",
      skills: ["React Native", "JavaScript", "Mobile Development", "Cross-platform", "API Integration"],
      social: {
        linkedin: "#",
        github: "#",
        email: "naveen@universalsoftlab.com"
      }
    },
    {
      name: "Narayan Rawat",
      position: "Senior Software Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "Senior React Native developer with deep expertise in mobile technologies and related frameworks. Passionate about creating high-performance mobile applications.",
      skills: ["React Native", "JavaScript", "Mobile Technologies", "Performance Optimization", "Modern Frameworks"],
      social: {
        linkedin: "#",
        github: "#",
        email: "narayan@universalsoftlab.com"
      }
    },
    {
      name: "Kunal Awarekar",
      position: "Junior Software Developer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "Junior software developer specializing in C#, MVC, and MSSQL technologies. Eager to learn and contribute to innovative software solutions.",
      skills: ["C#", "MVC", "MSSQL", "Web Development", "Database Design"],
      social: {
        linkedin: "#",
        email: "kunal@universalsoftlab.com"
      }
    },
    {
      name: "Shivani Yadav",
      position: "Junior Software Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "Junior software developer with expertise in C#, MSSQL, and MVC frameworks. Dedicated to delivering quality code and learning new technologies.",
      skills: ["C#", "MSSQL", "MVC", "Web Development", "Database Management"],
      social: {
        linkedin: "#",
        email: "shivani@universalsoftlab.com"
      }
    }
  ];

  const departments = [
    {
      icon: <FaCode className="text-3xl text-orange-500" />,
      title: "Development Team",
      description: "Our core development team consists of experienced developers specializing in various technologies and platforms.",
      count: "15+ Developers"
    },
    {
      icon: <FaDesktop className="text-3xl text-orange-500" />,
      title: "Desktop Applications",
      description: "Specialists in Windows desktop applications using C# and .NET Framework.",
      count: "5+ Specialists"
    },
    {
      icon: <FaMobile className="text-3xl text-orange-500" />,
      title: "Mobile Development",
      description: "Expert mobile developers working with React Native and Flutter for cross-platform solutions.",
      count: "6+ Mobile Developers"
    },
    {
      icon: <FaDatabase className="text-3xl text-orange-500" />,
      title: "Database Team",
      description: "Database specialists ensuring optimal data management and performance.",
      count: "4+ DB Specialists"
    },
    {
      icon: <FaCloud className="text-3xl text-orange-500" />,
      title: "Cloud & DevOps",
      description: "Cloud engineers managing infrastructure and deployment processes.",
      count: "3+ Cloud Engineers"
    },
    {
      icon: <FaUsers className="text-3xl text-orange-500" />,
      title: "Support Team",
      description: "Dedicated support team providing 24/7 assistance to our clients.",
      count: "8+ Support Staff"
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
              Meet Our Team
            </h1>
            <p className="text-white text-xl mb-8 max-w-3xl">
              Talented professionals dedicated to delivering exceptional software solutions with 18 years of combined experience. Our team has successfully collaborated with international clients across multiple time zones and cultural contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Team Stats */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">40+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">18+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced professionals leading our company towards innovation and excellence in software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">{member.name}</h3>
                    <p className="text-orange-300 text-sm">{member.position}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-orange-500 transition-colors">
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-400 hover:text-orange-500 transition-colors">
                        <FaTwitter size={20} />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-400 hover:text-orange-500 transition-colors">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-orange-500 transition-colors">
                        <FaEnvelope size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Departments */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Departments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Organized teams working together to deliver comprehensive software solutions across different domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:bg-orange-50 transition-colors duration-300">
                <div className="flex justify-center mb-4">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{dept.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{dept.description}</p>
                <div className="text-orange-500 font-semibold">{dept.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Culture */}
      <div className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Our Company Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <FaAward className="text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-orange-100">We strive for excellence in every project we undertake.</p>
              </div>
              <div className="text-center">
                <FaUsers className="text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-orange-100">We believe in teamwork and collaborative problem-solving.</p>
              </div>
              <div className="text-center">
                <FaCode className="text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-orange-100">We continuously innovate to stay ahead of technology trends.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Our Team */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. If you're passionate about technology and want to work on exciting projects, we'd love to hear from you.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            View Open Positions
          </Link>
        </div>
      </div>
    </>
  );
}

export default Team;
