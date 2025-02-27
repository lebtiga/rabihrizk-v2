import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiTool, FiTrendingUp, FiPlayCircle, FiCalendar } from 'react-icons/fi';
import { HiLightBulb } from 'react-icons/hi';

export default function EnhancedHero() {
  const heroRef = useRef(null);
  
  // Parallax effect for background elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const section = heroRef.current;
      const { left, top, width, height } = section.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;
      
      const moveX = (mouseX - width / 2) / 25;
      const moveY = (mouseY - height / 2) / 25;
      
      const elements = section.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-depth')) || 1;
        el.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleVideoClick = () => {
    window.open('https://www.youtube.com/watch?v=xWvpkf6FfvA', '_blank');
  };

  return (
    <div className="relative min-h-screen py-32 overflow-hidden" ref={heroRef}>
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[#0A051E]"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl parallax-element" data-depth="0.5"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl parallax-element" data-depth="0.8"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl parallax-element" data-depth="0.3"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: 'linear-gradient(transparent 95%, rgba(59, 130, 246, 0.3) 100%), linear-gradient(90deg, transparent 95%, rgba(59, 130, 246, 0.3) 100%)',
             backgroundSize: '30px 30px'
           }}
      ></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content with animations */}
          <motion.div 
            className="flex flex-col items-start space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-blue-400 font-medium">AI-POWERED CREATOR</h2>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-7xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                RABIH RIZK
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hey there! 👋
            </motion.h2>

            <motion.div 
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p>
                Remember when people said AI couldn't be creative? Well, I'm here to prove them wrong! I've found an amazing way to team up with AI to build incredible things faster than ever before.
              </p>
              <p>
                Think of it like having a super-smart assistant that helps me create awesome websites and apps at lightning speed. But don't worry - there's still a human (that's me & my team!) making sure everything looks perfect and works just right.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all group"
              >
                <span>Work with me</span>
                <svg 
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image with glow effects */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: [0.34, 1.56, 0.64, 1] // Spring-like effect
            }}
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              {/* Multiple glowing orbs for a more dynamic effect */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
              
              {/* Main image with floating animation */}
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden"
                animate={{ 
                  y: [0, -15, 0],
                  rotateZ: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  ease: "easeInOut", 
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              >
                <img
                  src="/images/rabih-rizk.png"
                  alt="Rabih Rizk"
                  className="relative w-full h-full object-contain z-10"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

          {/* Video Section with enhanced effects */}
          <motion.div 
            className="lg:col-span-2 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="relative p-8 rounded-3xl overflow-hidden">
              {/* Background with glassmorphism effect */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"></div>
              
              <div className="relative flex flex-col md:flex-row items-start gap-6">
                <div className="w-full md:w-2/3">
                  <div 
                    className="relative aspect-video rounded-2xl overflow-hidden border border-blue-500/20 shadow-lg shadow-blue-500/10 group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
                    onClick={handleVideoClick}
                  >
                    {/* Thumbnail with hover effect */}
                    <img
                      src="https://img.youtube.com/vi/xWvpkf6FfvA/maxresdefault.jpg"
                      alt="Video Thumbnail"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-70 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-500/30 border border-blue-500/50 group-hover:bg-blue-500/50 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiPlayCircle className="w-10 h-10 text-white" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/3 space-y-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <FiPlayCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Featured Talk</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Legiit Live 2024: AI Innovation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Watch my latest keynote where I share insights on leveraging AI to transform the future of tech development and business automation.
                  </p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiCalendar className="w-4 h-4" />
                    <span>January 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid with hover effects */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-8">
            {[
              { icon: FiUsers, title: "500+", subtitle: "Happy Clients", color: "text-cyan-400", delay: 1.4 },
              { icon: HiLightBulb, title: "200+", subtitle: "Projects Completed", color: "text-blue-400", delay: 1.5 },
              { icon: FiTool, title: "15+", subtitle: "Years Experience", color: "text-purple-400", delay: 1.6 },
              { icon: FiTrendingUp, title: "100%", subtitle: "Client Satisfaction", color: "text-pink-400", delay: 1.7 }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mb-4 group-hover:scale-110 transition-transform`} />
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{stat.title}</div>
                <div className="text-sm text-gray-400">{stat.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating particles for added depth */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3 + Math.random() * 5, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </div>
  );
}