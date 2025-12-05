import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../app/types';
import { Play, X, Maximize2, ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer, modalOverlay, modalContent } from '../utils/animations';

// ProjectCard component
const ProjectCard: React.FC<{
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: (id: number | null) => void;
  onClick: () => void;
}> = ({ project, index, isHovered, onHover, onClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!project.isEmbed) {
      if (isHovered) videoRef.current?.play().catch(() => {});
      else {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }
    }
  }, [isHovered, project.isEmbed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative cursor-pointer"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
    >
      <motion.div className="relative aspect-[9/16] bg-black rounded-xl overflow-hidden border border-white/5">
        {/* Thumbnail */}
        <img src={project.thumbnail} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />

        {/* Local Video */}
        {!project.isEmbed && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <motion.div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm border shadow-lg">
            <Play size={24} fill="white" className="text-white ml-1" />
          </motion.div>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
          <span className="text-dodger-blue text-[10px] uppercase tracking-widest font-bold mb-1 block drop-shadow-md">
            Bekijk Project
          </span>
          <h3 className="text-xl font-display font-bold text-white leading-tight drop-shadow-lg">{project.title}</h3>
        </div>

        <div className={`absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md rounded-full text-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Maximize2 size={16} />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Modal component
const PortfolioModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  if (!project) return null;

  const isEmbed = project.isEmbed;
  const embedUrl = isEmbed
    ? project.videoUrl.includes('?')
      ? `${project.videoUrl}&autoplay=1&muted=1&loop=1&background=1`
      : `${project.videoUrl}?autoplay=1&muted=1&loop=1&background=1`
    : '';

  return (
    <AnimatePresence>
      <motion.div
        variants={modalOverlay}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          variants={modalContent}
          className="relative w-full max-w-6xl max-h-[90vh] bg-[#0C0C0E] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl rounded-sm"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:text-dodger-blue transition-colors border border-white/10 hover:border-dodger-blue"
          >
            <X size={24} />
          </button>

          {/* Video */}
          <div className="w-full md:w-1/2 lg:w-5/12 bg-black flex items-center justify-center relative border-b md:border-b-0 md:border-r border-white/10 aspect-[9/16] md:aspect-auto">
            {isEmbed ? (
              <iframe
                title={project.title}
                src={embedUrl}
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <video src={project.videoUrl} controls autoPlay muted className="w-full h-full object-contain max-h-[85vh]" />
            )}
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 lg:w-7/12 p-8 md:p-12 overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-bold text-black bg-dodger-blue uppercase tracking-wider rounded-sm">
                {project.category}
              </span>
              {project.client && (
                <span className="text-gray-500 text-xs uppercase tracking-wider border-l border-white/20 pl-3">
                  Klant: {project.client}
                </span>
              )}
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{project.title}</h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light border-l-2 border-dodger-blue pl-6">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Mijn rol</h4>
                <p className="text-white">Editor, Motion Designer</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Tools</h4>
                <p className="text-white">{project.tools || 'Premiere Pro'}</p>
              </div>
            </div>

            <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-dodger-blue hover:text-white transition-all duration-300 shadow-neon">
              Bekijk volledige video
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export { ProjectCard, PortfolioModal };
