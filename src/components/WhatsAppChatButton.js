import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChatButton = () => {
  const handleWhatsAppChat = () => {
    const phoneNumber = '917383055495'; // Your WhatsApp phone number with India country code
    const message = 'Hello, I have a question'; // Replace with your predefined message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      className="fixed bottom-8 right-8 bg-green-500 text-white px-4 py-2 rounded-full flex items-center shadow-lg hover:bg-green-600 transition duration-300 focus:outline-none"
      onClick={handleWhatsAppChat}
    >
      <FaWhatsapp className="mr-2" />
      <span>Chat with Us</span>
    </button>
  );
};

export default WhatsAppChatButton;