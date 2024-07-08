import React from 'react';

const WebsiteDevelopmentPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-purple-400">Website Development</h1>
      <p className="text-lg text-gray-300 mb-6">
        Creating responsive and dynamic websites tailored to your needs. Our team uses the latest technologies to ensure your website is not only visually appealing but also functional and optimized for performance.
      </p>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-purple-300">Tools:</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-purple-300">Tech Stack:</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>REST APIs</li>
        </ul>
      </div>
      <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 transform hover:scale-105 shadow-neon">
        Talk to Expert
      </button>
    </div>
  );
};

export default WebsiteDevelopmentPage;
