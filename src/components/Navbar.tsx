'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../app/types';

const navItems: NavItem[] = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Over mij', href: '#about' },
  { label: 'Diensten', href: '#services' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll functie
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-2xl tracking-widest text-white group">
          MTZ MEDIA
          <span className="text-dodger-blue group-hover:text-white transition-colors duration-300">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScrollTo(item.href.replace('#', ''))}
              className="text-sm font-medium text-gray-400 hover:text-dodger-blue transition-colors duration-300 uppercase tracking-wider relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-dodger-blue transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <button
            onClick={() => handleScrollTo('contact')}
            className="px-6 py-2 border border-dodger-blue text-dodger-blue hover:bg-dodger-blue hover:text-white hover:shadow-neon transition-all duration-300 text-sm font-medium tracking-wider uppercase"
          >
            Start jouw project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu toggle"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-black border-b border-white/10"
        >
          <div className="px-6 py-8 flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  handleScrollTo(item.href.replace('#', ''));
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-white hover:text-dodger-blue text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                handleScrollTo('contact');
                setIsMobileMenuOpen(false);
              }}
              className="text-lg font-medium text-dodger-blue text-left"
            >
              Start jouw project
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
