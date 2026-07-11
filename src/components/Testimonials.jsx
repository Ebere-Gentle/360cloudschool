import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      name: 'Dr. Sarah Adebayo',
      role: 'Head Teacher, Lagos Premier School',
      content: 'The interface is unlike any school management system I\'ve seen. It\'s intuitive, comprehensive, and will transform how we operate.',
      rating: 5,
    },
    {
      name: 'Mr. David Okonkwo',
      role: 'Principal, Abuja International School',
      content: 'Finally, a platform that understands the needs of African schools. The AI assistant and CBT features are game-changers.',
      rating: 5,
    },
    {
      name: 'Mrs. Grace Nwachukwu',
      role: 'ICT Director, Enugu Schools Network',
      content: 'We\'ve tested many systems, but 360CloudSchool stands out. The analytics and reporting capabilities are exactly what we need.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            What Educators Are
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Saying About Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Spinning border effect */}
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-6">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 md:w-10 md:h-10 text-blue-500/30 dark:text-blue-400/30" />
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
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

export default Testimonials;
