import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Handle file upload here
    console.log('File:', formData.get('file'));
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-50 to-orange-100 pt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-6xl font-extrabold text-gray-800 mb-8"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Our Services
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 max-w-4xl text-center mb-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        SafeSpace offers a range of services designed to support and protect our users. From secure document storage to confidential communication channels, we are here to provide the tools you need to stay safe.
      </motion.p>
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg border-2 border-transparent hover:border-blue-500 transition-all"
      >
        <div className="mb-6">
          <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
            Upload File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 transition-transform transform hover:scale-105"
        >
          Upload
        </button>
      </motion.form>
    </motion.div>
  );
};

export default Services;

