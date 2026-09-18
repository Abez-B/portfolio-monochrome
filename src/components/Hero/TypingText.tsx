import React from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
}

const TypingText: React.FC<TypingTextProps> = ({ text, className, as = 'h1' }) => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const MotionTag = motion[as] as typeof motion.h1;

  const words = text.split(' ');

  return (
    <MotionTag
      className={className}
      variants={textVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wIndex) => (
        <span key={wIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, cIndex) => (
            <motion.span key={cIndex} variants={letterVariants} className="inline-block">
              {char}
            </motion.span>
          ))}
          {wIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </MotionTag>
  );
};

export default TypingText;
