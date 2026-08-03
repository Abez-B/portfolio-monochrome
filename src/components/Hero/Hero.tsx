import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import profilePicture from '../../assets/images/profile-picture.jpg';
import TypingText from './TypingText';
import { useCMS } from '../../cms/CMSContext';

const Hero: React.FC = () => {
  const { cmsData } = useCMS();
  const { hero } = cmsData;

  return (
    <motion.section
      id="hero"
      className="text-black dark:text-white min-h-[75vh] py-8 md:py-0 md:min-h-screen flex items-center justify-center px-4 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center max-w-3xl mx-auto z-10 w-full">
        <div className="glass-card p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-white/20 dark:border-white/15">
          
          {/* Status Badge Indicator */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold glass-tag mb-6 shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
            <span className="text-gray-700 dark:text-gray-300 font-mono tracking-tight">Open for Opportunities & Systems Engineering</span>
          </motion.div>

          {/* Profile Avatar */}
          <motion.img
            src={profilePicture}
            alt="Bharath Kumar P"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full mx-auto mb-5 sm:mb-7 object-cover ring-4 ring-black/10 dark:ring-white/20 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />

          <TypingText
            text={`Hi, I'm ${hero.name.split(' ')[0]}`}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-3 tracking-tight"
          />

          <TypingText
            text={hero.title}
            as="h2"
            className="text-base sm:text-xl md:text-2xl font-bold leading-relaxed mb-4 text-gray-700 dark:text-gray-300 font-mono"
          />

          <motion.p
            className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg md:text-xl mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <Link
              to={hero.ctaTarget}
              smooth={true}
              duration={500}
              className="inline-flex items-center gap-2 glass-btn px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold cursor-pointer shadow-xl hover:scale-105 transition-transform"
            >
              <span>{hero.ctaText}</span>
              <span className="text-xs">↓</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
