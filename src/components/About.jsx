import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Heart, Award, Sparkles, Brain, Cpu, Zap, Clock, Calendar, Rocket, MessageCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Countdown for December 25th 2025
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date - December 25, 2026
    const targetDate = new Date('2026-12-25T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });
    };

    // Update immediately
    updateCountdown();
    
    // Update every second
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            Hello. We are{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">360CloudSchool</span>
          </h2>
          <div className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
            <p>
              At 360CloudSchool, we harness the power of technology, machine learning, and artificial 
              intelligence to transform education and learning. Our mission is to create 
              intelligent, adaptive learning experiences that empower students and educators 
              by making knowledge acquisition more efficient, personalized, and engaging.
            </p>
            <p>
              Through AI-driven solutions, we revolutionize the learning process by providing 
              personalized study plans, real-time feedback, and interactive educational content. 
              Our technology enhances accessibility, optimizes learning efficiency, and ensures 
              that every learner receives a customized experience tailored to their needs. 
              Whether you're a student looking to improve your understanding or an educator 
              seeking advanced tools to enhance teaching, 360CloudSchool is here to redefine 
              the future of education.
            </p>
            <div className="mt-6 p-4 md:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-3">
                <Sparkles className="inline-block w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-2" />
                More About Us
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                360CloudSchool is pioneering the EdTech industry by integrating AI-powered 
                learning analytics with smart, intuitive platforms. Our innovative solutions 
                cater to diverse educational needs, from personalized tutoring to intelligent 
                assessment tools. We believe in using technology to bridge educational gaps 
                and provide high-quality learning experiences for everyone, everywhere.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Countdown Timer Section - Mobile Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-12 md:mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-4 md:mb-6">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
                <Rocket className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400 animate-pulse" />
                <span className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white">Christmas Launch Countdown</span>
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                🎄 Mark your calendar! Big things are coming this Christmas 🎄
              </p>
            </div>
            
            {/* Responsive Countdown Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl md:rounded-2xl p-3 md:p-4 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold font-mono text-gray-800 dark:text-white">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">Days</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl md:rounded-2xl p-3 md:p-4 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold font-mono text-gray-800 dark:text-white">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">Hours</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl md:rounded-2xl p-3 md:p-4 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold font-mono text-gray-800 dark:text-white">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">Minutes</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl md:rounded-2xl p-3 md:p-4 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold font-mono text-gray-800 dark:text-white">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">Seconds</div>
              </div>
            </div>

            <div className="mt-4 md:mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gray-100 dark:bg-gray-700/50 rounded-full text-xs md:text-sm text-gray-700 dark:text-gray-300">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-blue-600 dark:text-blue-400" />
                <span>🎅 December 25, 2026</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission, Vision, Values Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {[
            { 
              icon: Target, 
              label: 'Mission', 
              value: 'Transform education through intelligent, adaptive AI-powered learning experiences',
              color: 'from-blue-500 to-blue-600'
            },
            { 
              icon: Eye, 
              label: 'Vision', 
              value: 'Create a world where every learner has access to personalized, AI-driven education',
              color: 'from-purple-500 to-purple-600'
            },
            { 
              icon: Heart, 
              label: 'Values', 
              value: 'Innovation, accessibility, personalization, and excellence in education',
              color: 'from-pink-500 to-pink-600'
            },
            { 
              icon: Award, 
              label: 'Goal', 
              value: 'Empower every student and educator with intelligent learning tools',
              color: 'from-orange-500 to-orange-600'
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2">{item.label}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* AI/ML Highlight Section - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl md:rounded-3xl text-white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <Brain className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 text-yellow-300" />
              <h4 className="text-lg md:text-xl font-bold mb-2">AI-Powered</h4>
              <p className="text-white/80 text-sm">Intelligent algorithms that adapt to each learner's needs</p>
            </div>
            <div>
              <Cpu className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 text-yellow-300" />
              <h4 className="text-lg md:text-xl font-bold mb-2">Machine Learning</h4>
              <p className="text-white/80 text-sm">Continuous improvement through advanced analytics</p>
            </div>
            <div>
              <Zap className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 text-yellow-300" />
              <h4 className="text-lg md:text-xl font-bold mb-2">Smart Education</h4>
              <p className="text-white/80 text-sm">Personalized, engaging, and efficient learning experiences</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4 py-4 md:px-6 md:py-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0" />
            <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 text-center">
              Need AI-Powered Learning Solutions?
            </span>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 md:px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2 text-sm md:text-base">
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
