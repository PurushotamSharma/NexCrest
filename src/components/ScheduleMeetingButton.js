import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';


const ScheduleMeetingButton = () => {
  const handleClick = () => {
    // Open Calendly link in a new window
    window.open('https://calendly.com/sharmapurushotamps56', '_blank');
  };

  return (
   
    <button
      className="fixed bottom-8 left-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition duration-300 focus:outline-none shadow-lg"
      onClick={handleClick}
    >
      <FaCalendarAlt className="w-5 h-5" />
      <span>Schedule Meeting</span>
    </button>
  );
};

export default ScheduleMeetingButton;