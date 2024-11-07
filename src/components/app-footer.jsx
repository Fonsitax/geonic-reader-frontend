import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const AppFooter = () => {
  return (
    <footer className="bg-indigo-950 text-indigo-200 py-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Geonic Reader°</h3>
            <p className="text-sm text-indigo-400">
              Geonic Reader° is a revolutionary platform designed to make learning geography engaging and accessible. From bionic reading to interactive cards, we’re here to enhance your educational journey.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-indigo-300">Home</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-indigo-300">About</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-indigo-300">Features</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-indigo-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <p className="text-sm text-indigo-400 mb-4">
              Stay connected with us on social media for the latest updates and features.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="hover:text-indigo-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="hover:text-indigo-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-indigo-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-indigo-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-indigo-700 pt-6 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-indigo-400">
            &copy; 2024 Geonic Reader°. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <Link to="#" className="text-sm hover:text-indigo-300">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm hover:text-indigo-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
