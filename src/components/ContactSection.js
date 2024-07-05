import React, { useState } from 'react';
import axios from 'axios';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Error sending message. Please try again later.');
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-screen bg-black text-white transition-colors duration-300 text-white py-20 px-8 md:px-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-600 mb-4">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Have a question or want to learn more? Get in touch with us.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-400 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-600 bg-gray-800 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-fuchsia-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-400 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-600 bg-gray-800 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-fuchsia-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-400 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border border-gray-600 bg-gray-800 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-fuchsia-500 resize-none"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
