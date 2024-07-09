import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../assests/logo.png'; // Replace with your actual logo file path

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Wisbloom Logo" className="w-40 mb-4" />
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-2xl text-white hover:text-blue-500" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-2xl text-white hover:text-blue-400" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-2xl text-white hover:text-pink-500" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-white hover:text-blue-600" />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-2xl text-white hover:text-gray-500" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li><a href="/company" className="text-white hover:text-gray-300">About Us</a></li>
              <li><a href="/services" className="text-white hover:text-gray-300">Services</a></li>
              <li><a href="/portfolio" className="text-white hover:text-gray-300">Portfolio</a></li>
              <li><a href="/contact" className="text-white hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/domain-hosting" className="text-white hover:text-gray-300">Domain &amp; Hosting</a></li>
              <li><a href="/services/web-design-development" className="text-white hover:text-gray-300">Web Design &amp; Development</a></li>
              <li><a href="/services/app-development" className="text-white hover:text-gray-300">App Development</a></li>
              <li><a href="/services/cloud-migration" className="text-white hover:text-gray-300">Cloud Migration</a></li>
              <li><a href="/services/devops" className="text-white hover:text-gray-300">DevOps</a></li>
              <li><a href="/services/graphic-design" className="text-white hover:text-gray-300">Graphic Design</a></li>
            </ul>
          </div>
          <div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="/products/clinic-management" className="text-white hover:text-gray-300">Clinic Management</a></li>
                <li><a href="/products/production-management" className="text-white hover:text-gray-300">Production Management</a></li>
                <li><a href="/products/taxi-booking" className="text-white hover:text-gray-300">Taxi Booking</a></li>
                <li><a href="/products/business-listing" className="text-white hover:text-gray-300">Business Listing</a></li>
              </ul>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/faq" className="text-white hover:text-gray-300">FAQ</a></li>
                <li><a href="/support" className="text-white hover:text-gray-300">Support</a></li>
                <li><a href="/privacy-policy" className="text-white hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="/terms-conditions" className="text-white hover:text-gray-300">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Wisbloom. All Rights Reserved.
          </p>
          <p className="text-sm mt-2">
            Made with <span className="text-red-500">&hearts;</span> by Wisbloom
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;