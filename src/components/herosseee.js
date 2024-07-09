import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaTools, FaServer, FaPalette } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

import domainHostingImage from '../assets/hosting.png';
import websiteDevelopmentImage from '../assets/website.png';
import websiteDeploymentImage from '../assets/deployment1.png';
import appDevelopmentImage from '../assets/app.png';
import graphicDesignImage from '../assets/ux.png';
import cloudMigrationImage from '../assets/mig.png';
import devopsImage from '../assets/devops.png';
import websiteMaintenanceImage from '../assets/websitemm.png';

const services = [
  {
    id: 1,
    title: "Domain & Hosting",
    description: "Providing reliable domain registration and hosting solutions.",
    tools: ["cPanel", "Plesk", "WHM", "SSL Certificates"],
    techStack: ["DNS", "HTTP/HTTPS", "FTP", "Email Hosting"],
    image: domainHostingImage,
    color: 'text-pink-500'
  },
  {
    id: 2,
    title: "Website Development",
    description: "Creating responsive and dynamic websites tailored to your needs.",
    tools: ["React", "Node.js", "MongoDB", "Express"],
    techStack: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
    image: websiteDevelopmentImage,
    color: 'text-blue-500'
  },
  {
    id: 3,
    title: "Website Deployment",
    description: "Deploying websites on various platforms ensuring smooth operation.",
    tools: ["Netlify", "Vercel", "AWS", "Azure"],
    techStack: ["CI/CD", "Docker", "Kubernetes", "Serverless"],
    image: websiteDeploymentImage,
    color: 'text-green-500'
  },
  {
    id: 4,
    title: "App Development",
    description: "Building cross-platform mobile applications for iOS and Android.",
    tools: ["React Native", "Flutter", "Firebase", "AWS"],
    techStack: ["Swift", "Kotlin", "GraphQL", "Push Notifications"],
    image: appDevelopmentImage,
    color: 'text-yellow-500'
  },
  {
    id: 5,
    title: "Graphic and UI/UX Design",
    description: "Designing visually appealing and user-friendly interfaces.",
    tools: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
    techStack: ["Wireframing", "Prototyping", "User Research", "Visual Design"],
    image: graphicDesignImage,
    color: 'text-purple-500'
  },
  {
    id: 6,
    title: "Cloud Migration",
    description: "Migrating your existing infrastructure to the cloud seamlessly.",
    tools: ["AWS", "Azure", "Google Cloud", "Terraform"],
    techStack: ["Virtual Machines", "Cloud Storage", "Networking", "Security"],
    image: cloudMigrationImage,
    color: 'text-pink-500'
  },
  {
    id: 7,
    title: "DevOps",
    description: "Implementing DevOps practices to streamline development and operations.",
    tools: ["Jenkins", "GitLab CI", "Ansible", "Prometheus"],
    techStack: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Logging"],
    image: devopsImage,
    color: 'text-orange-500'
  },
  {
    id: 8,
    title: "Website Maintenance",
    description: "Offering ongoing support and maintenance for your website.",
    tools: ["WordPress", "Joomla", "Drupal", "SiteGround"],
    techStack: ["Backup Solutions", "Security Updates", "Performance Optimization", "Content Updates"],
    image: websiteMaintenanceImage,
    color: 'text-teal-500'
  }
];


const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const Container = styled.section`
  background-color: black;
  color: white;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ff00cc, #3333ff);
  -webkit-background-clip: text;
  color: transparent;
  animation: text-gradient 2s infinite;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #999;
`;

const ServiceBox = styled.div`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 1.5rem;
  width: 66.6667%;
  transition: transform 0.3s;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(255, 0, 204, 0.5), 0 0 10px rgba(51, 51, 255, 0.5);
  background: linear-gradient(90deg, #ff00cc, #3333ff);
  background-size: 400% 400%;
  border: 4px solid transparent;
  background-clip: border-box;
  animation: ${shine} 2s linear infinite;

  &:hover {
    transform: scale(1.05);
  }
`;

const Popup = styled(animated.div)`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 1.5rem;
  max-width: 50rem;
  width: 100%;
  box-shadow: 0 0 10px rgba(255, 0, 204, 0.5), 0 0 10px rgba(51, 51, 255, 0.5);
  border: 4px solid transparent;
  background-clip: border-box;
  animation: ${shine} 2s linear infinite;
`;

const Button = styled.button`
  background: linear-gradient(to right, #ff00cc, #3333ff);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 600;
  transition: transform 0.3s;
  box-shadow: 0 0 10px rgba(255, 0, 204, 0.5), 0 0 10px rgba(51, 51, 255, 0.5);
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }
`;

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [displayedServices, setDisplayedServices] = useState([]);

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

  return (
    <Container>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Title>Our Services</Title>
          <Description>
            Explore our wide range of services tailored to your needs.
          </Description>
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
              <ServiceBox
                onClick={() => setSelectedService(service)}
              >
                <h3 className="text-3xl font-bold mb-4 flex items-center">
                  {getServiceIcon(service?.title)}
                  <span className="ml-2">{service?.title}</span>
                </h3>
                <p className="text-gray-400 text-lg">{service?.description}</p>
              </ServiceBox>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <Popup style={popupAnimation} className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
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
              <Button
                onClick={() => {
                  /* Add Talk to Expert functionality */
                }}
              >
                <FaPalette className="mr-2" />
                <span>Talk to Expert</span>
              </Button>
              <Button
                className="bg-gray-700 hover:bg-gray-600"
                onClick={() => setSelectedService(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </Popup>
      )}
    </Container>
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
    case 'Website Maintenance':
      return <FaTools className="text-teal-500" />;
    default:
      return null;
  }
};

export default ServicesSection;
