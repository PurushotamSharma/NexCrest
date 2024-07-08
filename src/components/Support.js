import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Support.css';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    priority: 'Select',
    service: 'Web Design & Development',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-inky-iota.vercel.app/api/support', formData);
      console.log(response.data);
      toast.success('Your ticket has been submitted successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({
        name: '',
        email: '',
        priority: 'Select',
        service: 'Web Design & Development',
        query: ''
      });
    } catch (error) {
      console.error('There was an error submitting your ticket!', error);
      toast.error('There was an error submitting your ticket.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="support-container">
      <div className="support-header">
        <h1>Support</h1>
      </div>
      <div className="support-content">
        <div className="support-text">
          <h2>Get the Help You Need with <span className="highlight">Microvise</span></h2>
          <p>
            At <span className="highlight">Microvise</span>, we understand the importance of having reliable support when you need it. 
            That's why we offer expert support for all of our website design services. Our team of experienced professionals is always 
            available to answer your questions, troubleshoot issues, and help you make the most of your website.
          </p>
          <p>
            Whether you need technical assistance, guidance on website design best practices, or simply have a question about our services, 
            we're here to help. We take pride in our commitment to providing top-notch support to our clients, and we're always striving to 
            exceed your expectations.
          </p>
        </div>
        <div className="support-features">
          <div className="features-benefits">
            <h3>Features Benefits</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                Continuous Improvement
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                Streamlined Processes
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                Value-added Services
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                Tailored Solutions
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                Delivery On Time
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                24 x 7 Support
              </li>
            </ul>
          </div>
          <div className="suggest-for">
            <h3>Suggest For</h3>
            <div className="tags">
              <span>#SmallSizeBusiness</span>
              <span>#GrowingCompanies</span>
              <span>#MidSizeCompanies</span>
              <span>#EstablishedBusinesses</span>
            </div>
          </div>
        </div>
      </div>
      <div className="support-form">
        <h2>Submit A <span className="highlight">Ticket</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name <span className="required">*</span></label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email <span className="required">*</span></label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Priority</label>
            <select name="priority" value={formData.priority} onChange={handleChange}>
              <option>Select</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div className="form-group">
            <label>Select Services <span className="required">*</span></label>
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option>Web Design & Development</option>
              <option>App Development</option>
              <option>Graphic and UI/UX Design</option>
              <option>Cloud Migration</option>
              <option>DevOps</option>
            </select>
          </div>
          <div className="form-group">
            <label>Query <span className="required">*</span></label>
            <textarea
              name="query"
              placeholder="Your query"
              value={formData.query}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="consultation-banner">
        <h2>Get Free Consultation Now!</h2>
        <p>Let's create a powerful website that grows with your business.</p>
        <button className="consult-now">Consult Now →</button>
      </div>
      <div className="whatsapp-button">
        <img src="path-to-your-whatsapp-icon.png" alt="WhatsApp" />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Support;