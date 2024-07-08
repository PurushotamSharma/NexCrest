import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assests/avatar.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 xl:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <nav className="flex-1">
            <ul className="flex items-center justify-center space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-500 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-500 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/company"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-500 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-500 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition duration-300"
            >
              <img
                src={avatar}
                alt="Expert"
                className="w-8 h-8 rounded-full"
              />
              <span>Talk to Expert</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;