import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Project } from '../app/types';
import { Play, X, Maximize2, ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer, modalOverlay, modalContent } from '../utils/animations';

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "Vloerspot",
    category: "Interieur / Commercieel",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    videoUrl: "https://next.frame.io/project/8383bfc0-b8e0-4141-9006-083e6df84e79/view/0d7f94fc-ac6a-41ab-962a-36f3fba84647",
    description: "After Effects-reel met sterke hook, A4 3D animatie, captions en color grading voor Vloer Spot Leeuwarden.",
    client: "Vloer Spot Leeuwarden",
    tools: "Premiere Pro, After Effects"
  },
  {
    id: 2,
    title: "Merklenz",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?q=80&w=1974&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-driving-a-car-through-the-city-at-night-40348-large.mp4",
    description: "Rauwe straatrace-cultuur vastgelegd met dynamische camerabewegingen en ritmische montage.",
    client: "Red Bull",
    tools: "Premiere Pro, Cinema 4D"
  }
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Helper to check if video is embed
  const isEmbedVideo = (url: string) => {
    return url.includes("frame.io") || url.includes("vimeo") || url.includes("youtube");
  };

  return (
    <section id="portfolio" className="py-32 relative w-full bg-transparent">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-dodger-blue/30 to-transparent"></div>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-8"
        >
          <div>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-dodger-blue shadow-neon"></div>
              <span className="text-dodger-blue uppercase tracking-[0.2em] text-sm font-bold">Portfolio</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-4xl md:text-5xl text-white">
              Uitgelichte Projecten
            </motion.h2>
          </div>
          <motion.p variants={fadeInUp} className="text-gray-400 text-sm max-w-xs text-right mt-4 md:mt-0 font-light">
            Short-form video die opvalt en resultaat levert.
          </motion.p>
        </motion.div>

        {/* Video Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const isEmbed = isEmbedVideo(project.videoUrl);
            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isHovered={hoveredId === project.id}
                onHover={setHoveredId}
                onClick={() => setSelectedProject(project)}
                isEmbed={isEmbed}
              />
            );
          })}
        </motion.div>

        {/* View All Button */}
        <div className="mt-20 flex justify-center">
          <a href="#portfolio" className="group relative px-10 py-4 border border-white/10 hover:border-dodger-blue transition-colors duration-300 overflow-hidden">
            <div className="absolute inset-0 w-0 bg-dodger-blue transition-all duration-300 group-hover:w-full opacity-10"></div>
            <span className="relative z-10 text-sm uppercase tracking-[0.2em] font-medium flex items-center">
              Bekijk alle projecten <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <PortfolioModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            isEmbed={isEmbedVideo(selectedProject.videoUrl)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Card Variants
const cardVariants: Variants = {
  rest: { scale: 1, zIndex: 0, boxShadow: "0 0 0 rgba(0,0,0,0)", borderColor: "rgba(255, 255, 255, 0.05)" },
  hover: { scale: 1.05, zIndex: 10, boxShadow: "0 0 25px rgba(18, 116, 229, 0.3)", borderColor: "rgba(18, 116, 229, 0.5)", transition: { duration: 0.2, ease: "easeInOut" } },
  tap: { scale: 1.1, zIndex: 20, boxShadow: "0 0 40px rgba(18, 116, 229, 0.6)", borderColor: "#1274E5", transition: { duration: 0.1, ease: "easeInOut" } }
};

const playButtonVariants: Variants = {
  rest: { scale: 1, backgroundColor: "rgba(0,0,0,0.3)", borderColor: "rgba(255,255,255,0.3)", opacity: 1 },
  hover: { scale: 1.1, backgroundColor: "#1274E5", borderColor: "#1274E5", opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } },
  tap: { scale: 1.2, backgroundColor: "#1274E5", borderColor: "#1274E5", transition: { duration: 0.1, ease: "easeInOut" } }
};

// Project Card
const ProjectCard: React.FC<{
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: (id: number | null) => void;
  onClick: () => void;
  isEmbed: boolean;
}> = ({ project, index, isHovered, onHover, onClick, isEmbed }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isEmbed) {
      if (isHovered) videoRef.current?.play().catch(() => {});
      else if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, isEmbed]);

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
      <motion.div className="relative aspect-[9/16] bg-black rounded-xl overflow-hidden border border-white/5" variants={cardVariants} initial="rest" whileHover="hover" whileTap="tap">
        <img src={project.thumbnail} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        {!isEmbed && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <motion.div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm border shadow-lg" variants={playButtonVariants}>
            <Play size={24} fill="white" className="text-white ml-1" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
          <span className="text-dodger-blue text-[10px] uppercase tracking-widest font-bold mb-1 block drop-shadow-md">Bekijk Project</span>
          <h3 className="text-xl font-display font-bold text-white leading-tight drop-shadow-lg">{project.title}</h3>
        </div>
        <div className={`absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md rounded-full text-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Maximize2 size={16} />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Modal
const PortfolioModal: React.FC<{ project: Project; onClose: () => void; isEmbed: boolean }> = ({ project, onClose, isEmbed }) => {
  if (!project) return null;

  const embedUrl = isEmbed ? project.videoUrl + (project.videoUrl.includes("?") ? "&autoplay=1&muted=1" : "?autoplay=1&muted=1") : "";

  return (
    <AnimatePresence>
      <motion.div variants={modalOverlay} initial="hidden" animate="visible" exit="exit"
        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
        onClick={onClose}>
        <motion.div variants={modalContent} className="relative w-full max-w-6xl max-h-[90vh] bg-[#0C0C0E] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl rounded-sm" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:text-dodger-blue transition-colors border border-white/10 hover:border-dodger-blue">
            <X size={24} />
          </button>

          <div className="w-full md:w-1/2 lg:w-5/12 bg-black flex items-center justify-center relative border-b md:border-b-0 md:border-r border-white/10 aspect-[9/16] md:aspect-auto">
            {!isEmbed ? (
              <video src={project.videoUrl} controls autoPlay muted className="w-full h-full object-contain max-h-[85vh]" />
            ) : (
              <iframe title={project.title} src={embedUrl} width="640" height="360" frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="w-full h-full" />
            )}
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 lg:w-7/12 p-8 md:p-12 overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-bold text-black bg-dodger-blue uppercase tracking-wider rounded-sm">{project.category}</span>
              {project.client && <span className="text-gray-500 text-xs uppercase tracking-wider border-l border-white/20 pl-3">Klant: {project.client}</span>}
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{project.title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light border-l-2 border-dodger-blue pl-6">{project.description}</p>
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
            <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-dodger-blue hover:text-white transition-all duration-300 shadow-neon">Bekijk volledige video</button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Portfolio;
