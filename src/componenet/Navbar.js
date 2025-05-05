import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  ;
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // When the page is scrolled more than 50px, change navbar styles
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Listen to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  window.addEventListener("scroll", handleScroll);
  return (
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
          backdropFilter: scrolled ? "none" : "blur(5px)", // Optional blur effect when navbar is transparent
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <img src="univarsal_logo.jpeg" className="h-11 w-15 rounded" />
              <div className="text-white text-2xl font-bold ml-3">
                Universal Soft Lab
              </div>
            </div>

            {/* Hamburger Icon for mobile */}
            <div className="md:hidden flex items-center">
              <button
                className="text-white text-2xl mr-5" // Add right margin here
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu on click
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Navbar Links for Larger Screens */}
            <div className="hidden md:flex space-x-8 ">
              <a href="/" className="text-white text-lg hover:text-orange-500">
                Home
              </a>
              <a
                href="/about"
                className="text-white text-lg hover:text-orange-500"
              >
                About
              </a>
              <a
                href="/services"
                className="text-white text-lg hover:text-orange-500"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-white text-lg hover:text-orange-500"
              >
                Product
              </a>
              <a href="#" className="text-white text-lg hover:text-orange-500">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden fixed inset-0 bg-black bg-opacity-70 z-20 flex justify-start items-center px-4 py-10 transition-all duration-300`}
      >
        <div className="w-64 relative bottom-72  bg-black p-4 space-y-6 text-white">
          <a href="/" className="text-lg hover:text-orange-500 block py-2">
            Home
          </a>
          <a href="/about" className="text-lg hover:text-orange-500 block py-2">
            About
          </a>
          <a
            href="/services"
            className="text-lg hover:text-orange-500 block py-2"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-lg hover:text-orange-500 block py-2"
          >
            Product
          </a>
          <a href="/Contect" className="text-lg hover:text-orange-500 block py-2">
            Contact
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32">
        <h1 className="text-white text-6xl ml-36">
          World’s Leading Machine Learning Company
        </h1>
        <p className="text-white mt-8 ml-36">
          ML today are able to supply needful of help, information, and positive
          experience of maintaining intimacy with customers. Eventually, chatbot
          ideas bring a pleasant experience of all these qualities into the
          conversation.
        </p>
      </div>

      {/* Three Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-28 px-6">
        {/* Box 1 */}
        <div className="relative group hover:shadow-lg rounded overflow-hidden mb-5">
          <div className="absolute inset-0 bg-[#ff4d01] transition-all duration-500 group-hover:w-full w-0"></div>
          <div className="text-white p-5 relative z-10">
            <h3 className="text-2xl">
              Robotic Process <br /> Automation
            </h3>
            <p className="mt-3">
              Lorem ipsum dolor consectetur <br /> adipiscing elit, sed do
              eiusmod <br /> tempor incididunt ut labore. <br /> Ut enim ad
              minim veniam.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="relative group hover:shadow-lg rounded overflow-hidden mb-5">
          <div className="absolute inset-0 bg-[#ff4d01] transition-all duration-500 group-hover:w-full w-0"></div>
          <div className="text-white p-5 relative z-10">
            <h3 className="text-2xl">Cognitive Automation</h3>
            <p className="mt-9">
              Lorem ipsum dolor consectetur <br /> adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore. Ut enim ad minim{" "}
              <br /> veniam.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="relative group hover:shadow-lg rounded overflow-hidden mb-5">
          <div className="absolute inset-0 bg-[#ff4d01] transition-all duration-500 group-hover:w-full w-0"></div>
          <div className="text-white p-5 relative z-10">
            <h3 className="text-2xl">Cognitive Engagement</h3>
            <p className="mt-9">
              Lorem ipsum dolor consectetur <br /> adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore. Ut enim ad minim{" "}
              <br /> veniam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
