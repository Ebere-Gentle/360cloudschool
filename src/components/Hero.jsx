import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Users, Cloud } from 'lucide-react';
import logo from '../assets/EduOS_logonew.png';
import heroBg from '../assets/hero-bgnew.png';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-500/20 text-blue-200 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 border border-blue-500/30"
            >
              <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-blue-500"></span>
              </span>
              🚀 Launching Soon • Join Early Access
            </motion.div>

            <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-3 mb-4 md:mb-6">
              <img 
                src={logo} 
                alt="360CloudSchool" 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
              />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                360<span className="text-blue-400">Cloud</span>School
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 text-white">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">School Management</span>
              <br />
              Begins Here
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
              An all-in-one cloud-based ecosystem connecting administrators, teachers, 
              students, and parents on one intelligent platform.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-6 md:mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all text-sm md:text-base"
              >
                Join Early Access
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-xs md:text-sm text-white/80">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Shield className="text-blue-400" size={16} />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Cloud className="text-blue-400" size={16} />
                <span>Cloud Powered</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Users className="text-blue-400" size={16} />
                <span>Multi-User Access</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Zap className="text-blue-400" size={16} />
                <span>AI Assistant</span>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-green-500/20 rounded-full border border-green-400/30">
              <span className="text-base md:text-lg">🇳🇬</span>
              <span className="text-xs md:text-sm font-medium text-green-300">
                Designed & Developed in Nigeria • Built for African Schools
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/20">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <img src={logo} alt="360CloudSchool" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
                  <div>
                    <div className="font-semibold text-white text-sm md:text-base">Admin Dashboard</div>
                    <div className="text-xs md:text-sm text-white/60">360CloudSchool</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-6">
                {['Students 2,847', 'Teachers 184', 'Revenue ₦3.2M', 'Attendance 94%'].map((stat, i) => (
                  <div key={i} className="bg-white/10 rounded-lg md:rounded-xl p-2 md:p-4">
                    <div className="text-[10px] md:text-sm text-white/60">{stat.split(' ')[0]}</div>
                    <div className="text-sm md:text-xl font-bold text-white">{stat.split(' ')[1]}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-lg md:rounded-xl p-3 md:p-4 mb-4 md:mb-6">
                <div className="h-20 md:h-32 flex items-end gap-1 md:gap-2">
                  {[65, 72, 80, 85, 78, 92, 88].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className="flex-1 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t-lg"
                    />
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl md:rounded-3xl flex items-end justify-center pb-4 md:pb-8">
                <div className="bg-white/95 backdrop-blur-xl px-4 py-2 md:px-6 md:py-3 rounded-full shadow-xl border border-white/20">
                  <span className="text-[10px] md:text-sm font-semibold text-gray-700">
                    🔒 Preview • Full Dashboard Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
