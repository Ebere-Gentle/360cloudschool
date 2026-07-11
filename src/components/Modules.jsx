import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Users, BookOpen, Monitor, UserCheck, ClipboardList,
  PenTool, CreditCard, Calendar, FileText, Brain,
  Library, Building, Bus, Package, BarChart, Phone,
  Database, Settings, Bell, MessageCircle, Video,
  Award, Globe, Shield, Zap, Cloud, Wifi
} from 'lucide-react';

const Modules = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const modules = [
    { icon: Users, label: 'Student Portal', desc: 'Student profiles, progress tracking' },
    { icon: UserCheck, label: 'Teacher Portal', desc: 'Class management, lesson planning' },
    { icon: Users, label: 'Parent Portal', desc: 'Real-time updates, communication' },
    { icon: Monitor, label: 'Virtual Classroom', desc: 'Online learning, video conferencing' },
    { icon: ClipboardList, label: 'Attendance', desc: 'Automated tracking, reports' },
    { icon: PenTool, label: 'CBT Platform', desc: 'Computer-based testing, grading' },
    { icon: CreditCard, label: 'Finance', desc: 'Fees, accounting, invoicing' },
    { icon: Calendar, label: 'Timetable', desc: 'Scheduling, resource management' },
    { icon: FileText, label: 'Assignments', desc: 'Submission, grading, feedback' },
    { icon: BarChart, label: 'Analytics', desc: 'Reports, insights, dashboards' },
    { icon: Brain, label: 'AI Assistant', desc: '24/7 intelligent support' },
    { icon: Library, label: 'Library', desc: 'Digital resources, borrowing' },
    { icon: Building, label: 'Hostel', desc: 'Room allocation, management' },
    { icon: Bus, label: 'Transport', desc: 'Fleet tracking, routing' },
    { icon: Package, label: 'Inventory', desc: 'Asset management, supplies' },
    { icon: Phone, label: 'Mobile Apps', desc: 'iOS, Android, responsive' },
  ];

  return (
    <section id="modules" className="py-24 bg-gray-50 dark:bg-gray-900/50">
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
            <span className="block gradient-text">Management Suite</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to run your school efficiently, all in one intelligent platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.03 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 rounded-2xl transition-all"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <module.icon className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{module.label}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{module.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
