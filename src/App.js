import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Modules from './components/Modules';
import Timeline from './components/Timeline';
import Founder from './components/Founder';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import Security from './components/Security';
import FAQ from './components/FAQ';
import EarlyAccess from './components/EarlyAccess';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import logo from './assets/EduOS_logonew.png';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden px-4">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/5"
              style={{
                width: Math.random() * 6 + 3,
                height: Math.random() * 6 + 3,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-xs sm:max-w-sm">
          {/* Circular Logo Container */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full shadow-2xl overflow-hidden border-4 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            {/* Logo Image - Centered */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <img 
                src={logo} 
                alt="360CloudSchool" 
                className="w-[55%] h-[55%] object-contain"
              />
            </div>
            
            {/* Water Fill with Real Wave Effect */}
            <div 
              className="absolute bottom-0 left-0 right-0 z-10 transition-all duration-100 ease-out"
              style={{
                height: `${progress}%`,
                background: 'linear-gradient(180deg, rgba(56,189,248,0.85) 0%, rgba(37,99,235,0.9) 50%, rgba(29,78,216,0.95) 100%)',
              }}
            >
              {/* Wave Container */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Wave 1 - Main wave */}
                <svg 
                  viewBox="0 0 1200 120" 
                  preserveAspectRatio="none" 
                  className="absolute -top-1 left-0 w-full h-8 wave-animation-1"
                  style={{ 
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                    transform: 'scaleY(1.2)'
                  }}
                >
                  <path 
                    d="M0,60 C300,0 600,120 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" 
                    fill="rgba(255,255,255,0.35)"
                  />
                </svg>

                {/* Wave 2 - Secondary wave */}
                <svg 
                  viewBox="0 0 1200 120" 
                  preserveAspectRatio="none" 
                  className="absolute -top-1 left-0 w-full h-6 wave-animation-2"
                  style={{ 
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.05))',
                    transform: 'scaleY(1.1)'
                  }}
                >
                  <path 
                    d="M0,80 C200,30 500,110 800,80 C1000,50 1100,90 1200,80 L1200,120 L0,120 Z" 
                    fill="rgba(255,255,255,0.2)"
                  />
                </svg>

                {/* Wave 3 - Subtle wave */}
                <svg 
                  viewBox="0 0 1200 120" 
                  preserveAspectRatio="none" 
                  className="absolute -top-1 left-0 w-full h-4 wave-animation-3"
                >
                  <path 
                    d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z" 
                    fill="rgba(255,255,255,0.1)"
                  />
                </svg>
              </div>
            </div>

            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 z-15 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, rgba(59,130,246,${progress/300}) 0%, transparent 70%)`,
              }}
            />
          </div>

          {/* Progress Text */}
          <motion.div
            className="mt-4 sm:mt-5 md:mt-6 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {Math.round(progress)}%
          </motion.div>

          {/* Loading Text */}
          <div className="mt-1 sm:mt-2 text-gray-500 font-medium text-sm sm:text-base flex items-center gap-1">
            Loading
            <span className="inline-flex gap-1">
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }}>.</motion.span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}>.</motion.span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}>.</motion.span>
            </span>
          </div>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400 font-light">360CloudSchool</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Modules />
      <Timeline />
      <Founder />
      <Roadmap />
      <Testimonials />
      <Security />
      <FAQ />
      <EarlyAccess />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
