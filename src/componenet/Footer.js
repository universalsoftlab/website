
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = ()=>{
    return (<>
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
              <img src="univarsal_logo.jpeg" alt="Universal Soft Lab Logo" className="h-9 w-10 rounded" />
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
                  <span className="font-semibold">Address:</span> 13, Press Complex, Apni Duniya Press Campus, Behind Dainik Bhaskar, A.B. Road, Indore - 452010
                </li>
              </ul>
              <ul className="flex items-center space-x-2">
                <li className="hover:text-orange-500 hover:cursor-pointer transition-colors duration-300">
                  <span className="font-semibold">Email:</span>{" "}
                  info@universalsoftlab.com
                </li>
              </ul>
              <ul className="flex items-center space-x-2">
                <li className="hover:text-orange-500 hover:cursor-pointer transition-colors duration-300">
                  <span className="font-semibold">Phone:</span> +91 83588 111 00
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
      </div></>
    )
}
export default Footer ;