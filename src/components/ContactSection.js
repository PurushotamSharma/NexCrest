import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import contact from '../assests/Image.png'; // Ensure this path is correct

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const ContactSection = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post('https://backend-inky-iota.vercel.app/api/contact', values);
      toast.success('Message sent successfully!');
      resetForm();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Error sending message. Please try again later.');
    }
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
        <div className="relative bg-black p-6 rounded-lg border border-gray-600 mb-8">
          <div className="absolute top-0 left-0 w-full flex justify-start p-3 space-x-1">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-6 mt-10">
              <div>
                <label htmlFor="fullName" className="block text-white font-semibold mb-2">
                  ❯ Full Name:
                </label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full bg-black border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  ❯ Email Address:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-black border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-white font-semibold mb-2">
                  ❯ Phone Number:
                </label>
                <Field
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full bg-black border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  ❯ Subject:
                </label>
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-black border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  ❯ Message:
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className="w-full bg-black border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows="4"
                  placeholder="Enter Your Message"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-600 hover:to-fuchsia-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg" style={{ background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)", boxShadow: "8px 8px 16px #0b0b0b, -8px -8px 16px #333333" }}>
            <FaPhone className="text-red-500 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-red-500">Phone</h3>
            <p className="text-gray-400 mt-2">+91 8866955496</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg" style={{ background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)", boxShadow: "8px 8px 16px #0b0b0b, -8px -8px 16px #333333" }}>
            <FaEnvelope className="text-red-500 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-red-500">Email</h3>
            <p className="text-gray-400 mt-2">wizbloom.tech@gmail.com</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactSection;
