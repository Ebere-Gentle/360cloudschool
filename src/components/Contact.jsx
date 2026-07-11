import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, MessageCircle, Globe } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'info@360cloudschool.com', href: 'mailto:info@360cloudschool.com' },
    { icon: Phone, label: 'WhatsApp', value: '+2347069958609', href: 'https://wa.me/2347069958609' },
    { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: '#' },
    { icon: Globe, label: 'Website', value: '360cloudschool.com', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 dark:text-primary-400 font-semibold">Contact</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6">
              Get in Touch
              <span className="block gradient-text">Let's Connect</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have questions or want to learn more about 360CloudSchool? 
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-2xl transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <method.icon className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{method.label}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{method.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full">
              <MessageCircle size={20} className="text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                Usually responds within 24 hours
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
