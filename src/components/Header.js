import React from 'react';
import logo from '../assests/logo.png'; // Replace with the path to your logo file

const Header = () => {
  return (
    <header className="bg-black ">
      <div className="container mx-auto flex items-center justify-between top-left">
        <img src={logo} alt="Logo" className="h-20" />
        {/* Add any other navigation items or content */}
      </div>
    </header>
  );
};

export default Header;