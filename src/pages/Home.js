import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen pt-24 bg-gradient-to-r from-blue-100 to-indigo-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-6xl font-extrabold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to SafeSpace
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A secure and private platform for victims of abuse to store and document their evidence.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full text-center transform transition-transform duration-300 hover:scale-105"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold mb-2 text-blue-600">Upload</h3>
            <p className="text-gray-600">
              Navigate to Upload to add files securely and efficiently.
            </p>
          </motion.div>
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full text-center transform transition-transform duration-300 hover:scale-105"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold mb-2 text-blue-600">Profile</h3>
            <p className="text-gray-600">
              Visit your Profile to view and manage your details.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="/signup"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-blue-500 transition-all"
          >
            Get Started
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;


