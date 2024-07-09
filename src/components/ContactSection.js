import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contact from  '../assests/Image.png'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://backend-inky-iota.vercel.app/api/contact', formData);
      toast.success('Message sent successfully!');
      setFormData({ fullName: '', email: '', phoneNumber: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Error sending message. Please try again later.');
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-black text-white py-20 px-8 md:px-16 font-sans">
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <p className="text-gray-400 mb-8 text-center">
          We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange 
          or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the
          markets with us or just have a great idea you can't wait to share with us!
        </p>
        <div className="relative bg-black p-6 rounded-lg border border-gray-600">
          <div className="absolute top-0 left-0 w-full flex justify-start p-3 space-x-1">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 mt-10">
            <div>
              <label htmlFor="fullName" className="block text-white font-semibold mb-2">
                ❯ Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-black border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                ❯ Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-black border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-white font-semibold mb-2">
                ❯ Phone Number:
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full bg-black border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-white font-semibold mb-2">
                ❯ Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-black border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                ❯ Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-black border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows="4"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-600 hover:to-fuchsia-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        {/* <div className="absolute top-1/2 right-2 transform translate-x-1/3 -translate-y-1/9">
          <img
            src={contact}
            alt="Contact Us"
            className="w-64 h-64 rounded-full "
          />
        </div> */}
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactSection;
