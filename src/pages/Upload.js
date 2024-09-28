import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import FileList from '../components/FileList';
import { motion } from 'framer-motion';

const Upload = () => {
  const [files, setFiles] = useState([]);

  // Example handler to simulate file upload
  const handleFileUpload = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  return (
    <motion.div
      className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        Upload Files
      </motion.h1>
      <motion.div
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg border border-gray-200"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <FileUpload onFileUpload={handleFileUpload} />
      </motion.div>
      <motion.div
        className="w-full max-w-lg mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <FileList files={files} />
      </motion.div>
    </motion.div>
  );
};

export default Upload;


