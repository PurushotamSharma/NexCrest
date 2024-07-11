import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaTools, FaServer, FaPalette } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import domainHostingImage from '../assests/hosting.png';
import websiteDevelopmentImage from '../assests/website.png';
import websiteDeploymentImage from '../assests/deployment1.png';
import appDevelopmentImage from '../assests/app.png';
import graphicDesignImage from '../assests/ux.png';
import cloudMigrationImage from '../assests/mig.png';
import devopsImage from '../assests/devops.png';

const services = [
  {
    id: 1,
    title: "Domain & Hosting",
    description: "Reliable domain registration and hosting solutions.",
    tools: ["cPanel", "Plesk", "WHM", "SSL Certificates"],
    techStack: ["DNS", "HTTP/HTTPS", "FTP", "Email Hosting"],
    image: domainHostingImage,
  },
  {
    id: 2,
    title: "Website Development",
    description: "Responsive and dynamic websites tailored to your needs.",
    tools: ["React", "Node.js", "MongoDB", "Express"],
    techStack: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
    image: websiteDevelopmentImage,
  },
  // ... (other services remain the same)
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [displayedServices, setDisplayedServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < services.length) {
        setDisplayedServices((prev) => [...prev, services[index]]);
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const popupAnimation = useSpring({
    opacity: selectedService ? 1 : 0,
    transform: selectedService ? 'scale(1)' : 'scale(0.8)',
    config: { duration: 300 },
  });

  const handleTalkToExpert = () => {
    navigate('/contact');
  };

  return (
    <section className="bg-black text-white min-h-screen p-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
            Our Services
          </h2>
          <p className="text-lg text-gray-400">
            Explore our wide range of services tailored to your needs.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-600 transform -translate-x-1/2"></div>

          {displayedServices.map((service, index) => (
            <div
              key={service?.id}
              className={`flex items-center mb-24 ${index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}
            >
              <div
                className={`service-box bg-gray-800 p-6 rounded-full w-64 h-64 flex flex-col justify-center items-center transform transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-600 relative ${index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}
                onClick={() => setSelectedService(service)}
              >
                <div className="text-4xl mb-4">{getServiceIcon(service?.title)}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{service?.title}</h3>
                <p className="text-gray-400 text-sm text-center">{service?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <animated.div
          style={popupAnimation}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-gray-800 p-6 rounded-2xl max-w-md w-full border border-gray-600">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              {getServiceIcon(selectedService?.title)}
              <span className="ml-2">{selectedService?.title}</span>
            </h3>
            <p className="text-lg mb-4 text-gray-400">{selectedService?.description}</p>
            <img
              src={selectedService?.image}
              alt={selectedService?.title}
              className="mb-4 w-full h-32 object-cover rounded-xl"
            />
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2 flex items-center">
                <FaTools className="mr-2" />
                <span>Tools:</span>
              </h4>
              <ul className="list-disc list-inside text-gray-400 text-sm">
                {selectedService?.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 flex items-center">
                <FaServer className="mr-2" />
                <span>Tech Stack:</span>
              </h4>
              <ul className="list-disc list-inside text-gray-400 text-sm">
                {selectedService?.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition duration-300"
                onClick={handleTalkToExpert}
              >
                Talk to Expert
              </button>
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-600 transition duration-300"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </div>
          </div>
        </animated.div>
      )}
    </section>
  );
};

const getServiceIcon = (serviceTitle) => {
  switch (serviceTitle) {
    case 'Domain & Hosting':
      return <FaServer className="text-pink-500" />;
    case 'Website Development':
      return <FaPalette className="text-blue-500" />;
    case 'Website Deployment':
      return <FaTools className="text-green-500" />;
    case 'App Development':
      return <FaTools className="text-yellow-500" />;
    case 'Graphic and UI/UX Design':
      return <FaPalette className="text-purple-500" />;
    case 'Cloud Migration':
      return <FaServer className="text-pink-500" />;
    case 'DevOps':
      return <FaTools className="text-orange-500" />;
    default:
      return null;
  }
};

export default ServicesSection;