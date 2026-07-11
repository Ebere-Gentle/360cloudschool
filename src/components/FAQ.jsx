import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'When will 360CloudSchool launch?',
      a: 'We are currently in the final development phase. Early access will open in early 2026, with the full launch scheduled for mid-2026. Join our early access list to get priority access.'
    },
    {
      q: 'Can any school use the platform?',
      a: 'Yes! 360CloudSchool is designed to accommodate all types of educational institutions - from primary and secondary schools to colleges and vocational training centers. We offer flexible configurations to meet your specific needs.'
    },
    {
      q: 'Will there be mobile apps?',
      a: 'Absolutely. We are developing native mobile apps for both iOS and Android platforms, along with a fully responsive web application that works on any device.'
    },
    {
      q: 'How much will it cost?',
      a: 'We will offer flexible pricing plans tailored to different school sizes and needs. Early adopters will receive special pricing and lifetime discounts. Contact us for more details.'
    },
    {
      q: 'Can existing data be migrated?',
      a: 'Yes, we provide comprehensive data migration services to help you seamlessly transition from your current systems. Our team will handle everything to ensure zero data loss.'
    },
    {
      q: 'What kind of support do you offer?',
      a: 'We provide 24/7 customer support, dedicated account managers, comprehensive onboarding, training sessions, and regular system updates. Enterprise customers get priority support.'
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">FAQ</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6">
            Frequently Asked
            <span className="block gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about 360CloudSchool. Can't find what you're looking for? 
            Reach out to our team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <span className="font-semibold text-gray-800 dark:text-white">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary-600 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-primary-600 flex-shrink-0" size={20} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
