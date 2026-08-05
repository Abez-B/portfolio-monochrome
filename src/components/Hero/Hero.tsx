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
      className="text-black dark:text-white min-h-[80vh] py-12 md:py-0 md:min-h-[90vh] flex items-center justify-center px-4 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center max-w-3xl mx-auto z-10 w-full">
        <div className="glass-card p-6 sm:p-12 shadow-2xl relative overflow-hidden border border-white/20 dark:border-white/15">
          
          {/* Status Indicator Badge (Pure CSS pulse dot, zero emojis) */}
          <motion.div 
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold glass-tag mb-6 shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-glow" />
            <span className="text-gray-700 dark:text-gray-300 font-mono tracking-tight text-[11px] uppercase">Available for Systems & Open Source</span>
          </motion.div>

          {/* Profile Avatar */}
          <motion.img
            src={profilePicture}
            alt="Bharath Kumar P"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full mx-auto mb-6 object-cover ring-4 ring-black/10 dark:ring-white/20 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />

          <TypingText
            text={`Hi, I'm ${hero.name.split(' ')[0]}`}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-3 tracking-tight font-display"
          />

          <TypingText
            text={hero.title}
            as="h2"
            className="text-base sm:text-xl md:text-2xl font-bold leading-relaxed mb-4 text-gray-700 dark:text-gray-300 font-mono"
          />

          <motion.p
            className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg md:text-xl mb-8 max-w-xl mx-auto leading-relaxed"
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
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              to={hero.ctaTarget}
              smooth={true}
              duration={500}
              className="inline-flex items-center gap-2 glass-btn px-8 py-3.5 rounded-full text-sm sm:text-base font-bold cursor-pointer shadow-xl hover:scale-105 transition-transform"
            >
              <span>{hero.ctaText}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </Link>
            {hero.resumeUrl && (
              <a
                href={hero.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-btn px-8 py-3.5 rounded-full text-sm sm:text-base font-bold cursor-pointer shadow-xl hover:scale-105 transition-transform"
              >
                <span>Resume</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            )}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
