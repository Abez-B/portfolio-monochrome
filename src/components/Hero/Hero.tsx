import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import profilePicture from '../../assets/images/profile-picture.jpg';
import TypingText from './TypingText';

const Hero: React.FC = () => {


  return (
    <motion.section
      id="hero"
      className="bg-black text-white dark:bg-white dark:text-black min-h-screen flex items-center justify-center px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <div className="text-center max-w-4xl mx-auto z-10">
        <motion.img
          src={profilePicture}
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-8 grayscale object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <TypingText
          text="Hi, I'm Bharath"
          className="text-5xl md:text-6xl font-bold leading-tight mb-4"
        />
        <TypingText
          text="An Aspiring Network Engineer"
          className="text-2xl md:text-3xl font-bold leading-tight mb-4"
        />
        <motion.p
          className="text-white dark:text-gray-700 text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Building secure, scalable network infrastructure and maintaining robust Linux systems.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="inline-block bg-gray-900 text-white dark:bg-gray-100 dark:text-black border border-gray-700 dark:border-gray-300 px-8 py-3 rounded-md text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
