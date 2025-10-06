import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaImages, FaCamera, FaBuilding, FaUsers, FaCode, FaTrophy, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";

function Gallery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const galleryCategories = [
    { id: 'all', name: 'All', icon: <FaImages /> },
    { id: 'office', name: 'Office', icon: <FaBuilding /> },
    { id: 'team', name: 'Team', icon: <FaUsers /> },
    { id: 'projects', name: 'Projects', icon: <FaCode /> },
    { id: 'awards', name: 'Awards', icon: <FaTrophy /> }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'office',
      title: 'Our Office Space',
      description: 'Modern workspace designed for creativity and collaboration',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      date: '2024'
    },
    {
      id: 2,
      category: 'team',
      title: 'Team Meeting',
      description: 'Our development team brainstorming session',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      date: '2024'
    },
    {
      id: 3,
      category: 'projects',
      title: 'Banking Application',
      description: 'Screenshot of our MFI banking software interface',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      date: '2024'
    },
    {
      id: 4,
      category: 'office',
      title: 'Development Center',
      description: 'Our state-of-the-art development facility',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      date: '2024'
    },
    {
      id: 5,
      category: 'team',
      title: 'Team Building',
      description: 'Annual team building event',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      date: '2024'
    },
    {
      id: 6,
      category: 'projects',
      title: 'Hospital Management System',
      description: 'Dashboard of our hospital management application',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      date: '2024'
    },
    {
      id: 7,
      category: 'awards',
      title: 'Industry Recognition',
      description: 'Awards and certifications received by our team',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      date: '2024'
    },
    {
      id: 8,
      category: 'office',
      title: 'Conference Room',
      description: 'Meeting room for client presentations',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      date: '2024'
    },
    {
      id: 9,
      category: 'projects',
      title: 'ERP Solution',
      description: 'Cotton industry ERP system interface',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      date: '2024'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
            <Link to="/gallery" className="text-lg hover:text-orange-500 block py-2">
              Gallery
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
              Our Gallery
            </h1>
            <p className="text-white text-xl mb-8 max-w-3xl">
              Explore our office, team, projects, and achievements through our photo gallery.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Categories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through different categories to see our work, team, and achievements.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.date}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {galleryCategories.find(cat => cat.id === item.category)?.name}
                    </span>
                    <FaCamera className="text-orange-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <FaAward className="text-4xl mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">18+</div>
                <div className="text-orange-100">Years Experience</div>
              </div>
              <div className="text-center">
                <FaCode className="text-4xl mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-orange-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <FaUsers className="text-4xl mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-orange-100">Happy Clients</div>
              </div>
              <div className="text-center">
                <FaTrophy className="text-4xl mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-orange-100">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Want to See More?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our office or contact us to learn more about our team and projects.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

export default Gallery;





