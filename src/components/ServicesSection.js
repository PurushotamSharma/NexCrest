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
    description: "Providing reliable domain registration and hosting solutions.",
    tools: ["cPanel", "Plesk", "WHM", "SSL Certificates"],
    techStack: ["DNS", "HTTP/HTTPS", "FTP", "Email Hosting"],
    image: domainHostingImage,
    color: 'text-pink-500',
    borderColor: 'border-color-1',
  },
  {
    id: 2,
    title: "Website Development",
    description: "Creating responsive and dynamic websites tailored to your needs.",
    tools: ["React", "Node.js", "MongoDB", "Express"],
    techStack: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
    image: websiteDevelopmentImage,
    color: 'text-blue-500',
    borderColor: 'border-color-2',
  },
  {
    id: 3,
    title: "Website Deployment",
    description: "Deploying websites on various platforms ensuring smooth operation.",
    tools: ["Netlify", "Vercel", "AWS", "Azure"],
    techStack: ["CI/CD", "Docker", "Kubernetes", "Serverless"],
    image: websiteDeploymentImage,
    color: 'text-green-500',
    borderColor: 'border-color-3',
  },
  {
    id: 4,
    title: "App Development",
    description: "Building cross-platform mobile applications for iOS and Android.",
    tools: ["React Native", "Flutter", "Firebase", "AWS"],
    techStack: ["Swift", "Kotlin", "GraphQL", "Push Notifications"],
    image: appDevelopmentImage,
    color: 'text-yellow-500',
    borderColor: 'border-color-4',
  },
  {
    id: 5,
    title: "Graphic and UI/UX Design",
    description: "Designing visually appealing and user-friendly interfaces.",
    tools: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
    techStack: ["Wireframing", "Prototyping", "User Research", "Visual Design"],
    image: graphicDesignImage,
    color: 'text-purple-500',
    borderColor: 'border-color-5',
  },
  {
    id: 6,
    title: "Cloud Migration",
    description: "Migrating your existing infrastructure to the cloud seamlessly.",
    tools: ["AWS", "Azure", "Google Cloud", "Terraform"],
    techStack: ["Virtual Machines", "Cloud Storage", "Networking", "Security"],
    image: cloudMigrationImage,
    color: 'text-pink-500',
    borderColor: 'border-color-6',
  },
  {
    id: 7,
    title: "DevOps",
    description: "Implementing DevOps practices to streamline development and operations.",
    tools: ["Jenkins", "GitLab CI", "Ansible", "Prometheus"],
    techStack: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Logging"],
    image: devopsImage,
    color: 'text-orange-500',
    borderColor: 'border-color-7',
  },
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
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text animate-text-gradient">
            Our Services
          </h2>
          <p className="text-lg text-gray-400">
            Explore our wide range of services tailored to your needs.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-blue-500 transform -translate-x-1/2 rounded-full shadow-neon animate-glow"></div>

          {displayedServices.map((service, index) => (
            <div
              key={service?.id}
              className={`flex items-center mb-32 ${
                index % 2 === 0 ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`service-box bg-gray-900 p-8 rounded-2xl w-2/3 transform transition-all duration-300 hover:scale-105 cursor-pointer shadow-neon hover:shadow-lg border-2 border-transparent rounded-full relative`}
                onClick={() => setSelectedService(service)}
              >
                <div className={`absolute inset-0 rounded-full border-2 border-transparent animate-border-gradient ${service?.borderColor}`}></div>
                <h3 className={`text-3xl font-bold mb-4 flex items-center text-white relative z-10`}>
                  {getServiceIcon(service?.title)}
                  <span className="ml-2">{service?.title}</span>
                </h3>
                <p className={`text-gray-400 text-lg relative z-10`}>{service?.description}</p>
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
          <div className="bg-gray-900 p-8 rounded-3xl max-w-2xl w-full shadow-neon border border-gradient-to-r from-pink-500 to-blue-500 transform transition-all duration-300 scale-100 animate-shine-pulse">
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              {getServiceIcon(selectedService?.title)}
              <span className="ml-2 text-gradient bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
                {selectedService?.title}
              </span>
            </h3>
            <p className="text-xl mb-6 text-gray-400">{selectedService?.description}</p>
            <img
              src={selectedService?.image}
              alt={selectedService?.title}
              className="mb-6 w-full h-64 object-cover rounded-xl shadow-neon animate-pulse"
            />
            <div className="mb-6">
              <h4 className="text-2xl font-semibold mb-3 text-gradient bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text flex items-center">
                <FaTools className="mr-2" />
                <span>Tools:</span>
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                {selectedService?.tools.map((tool, index) => (
                  <li key={index} className="mb-2">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <h4 className="text-2xl font-semibold mb-3 text-gradient bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text flex items-center">
                <FaServer className="mr-2" />
                <span>Tech Stack:</span>
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                {selectedService?.techStack.map((tech, index) => (
                  <li key={index} className="mb-2">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between">
              <button
                className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gradient-to-l transition duration-300 transform hover:scale-105 shadow-neon flex items-center"
                onClick={handleTalkToExpert}
              >
                <FaPalette className="mr-2" />
                <span>Talk to Expert</span>
              </button>
              <button
                className="bg-gray-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-600 transition duration-300 transform hover:scale-105 shadow-neon"
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