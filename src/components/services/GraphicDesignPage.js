import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import graphicDesignImage from '../../assests/ux.png'; // Replace with the actual path to your image
import project1Image from '../../assests/work/portfolio.png';
import project2Image from '../../assests/work/shopO.png';
import project3Image from '../../assests/work/patelautomotive.png';

const GraphicDesignPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .fade-in { animation: fadeIn 1s ease-out forwards; }
          .fade-in-left { animation: fadeInLeft 1s ease-out forwards; }
          .fade-in-right { animation: fadeInRight 1s ease-out forwards; }
          .gradient-bg {
            background: linear-gradient(135deg, #ff9a9e, #fad0c4);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .gradient-bg:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 15px rgba(0,0,0,0.3);
          }
          .section-header {
            font-size: 2.5rem;
            font-weight: bold;
            background: linear-gradient(90deg, #ff9a9e, #fad0c4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>

      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 text-pink-400 fade-in-left">Graphic & UI/UX Design</h1>
        <p className="text-lg text-gray-300 fade-in-right">
          Creative and intuitive designs to enhance user experience and engagement.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="fade-in-left">
          <h2 className="text-3xl font-semibold mb-4 text-white">Our Design Expertise</h2>
          <p className="text-lg text-gray-300 mb-6">
            We create visually appealing and user-friendly designs that captivate your audience. Our design solutions are tailored to meet your business needs.
          </p>
          <ul className="space-y-2 mb-6">
            {['Graphic Design', 'UI/UX Design', 'Brand Identity', '24/7 Support'].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300 fade-in">
                <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500 mr-2" />
                {item}
              </li>
            ))}
          </ul>
          <div>
            <Link to="/contact" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300 transform hover:scale-105">
              Get Free Consultation Now!
            </Link>
          </div>
        </div>
        <div className="fade-in-right">
          <img src={graphicDesignImage} alt="Graphic Design" className="w-full rounded-md shadow-lg" />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center text-white section-header">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Portfolio Design', description: 'Custom portfolio website design with modern UI/UX features.', demoLink: 'https://www.purushotam.online/', image: project1Image },
            { name: 'E-commerce Website Development', description: 'Fully functional e-commerce platform tailored to your business needs.', demoLink: 'https://shop0-front-end.vercel.app/', image: project2Image },
            { name: 'Cloud Hosting Solutions', description: 'Cloud hosting infrastructure setup for scalable and reliable performance.', demoLink: 'https://patelautomotive.in/', image: project3Image },
          ].map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-md shadow-lg transform hover:scale-105 transition duration-300 gradient-bg">
              <img src={project.image} alt={project.name} className="w-full rounded-md mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">{project.name}</h3>
              <p className="text-gray-400">{project.description}</p>
              <a href={project.demoLink} className="block mt-4 text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">View Demo</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center text-white section-header">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Reliable Service', '24/7 Support', 'Affordable Prices'].map((item, index) => (
            <div key={index} className="text-center p-4 bg-gray-800 rounded-md shadow-lg transform hover:scale-105 transition duration-300 gradient-bg">
              <h3 className="text-xl font-bold mb-2 text-white">{item}</h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignPage;
