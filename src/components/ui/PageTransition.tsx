
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  location?: string;
}

const variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: {
      duration: 0.2,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

export const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  className = '',
  location
}) => {
  const [key, setKey] = useState(location || '');
  
  useEffect(() => {
    if (location) {
      setKey(location);
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className={`w-full min-h-[calc(100vh-4rem)] ${className}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
