import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CompanySection from '../components/CompanySection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#0B052C] text-white">
      <HeroSection />
      <ServicesSection />
      <CompanySection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
