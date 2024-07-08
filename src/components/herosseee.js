import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assests/avatar.png";
import logo from "../assests/logo.png"; // Replace with the path to your logo file

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 xl:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10 mr-4" />
            </Link>
          </div>
          <nav className="flex-1">
            {/* Rest of the navigation code */}
          </nav>
          <div className="flex items-center">
            {/* Rest of the "Talk to Expert" code */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;