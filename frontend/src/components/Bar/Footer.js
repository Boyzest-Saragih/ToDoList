import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" w-full bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
            <p className="text-sm">
              Create as many lists as you can, then forget about them!
            </p>
            <p className="text-sm italic line-through">King Boyok 2025</p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Email: boyzsetsumbayak@gmail.com</li>
              <li>Phone: (+62) 123 4567 8910 </li>
              <li>Address: Tembung, India Pacific</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition-all"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-full hover:bg-blue-400 transition-all"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-full hover:bg-pink-500 transition-all"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-full hover:bg-blue-800 transition-all"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-sm text-center">
          <p>© {currentYear} Boyokerrr || All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
