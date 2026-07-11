import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, BookOpen, Monitor, UserCheck, ClipboardList, PenTool, CreditCard, Calendar, FileText, Brain, Library, Building, Bus, Package, BarChart, Phone } from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const features = [
    { icon: Users, label: 'Student Portal' },
    { icon: UserCheck, label: 'Teacher Portal' },
    { icon: Users, label: 'Parent Portal' },
    { icon: Monitor, label: 'Virtual Classroom' },
    { icon: ClipboardList, label: 'Attendance' },
    { icon: PenTool, label: 'CBT Platform' },
    { icon: CreditCard, label: 'Finance' },
    { icon: Calendar, label: 'Timetable' },
    { icon: FileText, label: 'Assignments' },
    { icon: BarChart, label: 'Analytics' },
    { icon: Brain, label: 'AI Assistant' },
    { icon: Library, label: 'Library' },
    { icon: Building, label: 'Hostel' },
    { icon: Bus, label: 'Transport' },
    { icon: Package, label: 'Inventory' },
    { icon: Phone, label: 'Mobile Apps' },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">Modules</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6">
            Complete School
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Management Suite</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to run your school efficiently, all in one platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <feature.icon className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
