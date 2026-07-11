import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Database, Lock, Users, Cloud, RefreshCw, CheckCircle, Server } from 'lucide-react';

const Security = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const securityFeatures = [
    { icon: Cloud, label: 'Cloud Infrastructure', desc: 'Scalable, reliable, always available' },
    { icon: RefreshCw, label: 'Daily Backup', desc: 'Automated data protection' },
    { icon: Lock, label: 'Encrypted Data', desc: 'Military-grade encryption' },
    { icon: Users, label: 'Role-Based Access', desc: 'Granular permission control' },
    { icon: Shield, label: '99.9% Availability', desc: 'Enterprise-grade uptime' },
    { icon: Server, label: 'Secure Authentication', desc: 'Multi-factor authentication' },
  ];

  return (
    <section id="security" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">Security</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6">
            Enterprise-Grade
            <span className="block gradient-text">Security & Privacy</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your data is safe with us. We implement the highest security standards 
            to protect your school's information.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">{feature.label}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full">
            <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
            <span className="text-sm text-green-700 dark:text-green-300 font-medium">
              SOC 2 Compliant • GDPR Ready • Data Privacy Guaranteed
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
