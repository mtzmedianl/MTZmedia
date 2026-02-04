import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Hero: React.FC = () => {
  // Removed useScroll to ensure stability

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background handled globally via Background component */}

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-20 text-center max-w-6xl mx-auto px-6"
        
      >
              
     {/* Grid Overlay - Mid background */}
    <div 
      className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
    />

        
<motion.h1
  variants={fadeInUp}
  className="font-display font-bold tracking-widest text-white leading-tight
             text-[clamp(3rem,8vw,7rem)] md:text-[clamp(5rem,9vw,9rem)] uppercase"
>
  MTZ MEDIA<span className="text-dodger-blue">.</span>

  <span
    className="block mt-2 text-dodger-blue drop-shadow-[0_0_20px_rgba(30,144,255,0.4)]
               text-[clamp(2rem,4vw,3rem)] md:text-[clamp(2.5rem,4vw,3.5rem)] font-normal tracking-normal"
  >
    Creative Partner in videocontent
  </span>
</motion.h1>

        {/* Subline / Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-12 flex flex-col gap-4 md:gap-6"
        >
            <p className="font-display font-medium text-xl md:text-2xl text-white tracking-[0.15em] uppercase">
              Strategisch. Creatief. <span className="text-dodger-blue">Resultaatgericht.</span>
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
              Video’s die omzet en bereik laten groeien.
            </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
        >
          {/* Primary CTA */}
          <a 
            href="#contact"
            aria-label="Plan een gesprek met MTZ Media"
            className="group relative px-10 md:px-12 py-5 bg-dodger-blue text-white font-bold uppercase tracking-[0.2em] text-sm rounded-sm overflow-hidden shadow-[0_0_20px_rgba(18,116,229,0.4)] hover:shadow-[0_0_40px_rgba(18,116,229,0.6)] transition-all duration-300 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-white/15 -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
            <div className="absolute inset-0 rounded-sm ring-2 ring-white/15 group-hover:ring-white/30 group-hover:animate-pulse transition-all"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Plan een gesprek</span>
          </a>

          {/* Secondary CTA */}
          <button 
            className="group flex items-center space-x-4 text-gray-400 hover:text-white transition-colors duration-300 px-8 py-4"
            aria-label="Bekijk Showreel van MTZ Media"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-dodger-blue group-hover:shadow-[0_0_15px_rgba(18,116,229,0.5)] transition-all duration-300 bg-white/5 transform group-hover:scale-105">
                <Play size={16} fill="currentColor" className="ml-1 text-white" />
            </div>
            <span className="uppercase text-sm tracking-[0.2em] font-medium border-b border-transparent group-hover:border-dodger-blue transition-all pb-1">
              Bekijk Showreel
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-dodger-blue via-dodger-blue/50 to-transparent opacity-60 animate-pulse"></div>
        </div>
      </motion.div>

      {/* Optional subtle glow overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute w-[400px] h-[400px] top-1/3 left-1/4 rounded-full bg-dodger-blue/10 blur-[150px] animate-[pulse_18s_ease-in-out_infinite]"></div>
        <div className="absolute w-[350px] h-[350px] bottom-1/4 right-1/3 rounded-full bg-dodger-blue/8 blur-[120px] animate-[pulse_22s_ease-in-out_infinite]"></div>
      </div>
    </section>
  );
};

export default Hero;
