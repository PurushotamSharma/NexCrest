import React from "react";
import journey from "../assests/journey.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faTrophy, faUserFriends, faStar } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import avatar from '../assests/avatar.png'
import avatar1 from '../assests/avatar1.png'
import avatar2 from '../assests/avatar2.png'
import avatar3 from '../assests/avatar3.png'
import {faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import missionImage from '../assests/mission.png'

const AboutSection = () => {
  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="container mx-auto">
        {/* About NexCrest */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About NexCrest</h2>
          <p className="text-lg">
            We know what should be provided within a software solution for an
            institute to increase productivity and efficiency of students,
            staff, and directors.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2">
            <img
              src={missionImage}
              alt="Mission and Vision"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg mb-8">
              At <strong>NexCrest</strong>, our mission is to help businesses of all sizes establish a strong and effective online presence through our innovative web development solutions. We aim to deliver customized and high-quality digital products that meet the specific needs of each client, while also providing excellent customer service and support.
            </p>
            <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg">
              Our vision at <strong>NexCrest</strong> is to become a leading web development company that is recognized for our expertise, innovation, and commitment to client success. We strive to empower businesses with the tools they need to thrive in the digital age, while also forming a collaborative and growth-oriented company culture that values creativity, integrity, and excellence.
            </p>
          </div>
        </div>

        {/* Our Journey */}
        <div className="md:flex items-center mb-12">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Our Journey</h3>
            <p className="text-base mb-8">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg" style={{ background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)", boxShadow: "8px 8px 16px #0b0b0b, -8px -8px 16px #333333" }}>
                <p className="text-3xl font-bold"><CountUp end={200} duration={3} /></p>
                <p className="text-base">Happy Customers</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg" style={{ background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)", boxShadow: "8px 8px 16px #0b0b0b, -8px -8px 16px #333333" }}>
                <p className="text-3xl font-bold"><CountUp end={10000} duration={3} /></p>
                <p className="text-base">Properties For Clients</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg" style={{ background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)", boxShadow: "8px 8px 16px #0b0b0b, -8px -8px 16px #333333" }}>
                <p className="text-3xl font-bold"><CountUp end={16} duration={3} /></p>
                <p className="text-base">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 md:ml-8">
            <img
              src={journey}
              alt="Team illustration"
              className="rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <h3 className="text-3xl font-semibold mb-4 text-white">Our Values</h3>
            <p className="text-lg mb-8 text-gray-400">
              Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-lg" style={{ background: "#1a1a1a", boxShadow: "8px 8px 16px #0b0b0b, -8px -8px 16px #333333" }}>
            <div className="p-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg" style={{ background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)", boxShadow: "8px 8px 16px #0b0b0b, -8px -8px 16px #333333" }}>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faShieldAlt} className="w-10 h-10 text-purple-500 mr-2" />
                <h4 className="text-xl font-bold text-white">Trust</h4>
              </div>
              <p className="text-base text-gray-400">
                Trust is the cornerstone of every successful real estate transaction.
              </p>
            </div>
            <div className="p-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg" style={{ background: "rgba(255, 255, 255, 0.75)", boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.2)" }}>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faTrophy} className="w-10 h-10 text-purple-500 mr-2" />
                <h4 className="text-xl font-bold text-black">Excellence</h4>
              </div>
              <p className="text-base text-black">
                We set the bar high for ourselves. From the properties we list to the services we provide.
              </p>
            </div>
            <div className="p-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg" style={{ background: "rgba(255, 255, 255, 0.75)", boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.2)" }}>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faUserFriends} className="w-10 h-10 text-purple-500 mr-2" />
                <h4 className="text-xl font-bold text-black">Client-Centric</h4>
              </div>
              <p className="text-base text-black">
                Your dreams and needs are at the center of our universe. We listen, understand.
              </p>
            </div>
            <div className="p-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg" style={{ background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)", boxShadow: "8px 8px 16px #0b0b0b, -8px -8px 16px #333333" }}>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faStar} className="w-10 h-10 text-purple-500 mr-2" />
                <h4 className="text-xl font-bold text-white">Our Commitment</h4>
              </div>
              <p className="text-base text-gray-400">
                We are dedicated to providing you with the highest level of service, professionalism, and support.
              </p>
            </div>
          </div>
        </div>

        {/* Client Feedback */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Our Valued Clients Feedback
          </h3>
          <div className="flex justify-center space-x-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-1/3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <div className="flex items-center mb-4">
                <img 
                  src={avatar1}
                  alt="Shubham Khandelwal" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold text-white">Shubham Khandelwal</h4>
                  <p className="text-gray-400">Businessman</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address."
              </p>
              <div className="flex justify-center">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-1/3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <div className="flex items-center mb-4">
                <img
                  src={avatar}
                  alt="Jane Smith"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold text-white">Jane Smith</h4>
                  <p className="text-gray-400">Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "This is an amazing platform for finding properties. The user interface is intuitive, and the customer support is top-notch. Highly recommended!"
              </p>
              <div className="flex justify-center">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Box */}
        <div className="flex justify-center mt-12">
          <div className="w-full md:w-2/3 p-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg" style={{ background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)", boxShadow: "8px 8px 16px #0b0b0b, -8px -8px 16px #333333" }}>
            <h3 className="text-2xl font-semibold mb-4 text-white">Get Free Consultation Now!</h3>
            <p className="text-lg mb-6 text-gray-400">Let's create a powerful website that grows with your business.</p>
            <div className="flex justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Consult Now →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;