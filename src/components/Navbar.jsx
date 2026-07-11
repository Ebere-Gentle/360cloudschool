import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import logo from '../assets/EduOS_logonew.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Features', 'Blog', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-lg' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <img 
              src={logo} 
              alt="360CloudSchool" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold">
              <span className="text-gray-800 dark:text-white">360</span>
              <span className="text-blue-600 dark:text-blue-400">Cloud</span>
              <span className="text-gray-800 dark:text-white">School</span>
            </span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {link}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/2347069958609"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/ebere-gentle-victor-5018b33b1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <span className="w-4 h-4 flex items-center justify-center font-bold text-sm">in</span>
                LinkedIn
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-800"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <a
                href="https://wa.me/2347069958609"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/ebere-gentle-victor-5018b33b1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
                onClick={() => setIsOpen(false)}
              >
                <span className="w-5 h-5 flex items-center justify-center font-bold text-sm">in</span>
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
