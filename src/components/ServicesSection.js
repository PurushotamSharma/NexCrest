import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaTools, FaServer, FaPalette } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';

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
  },
  {
    id: 2,
    title: "Website Development",
    description: "Creating responsive and dynamic websites tailored to your needs.",
    tools: ["React", "Node.js", "MongoDB", "Express"],
    techStack: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
    image: websiteDevelopmentImage,
  },
  {
    id: 3,
    title: "Website Deployment",
    description: "Deploying websites on various platforms ensuring smooth operation.",
    tools: ["Netlify", "Vercel", "AWS", "Azure"],
    techStack: ["CI/CD", "Docker", "Kubernetes", "Serverless"],
    image: websiteDeploymentImage,
  },
  {
    id: 4,
    title: "App Development",
    description: "Building cross-platform mobile applications for iOS and Android.",
    tools: ["React Native", "Flutter", "Firebase", "AWS"],
    techStack: ["Swift", "Kotlin", "GraphQL", "Push Notifications"],
    image: appDevelopmentImage,
  },
  {
    id: 5,
    title: "Graphic and UI/UX Design",
    description: "Designing visually appealing and user-friendly interfaces.",
    tools: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
    techStack: ["Wireframing", "Prototyping", "User Research", "Visual Design"],
    image: graphicDesignImage,
  },
  {
    id: 6,
    title: "Cloud Migration",
    description: "Migrating your existing infrastructure to the cloud seamlessly.",
    tools: ["AWS", "Azure", "Google Cloud", "Terraform"],
    techStack: ["Virtual Machines", "Cloud Storage", "Networking", "Security"],
    image: cloudMigrationImage,
  },
  {
    id: 7,
    title: "DevOps",
    description: "Implementing DevOps practices to streamline development and operations.",
    tools: ["Jenkins", "GitLab CI", "Ansible", "Prometheus"],
    techStack: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Logging"],
    image: devopsImage,
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [displayedServices, setDisplayedServices] = useState([]);
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = sectionRef.current;
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;
        const scrollPosition = window.pageYOffset + window.innerHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          const scrollPercentage = (scrollPosition - sectionTop) / (sectionBottom - sectionTop);
          const servicesCount = Math.ceil(scrollPercentage * services.length);
          setDisplayedServices(services.slice(0, servicesCount));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
    <section
      ref={sectionRef}
      className="bg-black text-white min-h-screen p-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-lg text-gray-400">
            Explore our wide range of services tailored to your needs.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-600 transform -translate-x-1/2 rounded-full"></div>

          {displayedServices.map((service, index) => (
            <div
              key={service?.id}
              className={`flex items-center mb-32 ${index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}
            >
              <div
                className="bg-gray-800 p-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg w-2/3 cursor-pointer"
                style={{
                  background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
                  boxShadow: '8px 8px 16px #0b0b0b, -8px -8px 16px #333333',
                }}
                onClick={() => setSelectedService(service)}
              >
                <h3 className="text-3xl font-bold mb-2 flex items-center">
                  {getServiceIcon(service?.title)}
                  <span className="ml-2">{service?.title}</span>
                </h3>
                <p className="text-base text-gray-400">{service?.description}</p>
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
          <div
            className="bg-gray-800 p-6 rounded-lg max-w-lg w-full shadow-lg"
            style={{
              background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
              boxShadow: '8px 8px 16px #0b0b0b, -8px -8px 16px #333333',
            }}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
              {getServiceIcon(selectedService?.title)}
              <span className="ml-2">{selectedService?.title}</span>
            </h3>
            <p className="text-lg mb-4 text-gray-400">{selectedService?.description}</p>
            <img
              src={selectedService?.image}
              alt={selectedService?.title}
              className="mb-4 w-full h-40 object-cover rounded-lg"
            />
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2 text-white flex items-center">
                <FaTools className="mr-2" />
                <span>Tools:</span>
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                {selectedService?.tools.map((tool, index) => (
                  <li key={index} className="mb-1">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-white flex items-center">
                <FaServer className="mr-2" />
                <span>Tech Stack:</span>
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                {selectedService?.techStack.map((tech, index) => (
                  <li key={index} className="mb-1">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold"
                onClick={handleTalkToExpert}
              >
                <FaPalette className="mr-2 inline-block" />
                <span>Talk to Expert</span>
              </button>
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded-lg text-lg font-semibold"
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