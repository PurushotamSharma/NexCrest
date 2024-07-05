import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './components/ContactSection';
import Company from './components/CompanySection';
import Services from './components/ServicesSection';
import Home from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import './fonts.css'; // Import custom font CSS

const App = () => {
  return (
    <Router>
      <div className="min-h-screen relative min-h-screen bg-black text-white transition-colors duration-300 text-white">
        <Navbar />
        <main className="flex-grow py-20 px-8 md:px-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer /> {/* Add the Footer component */}
      </div>
    </Router>
  );
};

export default App;