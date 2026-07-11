import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle, Gift, Zap, Shield, Star } from 'lucide-react';

const EarlyAccess = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setEmail('');
      setName('');
      setSchool('');
    }, 1500);
  };

  const benefits = [
    { icon: Gift, label: 'Free onboarding', desc: 'Dedicated setup assistance' },
    { icon: Star, label: 'Early adopter pricing', desc: 'Exclusive launch discounts' },
    { icon: Shield, label: 'Priority support', desc: '24/7 dedicated assistance' },
    { icon: Zap, label: 'Lifetime discounts', desc: 'Lock in your rate forever' },
  ];

  return (
    <section id="early-access" className="py-24 bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-950 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/10 mb-4">
              🚀 Limited Slots Available
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Join Early Access
            </h2>
            <p className="text-xl text-primary-200">
              Be among the first schools to experience the future of education management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">What You Get</h3>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{benefit.label}</div>
                    <div className="text-sm text-primary-200">{benefit.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">You're In! 🎉</h3>
                  <p className="text-primary-200">
                    Thank you for joining the early access list. We'll keep you updated on our progress.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary-200">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 bg-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary-200">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 bg-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary-200">School Name</label>
                    <input
                      type="text"
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                      placeholder="Enter your school name"
                      required
                      className="w-full px-4 py-3 bg-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-gray-400"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-500/25 transition-all disabled:opacity-70"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Join Early Access
                        <Send size={20} />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-primary-200 text-center">
                    🔒 No spam. Unsubscribe anytime. Your data is safe with us.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAccess;
