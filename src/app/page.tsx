'use client';

import { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import UnderConstruction from '../components/UnderConstruction';

export default function HomePage() {
  // Check environment variable
  if (process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true') {
    return <UnderConstruction />;
  }

  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => setShowIntro(false);

  useEffect(() => {
    document.body.style.overflow = showIntro ? 'hidden' : 'unset';
  }, [showIntro]);

  return (
    <div className="min-h-screen text-white selection:bg-dodger-blue selection:text-white">
      <Background />

      {showIntro && <Intro onComplete={handleIntroComplete} />}

      <div className={`relative z-10 transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <Portfolio />
          <About />
          <Services />
          <Contact />
        </main>
      </div>
    </div>
  );
}
