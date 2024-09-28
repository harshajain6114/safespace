// src/pages/Profile.js
import React from 'react';
import UserProfile from '../components/UserProfile';
import { motion } from 'framer-motion';

const Profile = () => {
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    joinedDate: 'January 1, 2024'
  };

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
      <UserProfile user={user} />
    </motion.div>
  );
};

export default Profile;
