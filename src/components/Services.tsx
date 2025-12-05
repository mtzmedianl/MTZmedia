import React from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, Sparkles, Volume2, Palette, ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { Service } from '../app/types';

const services: Service[] = [
  {
    id: 1,
    title: "Cinematische Montage",
    description: "Verhalen vertellen met impact. Strakke cuts, perfecte timing en een flow die de kijker vasthoudt van begin tot eind.",
    icon: Clapperboard
  },
  {
    id: 2,
    title: "VFX & Motion Graphics",
    description: "Visuele effecten die verbluffen. Van subtiele retouche tot dynamische titels en compositing die de video naar een hoger niveau tillen.",
    icon: Sparkles
  },
  {
    id: 3,
    title: "Sound Design & Mixing",
    description: "Audio die je voelt. Heldere dialogen, immersieve sfeergeluiden en een mix die perfect in balans is voor elk platform.",
    icon: Volume2
  },
  {
    id: 4,
    title: "Color Grading",
    description: "De juiste sfeer en uitstraling. Professionele kleurcorrectie en grading om beelden die premium cinematische look te geven.",
    icon: Palette
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative bg-transparent border-t border-white/5">
       {/* Vertical Guide Line */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-dodger-blue/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 text-center md:text-left"
        >
           <motion.div variants={fadeInUp} className="flex items-center justify-center md:justify-start gap-3 mb-3">
               <div className="h-[2px] w-8 bg-dodger-blue shadow-neon"></div>
               <span className="text-dodger-blue uppercase tracking-[0.2em] text-sm font-bold">Expertise</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-4xl md:text-5xl text-white">
                Mijn Diensten
            </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="group relative bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:border-dodger-blue/50 transition-colors duration-300"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-dodger-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-dodger-blue group-hover:shadow-[0_0_20px_rgba(18,116,229,0.4)] transition-all duration-300">
                  <service.icon 
                    size={24} 
                    className="text-gray-300 group-hover:text-white transition-colors duration-300" 
                  />
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-dodger-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300">
                  Meer info <ArrowUpRight size={14} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;