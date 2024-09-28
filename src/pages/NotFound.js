// src/pages/NotFound.js
import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      className="text-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">The page you're looking for doesn't exist.</p>
    </motion.div>
  );
};

export default NotFound;
