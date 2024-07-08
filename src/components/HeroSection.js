import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "../assests/avatar.png";
import virtualImage from "../assests/virtual.png";
import img1 from "../assests/img1.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";
import img5 from "../assests/img5.png";
import img6 from "../assests/img6.png";
import img7 from "../assests/img7.png";





const HeroSection = () => {
  const images = [virtualImage, img1, img2,img3,img4,img5,img6,img7];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="relative min-h-screen bg-black text-white transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 xl:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <nav className="flex-1">
              <ul className="flex items-center justify-center space-x-4">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-500 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-500 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-500 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-500 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center">
              <Link
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition duration-300"
              >
                <img
                  src={avatar}
                  alt="Expert"
                  className="w-8 h-8 rounded-full"
                />
                <span>Talk to Expert</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between pt-20 pb-12">
        <div className="md:w-1/2 px-4 mb-12 md:mb-0 text-center md:text-top">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="text-fuchsia-600">YOUR</span>{" "}
            <span className="text-blue-500">INNOVATION,</span>{" "}
            <span className="text-green-500">OUR</span>{" "}
            <span className="text-yellow-500">PROTECTION!</span>
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 transition duration-500 ease-in-out transform hover:scale-105">
            <span className="text-fuchsia-600">W</span>elcome to{" "}
            <span className="text-white">Micro</span>vise
          </h1>
          <p className="text-lg mb-8 transition duration-500 ease-in-out transform hover:scale-105">
            Where we transform your digital aspirations into reality with our
            cutting-edge IT solutions. As pioneers in the field of information
            technology, we are dedicated to delivering innovative, reliable, and
            customized solutions that drive success across all industries.
          </p>

          <a href="#" class="learn-more group">
            <span class="button-text">Learn More</span>
            <span class="arrow-icon">
              <svg
                class="arrow-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
        <div className="md:w-1/2 px-4">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mt-12 pb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center transition duration-500 ease-in-out transform hover:scale-105">
          Why Choose Microvise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="flex items-center transition duration-500 ease-in-out transform hover:scale-105">
            <div className="bg-fuchsia-600 rounded-full p-4 mr-4">
              <svg
                className="w-8 h-8 text-white transition duration-300 ease-in-out transform hover:rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Solution From Expert</h3>
              <p>Having More Hands On</p>
            </div>
          </div>
          <div className="flex items-center transition duration-500 ease-in-out transform hover:scale-105">
            <div className="bg-green-500 rounded-full p-4 mr-4">
              <svg
                className="w-8 h-8 text-white transition duration-300 ease-in-out transform hover:rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Collaborative Team</h3>
            </div>
          </div>
          <div className="flex items-center transition duration-500 ease-in-out transform hover:scale-105">
            <div className="bg-blue-500 rounded-full p-4 mr-4">
              <svg
                className="w-8 h-8 text-white transition duration-300 ease-in-out transform hover:rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Step By Step</h3>
              <p>Problem Solving</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl md:text-4xl font-bold transition duration-500 ease-in-out transform hover:scale-105">
            <span className="text-fuchsia-600">Effective</span> and{" "}
            <span className="text-green-500">Premium</span> Solution
          </h3>
          <h3 className="text-2xl md:text-4xl font-bold mt-2 transition duration-500 ease-in-out transform hover:scale-105">
            Choose <span className="text-blue-500">NextCrest</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
