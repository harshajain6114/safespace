import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen pt-24 bg-gradient-to-r from-green-50 to-teal-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="text-center mb-12 max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl font-extrabold text-gray-800 mb-8"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          About SafeSpace
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          SafeSpace is committed to providing a secure environment for individuals in need. Our platform ensures privacy, safety, and peace of mind for those documenting sensitive information. Learn more about our mission and values here.
        </motion.p>
      </motion.div>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <div className="bg-white shadow-lg rounded-lg p-6">
          <motion.h2
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Our Mission
          </motion.h2>
          <p className="text-gray-600">
            Our mission is to offer a trusted platform where users can document their experiences safely and privately. We strive to make a positive impact on the lives of those we serve.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <motion.h2
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Our Values
          </motion.h2>
          <p className="text-gray-600">
            Integrity, empathy, and confidentiality are at the core of our values. We are dedicated to creating a safe space where users feel respected and supported.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <motion.h2
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Our Team
          </motion.h2>
          <p className="text-gray-600">
            Our team is composed of dedicated professionals who are passionate about making a difference. Together, we work tirelessly to provide the best service and support for our users.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
