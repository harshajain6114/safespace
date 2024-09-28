// src/components/FileList.js
import React from 'react';
import { motion } from 'framer-motion';

const FileList = ({ files }) => {
  return (
    <motion.div
      className="mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-2">Uploaded Files</h2>
      <ul className="list-disc pl-5">
        {files.map((file, index) => (
          <li key={index} className="mb-1">{file.name}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FileList;
