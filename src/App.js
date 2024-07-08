import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './components/ContactSection';
import Company from './components/CompanySection';
import Services from './components/ServicesSection';
import Home from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DomainHostingPage from './components/services/DomainHostingPage';
import WebDesignDevelopmentPage from './components/services/WebDesignDevelopmentPage';
import AppDevelopmentPage from './components/services/AppDevelopmentPage';
import CloudMigrationPage from './components/services/cloudmigration.js';
import DevOps from './components/services/DevOpsPage.js';
import GraphicDesignPage from './components/services/GraphicDesignPage.js';
import ClinicManagementPage from './components/products/ClinicManagementPage';
import ProductionManagementPage from './components/products/ProductionManagementPage';
import TaxiBookingPage from './components/products/TaxiBookingPage';
import BusinessListingPage from './components/products/BusinessListingPage';
import Support from './components/Support';

import './fonts.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen relative bg-black text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-grow py-20 px-8 md:px-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/domain-hosting" element={<DomainHostingPage />} />
            <Route path="/services/web-design-development" element={<WebDesignDevelopmentPage />} />
            <Route path="/services/app-development" element={<AppDevelopmentPage />} />
            <Route path="/services/cloud-migration" element={<CloudMigrationPage />} />
            <Route path="/services/devops" element={<DevOps />} />
            <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
            <Route path="/products/clinic-management" element={<ClinicManagementPage />} />
            <Route path="/products/production-management" element={<ProductionManagementPage />} />
            <Route path="/products/taxi-booking" element={<TaxiBookingPage />} />
            <Route path="/products/business-listing" element={<BusinessListingPage />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;