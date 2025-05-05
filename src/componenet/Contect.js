import {
    FaTwitter,
    FaYoutube,
    FaFacebook,
    FaLinkedinIn,
    FaInstagram,
  } from "react-icons/fa";
  
  const Contact = () => {
    return (
      <div className="container mx-auto px-4 py-16">
        {/* Contact Heading */}
        <div className="text-center mb-12">
          <h4 className="text-xl text-orange-600 mb-1">Message Us</h4>
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            Drop Us a Message for any Query
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
  
        {/* Contact Content */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section (Image) */}
          <div className="w-full md:w-1/2">
            <img
              src="contact.png"
              alt="Contact Us"
              className="w-full h-full rounded-lg"
            />
          </div>
  
          {/* Middle Section (Form) */}
          <div className="w-full md:w-1/2 bg-gray-50 p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-gray-800 mb-6">Contact Form</h4>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <textarea
                placeholder="Write your message"
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="4"
              />
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
  
        {/* Contact Info */}
        <div className="w-full text-center mt-10 md:mt-0">
          <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
            Contact Us by Phone Number or Email Address
          </h3>
          <h2 className="text-orange-600 font-bold text-4xl mb-0 hover:text-green-400">
            +088 130 629 8615
          </h2>
  
          <p className="text-lg text-gray-600 mb-2 mt-2">OR</p>
  
          <h2 className="text-orange-600 font-bold text-3xl mb-3 hover:text-green-400">
            hello@bariton.com
          </h2>
  
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  