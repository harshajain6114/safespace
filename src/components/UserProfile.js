// src/components/UserProfile.js
import React from 'react';
import { motion } from 'framer-motion';

const UserProfile = ({ user }) => {
  return (
    <motion.div
      className="p-6 border rounded-lg shadow-lg bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p className="text-lg font-medium mb-2">Name: {user.name}</p>
      <p className="text-lg font-medium mb-2">Email: {user.email}</p>
      <p className="text-lg font-medium mb-2">Joined: {user.joinedDate}</p>
    </motion.div>
  );
};

export default UserProfile;
