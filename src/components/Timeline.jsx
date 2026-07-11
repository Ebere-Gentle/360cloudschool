import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Clock, Rocket, Code, Users, Zap } from 'lucide-react';

const Timeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const milestones = [
    { year: '2024', icon: Rocket, label: 'Idea Started', desc: 'Concept development & research' },
    { year: '2024', icon: Code, label: 'Architecture Completed', desc: 'System design & planning' },
    { year: '2025', icon: Code, label: 'Development', desc: 'Core platform development' },
    { year: '2025', icon: Users, label: 'Beta Testing', desc: 'School pilot programs' },
    { year: '2026', icon: Zap, label: 'Official Launch', desc: 'Platform goes live!' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold">Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            Our Development
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {/* Mobile Timeline Line - Left side */}
          <div className="md:hidden absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className={`relative flex items-center mb-8 md:mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
            >
              {/* Card - Full width on mobile, half on desktop */}
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
              } pl-12 md:pl-0`}>
                <motion.div 
                  className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Spinning border effect */}
                  <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 md:p-6">
                    <span className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400">{milestone.year}</span>
                    <h3 className="text-base md:text-xl font-bold text-gray-800 dark:text-white mt-1">{milestone.label}</h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">{milestone.desc}</p>
                  </div>
                </motion.div>
              </div>

              {/* Icon - Desktop */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full items-center justify-center shadow-lg shadow-blue-500/25 z-10">
                <milestone.icon className="text-white" size={20} />
              </div>

              {/* Icon - Mobile (left side) */}
              <div className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25 z-10">
                <milestone.icon className="text-white" size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Spinning animation */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Timeline;
