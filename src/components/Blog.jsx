import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, Calendar, User, Clock, 
  ChevronDown, ChevronUp, Eye, Heart,
  Share2, Bookmark, MessageCircle,
  Users, Brain, Cpu, Zap, Cloud,
  Smartphone, Shield, BarChart3,
  Video, School, Award, Sparkles, CheckCircle
} from 'lucide-react';

// Import your images - update these paths to match your actual images
import blogImage1 from '../assets/blog_img1.png';
import blogImage2 from '../assets/blog_img2.png';
import blogImage3 from '../assets/blog_img3.png';
import blogImage4 from '../assets/blog_img4.png';
import blogImage5 from '../assets/blog_img5.png';
import blogImage6 from '../assets/blog_img6.avif';

const Blog = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedPost, setExpandedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState({});

  const toggleExpand = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  const toggleLike = (id) => {
    setLikedPosts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleBookmark = (id) => {
    setBookmarkedPosts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const posts = [
    {
      id: 1,
      title: 'AI-Powered Learning: The Future of Education',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way students learn and teachers teach...',
      content: `
        Artificial Intelligence is transforming education in unprecedented ways. At 360CloudSchool, we're 
        leveraging AI to create personalized learning experiences that adapt to each student's unique needs 
        and learning pace.
        
        Our AI-powered platform analyzes student performance data in real-time, identifying strengths and 
        areas for improvement. This allows us to provide customized study plans, targeted practice exercises, 
        and intelligent recommendations that help students learn more effectively.
        
        Teachers also benefit from AI insights that help them understand class performance patterns, identify 
        students who may need additional support, and optimize their teaching strategies for better outcomes.
        
        The future of education is personalized, adaptive, and powered by artificial intelligence. 
        360CloudSchool is at the forefront of this transformation.
      `,
      author: 'Ebere Gentle Victor',
      role: 'CO-Founder & CTO',
      date: 'January 15, 2026',
      readTime: '5 min read',
      category: 'AI & Technology',
      icon: Brain,
      color: 'from-blue-500 to-purple-500',
      image: blogImage1,
      likes: 127,
      comments: 34,
      features: [
        'Personalized Learning Paths',
        'Real-Time Performance Analytics',
        'AI-Powered Recommendations'
      ]
    },
    {
      id: 2,
      title: 'Cloud-Based School Management: Why Your School Needs It',
      excerpt: 'Learn why cloud-based school management systems are essential for modern educational institutions...',
      content: `
        The shift to cloud-based school management is no longer optional—it's essential. Schools that embrace 
        cloud technology gain significant advantages in efficiency, accessibility, and security.
        
        360CloudSchool provides a comprehensive cloud platform that allows administrators, teachers, students, 
        and parents to access information from anywhere, at any time. No more paper-based records, no more 
        lost documents, and no more communication delays.
        
        Our cloud-based approach ensures that your school's data is always secure, backed up automatically, 
        and accessible whenever you need it. With 99.9% uptime and enterprise-grade security, you can focus 
        on education while we handle the technology.
        
        The benefits of cloud-based school management include improved communication, streamlined administration, 
        enhanced collaboration, and better decision-making through real-time data.
      `,
      author: 'Ebere Gentle Victor',
      role: 'CO-Founder & CTO',
      date: 'January 12, 2026',
      readTime: '4 min read',
      category: 'Cloud Technology',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      image: blogImage2,
      likes: 98,
      comments: 23,
      features: [
        '24/7 Accessibility',
        'Automatic Backups',
        'Enterprise-Grade Security'
      ]
    },
    {
      id: 3,
      title: 'The Power of Smart Analytics in Education',
      excerpt: 'How data-driven insights are helping schools make better decisions and improve student outcomes...',
      content: `
        In today's data-driven world, schools that leverage analytics have a significant advantage. 
        360CloudSchool's smart analytics platform provides actionable insights that help educators make 
        informed decisions.
        
        Our analytics tools track student performance across multiple dimensions—attendance, grades, 
        engagement, and more. This comprehensive view allows teachers to identify patterns, predict 
        potential challenges, and intervene early to support struggling students.
        
        School administrators benefit from high-level dashboards that show key performance indicators, 
        resource allocation, and operational efficiency metrics. These insights enable better strategic 
        planning and resource management.
        
        The power of analytics in education cannot be overstated. It transforms raw data into 
        actionable insights that improve student outcomes and institutional effectiveness.
      `,
      author: 'Ebere Gentle Victor',
      role: 'CO-Founder & CTO',
      date: 'January 10, 2026',
      readTime: '6 min read',
      category: 'Data Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-teal-500',
      image: blogImage3,
      likes: 156,
      comments: 45,
      features: [
        'Real-Time Dashboards',
        'Predictive Analytics',
        'Performance Tracking'
      ]
    },
    {
      id: 4,
      title: 'Mobile Learning: Education in Your Pocket',
      excerpt: 'How mobile technology is making education more accessible and engaging for students everywhere...',
      content: `
        Mobile technology has transformed how we access information, and education is no exception. 
        360CloudSchool's mobile app puts learning and school management in the palm of your hand.
        
        Students can access assignments, submit work, check grades, and communicate with teachers—all 
        from their mobile devices. This accessibility increases engagement and ensures that learning 
        continues beyond the classroom walls.
        
        Parents benefit from real-time updates on their child's progress, attendance, and school 
        communications. Teachers can manage classes, grade assignments, and communicate with students 
        and parents on the go.
        
        Mobile learning is the future of education, and 360CloudSchool is leading the way with a 
        comprehensive mobile experience for all users.
      `,
      author: 'Ebere Gentle Victor',
      role: 'CO-Founder & CTO',
      date: 'January 8, 2026',
      readTime: '4 min read',
      category: 'Mobile Technology',
      icon: Smartphone,
      color: 'from-pink-500 to-rose-500',
      image: blogImage4,
      likes: 89,
      comments: 19,
      features: [
        'Full Mobile Access',
        'Push Notifications',
        'Offline Capabilities'
      ]
    },
    {
      id: 5,
      title: 'Cybersecurity in Education: Protecting Student Data',
      excerpt: 'Why data security matters in education and how 360CloudSchool keeps your information safe...',
      content: `
        In an increasingly digital world, cybersecurity in education is more important than ever. 
        Schools hold sensitive student data, and protecting that data is our top priority at 360CloudSchool.
        
        We implement enterprise-grade security measures including end-to-end encryption, multi-factor 
        authentication, and regular security audits. Our platform is designed to protect against 
        cyber threats while ensuring that authorized users can access the information they need.
        
        Data privacy is also a key concern. We comply with all relevant data protection regulations 
        and give schools full control over their data. You own your data—we just provide the platform 
        to manage it securely.
        
        As cyber threats continue to evolve, we remain committed to staying ahead of the curve with 
        the latest security technologies and best practices.
      `,
      author: 'Ebere Gentle Victor',
      role: 'CO-Founder & CTO',
      date: 'January 5, 2026',
      readTime: '5 min read',
      category: 'Security',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      image: blogImage5,
      likes: 112,
      comments: 28,
      features: [
        'End-to-End Encryption',
        'Multi-Factor Authentication',
        'Regular Security Audits'
      ]
    },
    {
      id: 6,
      title: 'The Future of Virtual Classrooms',
      excerpt: 'How virtual classroom technology is changing the way students learn and interact...',
      content: `
        Virtual classrooms have become an essential part of modern education. 360CloudSchool provides 
        a comprehensive virtual classroom platform that makes online learning engaging and effective.
        
        Our virtual classrooms feature interactive whiteboards, screen sharing, video conferencing, 
        breakout rooms, and real-time collaboration tools. Students can participate in live lessons, 
        interact with peers, and access recorded sessions for review.
        
        Teachers can deliver engaging lessons, track student participation, and provide immediate 
        feedback. The virtual classroom experience is designed to replicate and enhance the 
        in-person learning environment.
        
        The future of education combines the best of physical and virtual learning, and 360CloudSchool 
        is at the forefront of this hybrid education revolution.
      `,
      author: 'Ebere Gentle Victor',
      role: 'CO-Founder & CTO',
      date: 'January 3, 2026',
      readTime: '5 min read',
      category: 'Virtual Learning',
      icon: Video,
      color: 'from-indigo-500 to-purple-500',
      image: blogImage6,
      likes: 203,
      comments: 56,
      features: [
        'Interactive Whiteboards',
        'Video Conferencing',
        'Recorded Sessions'
      ]
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold">Blog</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6">
            Features You'll{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Love</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover the powerful features waiting for you when 360CloudSchool launches
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/${post.color.split(' ')[1].replace('to-', '').replace('-500', '')}/ffffff?text=${post.category}`;
                  }}
                />
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${post.color} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}>
                  <post.icon className="w-3 h-3" />
                  {post.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                  <button 
                    onClick={() => toggleExpand(post.id)}
                    className="bg-white text-gray-800 px-4 py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all"
                  >
                    Read More
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-white">{post.author}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{post.role}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex gap-4">
                    <button 
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1 text-sm transition-colors ${
                        likedPosts[post.id] ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedPosts[post.id] ? 'fill-current' : ''}`} />
                      <span>{post.likes + (likedPosts[post.id] ? 1 : 0)}</span>
                    </button>
                    <button 
                      onClick={() => toggleExpand(post.id)}
                      className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => toggleBookmark(post.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        bookmarkedPosts[post.id] 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarkedPosts[post.id] ? 'fill-current' : ''}`} />
                    </button>
                    <button 
                      onClick={() => toggleExpand(post.id)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 transition-colors"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${expandedPost === post.id ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedPost === post.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-4 space-y-4">
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                            {post.content}
                          </p>
                        </div>

                        {/* Features list */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                          <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            Key Features
                          </h4>
                          <ul className="space-y-1">
                            {post.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button 
                          onClick={() => toggleExpand(post.id)}
                          className="text-blue-600 dark:text-blue-400 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          Show Less <ChevronUp className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all hover:scale-105">
            View All Features
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
