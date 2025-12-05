import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Sequence duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Allow exit animation to finish
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Light Streak Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* The Text Reveal */}
            <div className="overflow-hidden relative z-10">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display font-bold text-5xl md:text-8xl text-white tracking-widest uppercase text-center"
              >
                MTZ MEDIA
              </motion.h1>
            </div>

            {/* The Blue Light Streak Overlay - Swipes across */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                duration: 1.5, 
                ease: [0.22, 1, 0.36, 1], // Cubic bezier for "cinematic" feel
                delay: 0.5 
              }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
              <div className="w-full h-full relative">
                {/* The glowing leading edge */}
                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-dodger-blue shadow-[0_0_100px_40px_rgba(18,116,229,0.8)] opacity-80" />
              </div>
            </motion.div>

            {/* Subtle Dust/Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;