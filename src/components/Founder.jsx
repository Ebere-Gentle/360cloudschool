import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import founderImage from '../assets/image.jpg'; // Update this to your actual image filename

const Founder = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative flex-shrink-0">
                  <img 
                    src={founderImage} 
                    alt="Ebere Gentle Victor - Founder" 
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-blue-500 shadow-xl"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.src = 'https://ui-avatars.com/api/?name=Ebere+Gentle+Victor&size=128&background=3b82f6&color=fff';
                    }}
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 border-4 border-white dark:border-gray-800">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 15l-5.5-5.5 1.41-1.41L10 12.17l4.09-4.09 1.41 1.41L10 15z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Ebere Gentle Victor</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">CO-Founder & CTO</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                    Passionate about transforming African education through technology. 
                    With years of experience in EdTech, Ebere founded 360CloudSchool to 
                    bridge the gap between traditional education and modern digital solutions 
                    across the continent.
                  </p>
                  <div className="flex gap-4 mt-4 justify-center md:justify-start">
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Twitter</a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Email</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
