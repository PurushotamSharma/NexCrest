import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaTools } from 'react-icons/fa';
import domainHostingImage from '../assets/hosting.png';

const DomainHosting = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-20"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text animate-text-gradient">
            Domain & Hosting
          </h2>
          <p className="text-lg text-gray-400">
            Providing reliable domain registration and hosting solutions.
          </p>
        </div>

        <div className="flex justify-between items-center mb-16">
          <div className="w-1/2 pr-8">
            <h3 className="text-3xl font-bold mb-4 flex items-center">
              <FaServer className="text-pink-500 mr-2" />
              <span>Tools</span>
            </h3>
            <ul className="list-disc list-inside text-gray-400">
              <li className="mb-2">cPanel</li>
              <li className="mb-2">Plesk</li>
              <li className="mb-2">WHM</li>
              <li className="mb-2">SSL Certificates</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="text-3xl font-bold mb-4 flex items-center">
              <FaTools className="text-pink-500 mr-2" />
              <span>Tech Stack</span>
            </h3>
            <ul className="list-disc list-inside text-gray-400">
              <li className="mb-2">DNS</li>
              <li className="mb-2">HTTP/HTTPS</li>
              <li className="mb-2">FTP</li>
              <li className="mb-2">Email Hosting</li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-neon hover:shadow-lg"
        >
          <img
            src={domainHostingImage}
            alt="Domain & Hosting"
            className="mb-6 w-full h-64 object-cover rounded-xl shadow-neon animate-pulse"
          />
          <p className="text-xl text-gray-400 mb-6">
            At HiiiDO, we provide reliable and scalable domain registration and hosting solutions to meet your needs. Our team of experts ensures your online presence is secure, fast, and always available.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gradient-to-l transition duration-300 transform hover:scale-105 shadow-neon flex items-center">
            <FaTools className="mr-2" />
            <span>Get Started</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DomainHosting;