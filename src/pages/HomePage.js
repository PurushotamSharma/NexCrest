import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CompanySection from '../components/CompanySection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    document.documentElement.classList.add('dark');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            const navLink = document.querySelector(`nav a[href="/${sectionId}"]`);
            if (navLink) {
              document.querySelectorAll('nav a').forEach((link) => link.classList.remove('active'));
              navLink.classList.add('active');
            }
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B052C] text-white">
      <section id="hero" ref={(el) => (sectionRefs.current[0] = el)}>
        <HeroSection />
      </section>
      <section id="services" ref={(el) => (sectionRefs.current[1] = el)}>
        <ServicesSection />
      </section>
      <section id="company" ref={(el) => (sectionRefs.current[2] = el)}>
        <CompanySection />
      </section>
      <section id="contact" ref={(el) => (sectionRefs.current[3] = el)}>
        <ContactSection />
      </section>
    </div>
  );
};

export default HomePage;
