
import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  const [scrolled, setScrolled] = useState(false);


  // Track the scroll position to toggle navbar styles
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

  // Array of image URLs
  const images = [
    "client1.jpg", // Replace with your own image URL
    "client2.jpg", // Replace with your own image URL
    "client3.jpg", // Replace with your own image URL
  ];
  const totalImages = images.length;

  const nextPage = () => {
    setDirection("next");
    setCurrentPage((prevPage) => (prevPage + 1) % totalImages);
  };

  const prevPage = () => {
    setDirection("prev");
    setCurrentPage((prevPage) => (prevPage - 1 + totalImages) % totalImages);
  };
  useEffect(() => {
    // Reset direction after image change for smooth animation
    const timer = setTimeout(() => {
      setDirection(null);
    }, 500); // Time matches with transition duration
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Add event listener for scroll
  window.addEventListener("scroll", handleScroll);

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
            scrolled
              ? "bg-white shadow-md text-black"
              : "bg-black bg-opacity-50"
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
                <Link
                  to="/"
                  className="text-white text-lg hover:text-orange-500"
                >
                  Home
                </Link>
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
                <Link
                  to="/Contect"
                  className="text-white text-lg hover:text-orange-500"
                >
                  Contact
                </Link>
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
            <a
              href="/about"
              className="text-lg hover:text-orange-500 block py-2"
            >
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
            <Link to ="#" className="text-lg hover:text-orange-500 block py-2">
              Contact
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-32">
          <h1 className="text-white text-6xl ml-36">
            World’s Leading Machine Learning Company
          </h1>
          <p className="text-white mt-8 ml-36">
            ML today are able to supply needful of help, information, and
            positive experience of maintaining intimacy with customers.
            Eventually, chatbot ideas bring a pleasant experience of all these
            qualities into the conversation.
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

      <div className="flex flex-col md:flex-row bg-white w-full">
        {/* Image Container */}
        <div className="flex-1 p-5 pt-10 mt-10">
          <img
            src="picture1 (2).jpg"
            className="w-full h-72 mt-3 object-cover"
            alt="Description of the image"
          />

          <img
            src="picture1 (2).jpg"
            className="relative left-12 bottom-60 w-96 h-72 mt-3 object-cover"
            alt="Description of the image"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 p-11 mt-10">
          <h1 className="font-bold text-4xl mb-10">
            Engaging New Audiences <br />
            Through Smart Approach
          </h1>

          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </p>

          <p className="mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't.
          </p>

          <button className="bg-orange-500 text-white py-2 px-7 rounded-2xl hover:bg-green-600 focus:outline-none">
            Discover More
          </button>
        </div>
      </div>

      {/* Therd page  */}

      <div className="bg-[#f2f6f9]">
        <div className="text-center pt-14">
          <h3 className="font-bold text-4xl mb-5">
            We Offer Professional Solutions
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-7 mt-10 px-5">
          {/* Data Analysts Card */}
          <div className="group h-72 w-72 border-2 border-gray-300 p-4 bg-white text-center hover:bg-gray-100 hover:shadow-lg hover:translate-y-[-10px] transition-all duration-300 relative">
            <div className="ml-20 h-16 w-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 group-hover:bg-orange-500 transition-colors duration-300 rounded"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-4">Data Analysts</h3>
            <p className="text-gray-600">
              It is a long established fact that a <br />
              reader will be distracted by the <br /> readable content of a page
              when <br />
              looking at its layout.
            </p>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-transparent group-hover:w-full group-hover:bg-orange-500 transition-all duration-300"></div>
          </div>

          {/* Automatic Optimization Card */}
          <div className="group bg-white h-72 w-72 border-2 border-gray-300 p-4 text-center hover:bg-gray-100 hover:shadow-lg hover:translate-y-[-10px] transition-all duration-300 relative">
            <div className="ml-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 group-hover:bg-orange-500 transition-colors duration-300 rounded"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Automatic Optimization
            </h3>
            <p className="text-gray-600">
              It is a long established fact that a <br />
              reader will be distracted by the <br /> readable content of a page
              when <br />
              looking at its layout.
            </p>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-transparent group-hover:w-full group-hover:bg-orange-500 transition-all duration-300"></div>
          </div>

          {/* Security & Surveillance Card */}
          <div className="group bg-white h-72 w-72 border-2 border-gray-300 p-4 text-center hover:bg-gray-100 hover:shadow-lg hover:translate-y-[-10px] transition-all duration-300 relative">
            <div className="ml-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 group-hover:bg-orange-500 transition-colors duration-300 rounded"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Security & Surveillance
            </h3>
            <p className="text-gray-600">
              It is a long established fact that a <br />
              reader will be distracted by the <br /> readable content of a page
              when <br />
              looking at its layout.
            </p>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-transparent group-hover:w-full group-hover:bg-orange-500 transition-all duration-300"></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-7 p-5">
          {/* Healthcare & Manufacturing Card */}
          <div className="group bg-white h-72 w-72 border-2 border-gray-300 p-4 text-center hover:bg-gray-100 hover:shadow-lg hover:translate-y-[-10px] transition-all duration-300 relative">
            <div className="ml-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 group-hover:bg-orange-500 transition-colors duration-300 rounded"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Healthcare & Manufacturing
            </h3>
            <p className="text-gray-600">
              It is a long established fact that a <br />
              reader will be distracted by the <br /> readable content of a page
              when <br />
              looking at its layout.
            </p>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-transparent group-hover:w-full group-hover:bg-orange-500 transition-all duration-300"></div>
          </div>

          {/* Software Engineers Card */}
          <div className="group bg-white h-72 w-72 border-2 border-gray-300 p-4 text-center hover:bg-gray-100 hover:shadow-lg hover:translate-y-[-10px] transition-all duration-300 relative">
            <div className="ml-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 group-hover:bg-orange-500 transition-colors duration-300 rounded"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Software Engineers</h3>
            <p className="text-gray-600">
              It is a long established fact that a <br />
              reader will be distracted by the <br /> readable content of a page
              when <br />
              looking at its layout.
            </p>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-transparent group-hover:w-full group-hover:bg-orange-500 transition-all duration-300"></div>
          </div>

          {/* IT Professionals Card */}
          <div className="group bg-white h-72 w-72 border-2 border-gray-300 p-4 text-center hover:bg-gray-100 hover:shadow-lg hover:translate-y-[-10px] transition-all duration-300 relative">
            <div className="ml-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 group-hover:bg-orange-500 transition-colors duration-300 rounded"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">IT Professionals</h3>
            <p className="text-gray-600">
              It is a long established fact that a <br />
              reader will be distracted by the <br /> readable content of a page
              when <br />
              looking at its layout.
            </p>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-transparent group-hover:w-full group-hover:bg-orange-500 transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* fourth page */}

      <div class="flex flex-col md:flex-row items-center space-y-10 md:space-x-10 md:space-y-0">
        <div class="rounded-lg max-w-lg p-10">
          <h3 class="text-4xl text-gray-800 mt-14 mb-5">
            Check Out Our Latest <br /> Webinar
          </h3>
          <p class="text-gray-600 mb-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage.
          </p>
          <button class="bg-orange-500 text-white py-2 px-7 rounded-2xl hover:bg-green-600 focus:outline-none">
            Watch More
          </button>
        </div>

        <div class="relative w-full md:w-1/2 h-96">
          <img
            src="https://bariton-react.envytheme.com/images/woman.jpg"
            alt="Webinar Image"
            class="w-full h-full object-cover shadow-md rounded-lg"
          />
        </div>
      </div>

      {/* fifth-page */}
      <div class="bg-[#f2f6f9] py-16 px-4 ">
        <div class="text-center max-w-4xl mx-auto mb-12">
          <h3 class="text-3xl font-semibold text-gray-800 mb-4">
            Featured Customers & Partners
          </h3>
          <p class="text-lg text-gray-600 mb-8">
            We’re proud to partner with some of the most innovative and <br />
            trusted brands around the world. Our collaboration helps us achieve
            great things together.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-8">
          <div class="h-32 w-56 bg-white flex justify-center items-center rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 transform group hover:scale-105 hover:shadow-xl">
            <img
              src="partner1.png"
              alt="Partner 1"
              class="h-16 w-16 object-contain group-hover:scale-110 transition-all duration-300"
            />

            <div class="absolute top-0 left-0 w-2 h-0 bg-orange-500 transition-all duration-300 group-hover:h-full"></div>

            <div class="absolute bottom-0 right-0 w-2 h-0 bg-orange-500 transition-all duration-300 group-hover:h-full"></div>
          </div>

          <div class="h-32 w-56 bg-white flex justify-center items-center rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 transform group hover:scale-105 hover:shadow-xl">
            <img
              src="partner2.png"
              alt="Partner 2"
              class="h-16 w-16 object-contain group-hover:scale-110 transition-all duration-300"
            />

            <div class="absolute top-0 left-0 w-2 h-0 bg-orange-500 transition-all duration-300 group-hover:h-full"></div>

            <div class="absolute bottom-0 right-0 w-2 h-0 bg-orange-500 transition-all duration-300 group-hover:h-full"></div>
          </div>

          <div class="h-32 w-56 bg-white flex justify-center items-center rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 transform group hover:scale-105 hover:shadow-xl">
            <img
              src="partner3.png"
              alt="Partner 3"
              class="h-16 w-16 object-contain group-hover:scale-110 transition-all duration-300"
            />

            <div class="absolute top-0 left-0 w-2 h-0 bg-orange-500 transition-all duration-300 group-hover:h-full"></div>

            <div class="absolute bottom-0 right-0 w-2 h-0 bg-orange-500 transition-all duration-300 group-hover:h-full"></div>
          </div>

          <div class="h-32 w-56 bg-white flex justify-center items-center rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 transform group hover:scale-105 hover:shadow-xl">
            <img
              src="partner4.png"
              alt="Partner 4"
              class="h-16 w-16 object-contain group-hover:scale-110 transition-all duration-300"
            />

            <div class="absolute top-0 left-0 w-2 h-0 bg-orange-500 transition-all duration-300 group-hover:h-full"></div>

            <div class="absolute bottom-0 right-0 w-2 h-0 bg-orange-500 transition-all duration-300 group-hover:h-full"></div>
          </div>

          <div class="h-32 w-56 bg-white flex justify-center items-center rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 transform group hover:scale-105 hover:shadow-xl">
            <img
              src="partner5.png"
              alt="Partner 5"
              class="h-16 w-16 object-contain group-hover:scale-110 transition-all duration-300"
            />

            <div class="absolute top-0 left-0 w-2 h-0 bg-orange-500 transition-all duration-300 group-hover:h-full"></div>

            <div class="absolute bottom-0 right-0 w-2 h-0 bg-orange-500 transition-all duration-300 group-hover:h-full"></div>
          </div>
        </div>
      </div>

      {/* sixth page  */}
      <div className="relative w-full  ">
        <div className="relative w-full">
          {/* Slide Container */}
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              direction === "next"
                ? "translate-x-[-100%]"
                : direction === "prev"
                ? "translate-x-[100%]"
                : "translate-x-0"
            }`}
          >
            {/* Current Image */}
            <img
              src={images[currentPage]}
              alt={`Slide ${currentPage + 1}`}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
          <button
            onClick={prevPage}
            className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600"
          >
            &#60;
          </button>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
          <button
            onClick={nextPage}
            className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600"
          >
            &#62;
          </button>
        </div>
      </div>

      {/* Seventh Page */}
      <div className="py-12 px-4 bg-gray-50">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-semibold text-gray-800">
            Our Recent News
          </h3>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Cards Section in Row */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Card 1 */}
          <div className="w-full sm:w-72 h-96 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2">
            <img
              src="blog1.jpg"
              alt="Blog 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                First Card
              </h3>
              <p className="text-gray-600 mt-2">
                Hi, this is the first card and the most important is...
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-72 h-96 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2">
            <img
              src="blog2.jpg"
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Second Card
              </h3>
              <p className="text-gray-600 mt-2">
                Hi, this is the second card, and it’s equally important...
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-72 h-96 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2">
            <img
              src="blog3.jpg"
              alt="Blog 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Third Card
              </h3>
              <p className="text-gray-600 mt-2">
                Hi, this is the third card, which is just as amazing as the
                others!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* eightth page */}
      <div className="flex flex-wrap h-auto">
        {/* Image Section */}
        <div className="w-full sm:w-2/4 bg-black">
          <img src="picture!.jpg" className="w-full h-full object-cover" />
        </div>

        {/* Text Section */}
        <div className="bg-orange-600 w-full sm:w-2/4 px-4 sm:px-10 py-8">
          <h3 className="mt-10 mb-5 text-3xl font-bold text-white text-center sm:text-left">
            Start your free trial
          </h3>
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start">
            <input
              placeholder="Enter your business email here"
              className="mb-4 sm:mb-0 sm:mr-4 w-full sm:w-72 h-10 rounded-full bg-black text-white px-4 focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-white font-bold"
            />
            <button className="px-6 py-2 bg-white text-orange-500 font-semibold rounded-full border-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
              Sign Up Free
            </button>
          </div>
          <p className="text-lg text-white mt-5 leading-relaxed text-center sm:text-left">
            Test out the Machine Learning features for 14 days, no credit card
            required.
          </p>
        </div>
      </div>

      {/* nineth-page */}

      <div
        style={{
          backgroundImage: 'url("images1.jpg")',
          backgroundSize: "40%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "45vh",
        }}
      >
        <div className="relative z-10 w-full gap-6 bg-[#15171a] flex pt-24 px-4 sm:px-8 lg:px-16 flex-col sm:flex-row">
          <div className="w-full sm:w-1/3 lg:w-1/4 p-2">
            <div className="flex gap-2">
              <img src="univarsal_logo.jpeg" className="h-9 w-10 rounded" />
              <h3 className="text-white text-2xl font-bold mb-4">
                Universal Soft Lab
              </h3>
            </div>
            <p className="text-white mt-3">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt <br />
              ut labore et dolore magna aliqua.
              <br /> Ut enim ad minim veniam,
              <br /> quis nostrud.
            </p>
            <div className="flex gap-5 text-white mt-5">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                <FaYoutube size={30} />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="text-white mt-8 sm:mt-0 sm:w-1/4 lg:w-1/4">
            <h3 className="font-bold text-2xl w-12 mb-5 mt-2 border-b-4 border-orange-500 pb-2">
              Services
            </h3>
            <ul className="list-none p-0 space-y-4">
              <li className="hover:text-orange-500 hover:cursor-pointer">
                <a href="/product-engineering">Product Engineering</a>
              </li>
              <li className="hover:text-orange-500 hover:cursor-pointer">
                <a href="/ux-ui-design">UX/UI Design</a>
              </li>
              <li className="hover:text-orange-500 hover:cursor-pointer">
                <a href="/big-data-analysis">Big Data Analysis</a>
              </li>
              <li className="hover:text-orange-500 hover:cursor-pointer">
                <a href="/desktop-applications">Desktop Applications</a>
              </li>
              <li className="hover:text-orange-500 hover:cursor-pointer">
                <a href="/mobile-applications">Mobile Applications</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="text-white mt-8 sm:mt-0 sm:w-1/4 lg:w-1/4">
            <h3 className="font-bold text-2xl w-11 mb-5 mt-1 border-b-4 border-orange-500 pb-2">
              Links
            </h3>
            <ul className="list-none p-0 space-y-4">
              <li className="hover:text-orange-500 hover:cursor-pointer">
                <a href="/product-engineering"> About Us</a>
              </li>
              <li className="hover:text-orange-500 hover:cursor-pointer">
                <a href="/ux-ui-design"> Blog</a>
              </li>
              <li className="hover:text-orange-500 hover:cursor-pointer">
                <a href="/big-data-analysis">Contact</a>
              </li>
              <li className="hover:text-orange-500 hover:cursor-pointer">
                <a href="/desktop-applications"> Services</a>
              </li>
              <li className="hover:text-orange-500 hover:cursor-pointer">
                <a href="/mobile-applications">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Contacts Section */}
          <div className="text-white mt-8 sm:mt-0 sm:w-1/4 lg:w-1/4">
            <h3 className="font-bold text-2xl w-12 mb-5 mt-2 border-b-4 border-orange-500 pb-2">
              Contacts
            </h3>
            <div className="space-y-4">
              <ul className="flex items-center space-x-2">
                <li className="hover:text-orange-500 hover:cursor-pointer transition-colors duration-300">
                  <span className="font-semibold">Address:</span> Victoria,
                  Canada
                </li>
              </ul>
              <ul className="flex items-center space-x-2">
                <li className="hover:text-orange-500 hover:cursor-pointer transition-colors duration-300">
                  <span className="font-semibold">Email:</span>{" "}
                  bariton@gmail.com
                </li>
              </ul>
              <ul className="flex items-center space-x-2">
                <li className="hover:text-orange-500 hover:cursor-pointer transition-colors duration-300">
                  <span className="font-semibold">Phone:</span> +44 587 154756
                </li>
              </ul>
              <ul className="flex items-center space-x-2">
                <li className="hover:text-orange-500 hover:cursor-pointer transition-colors duration-300">
                  <span className="font-semibold">Fax:</span> +44 785 4578964
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <p>&#169; 2025 Bariton. All Rights Reserved EnvyTheme.</p>
        </div>
        <div>
          <p>
            <a href="/privacy-policy" className="hover:text-orange-500">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="/terms-conditions" className="hover:text-orange-500">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;

