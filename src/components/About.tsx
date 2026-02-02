import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../app/utils/animations';

const stats = [
  { label: "Meer zichtbaarheid" },
  { label: "Groter bereik" },
  { label: "Conversie & omzetgroei" },
  { label: "Creatieve impact" },
];

const skills = [
  "Adobe Premiere Pro – Efficiënte en strakke montage",
  "Adobe After Effects – Motion graphics & subtiele VFX",
  "Short Form Video – Social content die scoort",
  "Long Form & Corporate – Presentaties, productvideo’s en case studies",
  "Storytelling & Strategie – Van concept tot publicatie",
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-transparent relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Tekst Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Subheader */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center mb-6"
            >
              <span className="h-[1px] w-12 bg-dodger-blue mr-4"></span>
              <span className="text-dodger-blue uppercase tracking-widest text-sm font-bold">
                Over mij
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight"
            >
              Mateusz Michalczyszyn{' '}
              <span className="text-dodger-blue text-2xl md:text-3xl font-semibold">
                Freelance Video Editor & Content Specialist
              </span>
            </motion.h2>

            {/* Intro / Pitch */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              Ik help bedrijven en ondernemers om hun boodschap helder en impactvol over te brengen via video. Van korte social content tot long-form en corporate projecten: ik draai mijn hand er niet voor om. Met Adobe Premiere Pro en After Effects combineer ik creativiteit, storytelling en strategie om video’s te maken die echt opvallen en resultaat opleveren.
            </motion.p>

            {/* Skills / Expertise */}
            <motion.div
              variants={fadeInUp}
              className="space-y-4 mb-10"
            >
              {skills.map((skill, idx) => (
                <div key={idx} className="flex items-center group">
                  <div className="w-6 h-6 rounded-full bg-dodger-blue/10 flex items-center justify-center mr-4 border border-dodger-blue/30 group-hover:border-dodger-blue transition-colors">
                    <Check size={12} className="text-dodger-blue" />
                  </div>
                  <span className="text-gray-300 font-light tracking-wide">{skill}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-8"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <Check size={24} className="text-dodger-blue mb-1" />
                  <div className="text-xs uppercase tracking-widest text-gray-500 text-center">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Content met Micro-Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Subtiele blur / glow */}
            <div className="absolute -inset-4 bg-dodger-blue/20 blur-2xl opacity-30 rounded-full" />

            {/* PNG met transparantie */}
            <div className="relative aspect-[4/5] border border-white/10 overflow-hidden rounded-sm">
              <img
                src="https://i.imgur.com/rFDRxlj.png"
                alt="Selfie"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decoratie */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-dodger-blue/30 hidden md:block"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
