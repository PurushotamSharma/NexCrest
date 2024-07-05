import React, { useState } from 'react';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Creating responsive and dynamic websites tailored to your needs.",
      tools: ["React", "Node.js", "MongoDB", "Express"],
      techStack: ["HTML5", "CSS3", "JavaScript", "REST APIs"]
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications for iOS and Android.",
      tools: ["React Native", "Flutter", "Firebase", "AWS"],
      techStack: ["Swift", "Kotlin", "GraphQL", "Push Notifications"]
    },
    // Add more services as needed
  ];

  return (
    <section className="bg-black text-white min-h-screen p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-neon animate-float">
            Services
          </span>
        </div>

        <div className="relative">
          {/* Glowing line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-500 transform -translate-x-1/2 rounded-full shadow-neon"></div>

          {/* Services */}
          {services.map((service, index) => (
            <div key={service.id} className={`flex items-center mb-32 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`bg-gray-900 p-8 rounded-2xl w-2/3 transform transition-all duration-300 hover:scale-105 cursor-pointer
                            border border-purple-500 shadow-neon hover:shadow-lg hover:border-purple-400
                            ${index % 2 === 0 ? 'mr-16' : 'ml-16'}`}
                onClick={() => setSelectedService(service)}
              >
                <h3 className="text-3xl font-bold mb-4 text-purple-400">{service.title}</h3>
                <p className="text-gray-300 text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service details popup */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 p-8 rounded-3xl max-w-2xl w-full shadow-neon border border-purple-500 transform transition-all duration-300 scale-100 animate-shine-pulse">
            <h3 className="text-3xl font-bold mb-6 text-purple-400">{selectedService.title}</h3>
            <p className="text-xl mb-6 text-gray-300">{selectedService.description}</p>
            <div className="mb-6">
              <h4 className="text-2xl font-semibold mb-3 text-purple-300">Tools:</h4>
              <ul className="list-disc list-inside text-gray-300">
                {selectedService.tools.map((tool, index) => (
                  <li key={index} className="mb-2">{tool}</li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <h4 className="text-2xl font-semibold mb-3 text-purple-300">Tech Stack:</h4>
              <ul className="list-disc list-inside text-gray-300">
                {selectedService.techStack.map((tech, index) => (
                  <li key={index} className="mb-2">{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between">
              <button 
                className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 transform hover:scale-105 shadow-neon"
                onClick={() => {/* Add learn more functionality */}}
              >
                Learn More
              </button>
              <button 
                className="bg-gray-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-600 transition duration-300 transform hover:scale-105 shadow-neon"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;