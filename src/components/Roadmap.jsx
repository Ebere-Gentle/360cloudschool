
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Clock } from 'lucide-react';

const Roadmap = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    { label: 'Student Portal', status: 'completed' },
    { label: 'Teacher Portal', status: 'completed' },
    { label: 'Parent Portal', status: 'completed' },
    { label: 'CBT Platform', status: 'completed' },
    { label: 'AI Assistant', status: 'completed' },
    { label: 'Virtual Classroom', status: 'completed' },
    { label: 'Inventory Management', status: 'in-progress' },
    { label: 'Hostel Management', status: 'in-progress' },
    { label: 'Mobile Apps', status: 'planned' },
    { label: 'API Integration', status: 'planned' },
  ];

  return (
    <section id="roadmap" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold">Roadmap</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            What's Coming
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Feature Roadmap</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-4 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Spinning border effect */}
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
              </div>
              
              {/* Content - sits on top of the spinning border */}
              <div className="relative z-10 flex items-center gap-3 md:gap-4 w-full bg-gray-50 dark:bg-gray-800 rounded-2xl p-2 md:p-0">
                <div className="flex-shrink-0">
                  {feature.status === 'completed' ? (
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="text-green-500" size={20} />
                    </div>
                  ) : feature.status === 'in-progress' ? (
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Clock className="text-yellow-500" size={20} />
                    </div>
                  ) : (
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Clock className="text-gray-500 dark:text-gray-400" size={20} />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm md:text-base text-gray-800 dark:text-white truncate">
                    {feature.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                    {feature.status === 'completed' ? '✅ Launched' : feature.status === 'in-progress' ? '🔄 In Progress' : '📅 Planned'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add spinning animation */}
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

export default Roadmap;
