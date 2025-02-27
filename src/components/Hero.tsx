import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Wrench, TrendingUp, PlayCircle, Lightbulb } from 'lucide-react';

export default function EnhancedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleVideoClick = () => {
    window.open('https://www.youtube.com/watch?v=xWvpkf6FfvA', '_blank');
  };
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A051E]" ref={heroRef}>
      {/* Animated background gradient */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.8) 0%, rgba(59,130,246,0.4) 50%, rgba(0,0,0,0) 70%)',
            top: mousePosition.y * 0.05,
            left: mousePosition.x * 0.05
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(139,92,246,0.4) 50%, rgba(0,0,0,0) 70%)',
            bottom: mousePosition.y * 0.02,
            right: mousePosition.x * 0.02
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.06l2.83-2.83 1.41 1.41L1.41 4.47H0V3.06zm40 35.54l-2.83-2.83 1.41-1.41L40 36.59V38h-1.41zM40 20.83l-2.83-2.83 1.41-1.41L40 18.41v1.41l-1.41-1.41zM40 3.06l-2.83-2.83 1.41-1.41L40 1.41V2.82h-1.41zM20 18.41l2.83-2.83 1.41 1.41L21.41 20H20v-1.59zm0-17.76l2.83-2.83 1.41 1.41L21.41 2.06H20V.65zM2.83 21.65L5.66 18.82l1.41 1.41-2.83 2.83H2.83v-1.41zm0-17.76L5.66 1.06l1.41 1.41-2.83 2.83H2.83V3.89zm37.17 17.76l-2.83-2.83 1.41-1.41 2.83 2.83v1.41h-1.41zM22.83 21.65l-2.83-2.83 1.41-1.41 2.83 2.83v1.41h-1.41zM22.83 3.89l-2.83-2.83 1.41-1.41 2.83 2.83v1.41h-1.41zM37.17 3.89l-2.83-2.83 1.41-1.41 2.83 2.83v1.41h-1.41z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Main content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="flex flex-col items-start space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-blue-400 font-medium">AI-Powered Entrepreneur</span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Transforming Ideas Into Digital Success
              </span>
            </motion.h1>

            <motion.div 
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p>
                I specialize in building AI-powered SaaS solutions that automate workflows, increase efficiency, and drive business growth. With over 15 years of experience, I've helped 500+ clients transform their digital presence.
              </p>
              <p>
                My unique approach combines cutting-edge AI technology with proven business strategies to deliver solutions that are 3x faster to market and 70% more cost-effective than traditional development methods.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <h3 className="text-white font-semibold">What I Do</h3>
                <p className="text-sm text-gray-400">Build AI-powered SaaS solutions that automate and scale your business</p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                <h3 className="text-white font-semibold">How I Do It</h3>
                <p className="text-sm text-gray-400">Combine AI technology with proven business strategies for rapid development</p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                <h3 className="text-white font-semibold">Why Choose Me</h3>
                <p className="text-sm text-gray-400">15+ years experience, 500+ satisfied clients, proven ROI results</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex space-x-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <a 
                href="mailto:rob@rizkadvertising.com?subject=Let's Connect"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Let's Connect
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-blue-500/30 rounded-lg text-blue-400 font-medium hover:bg-blue-500/10 transition-all duration-300"
              >
                See My Work
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-20 h-20 rounded-2xl bg-blue-500/20 backdrop-blur-md border border-blue-500/30 z-10 flex items-center justify-center"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }}
              >
                <Wrench className="w-8 h-8 text-blue-400" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-5 -left-5 w-20 h-20 rounded-2xl bg-purple-500/20 backdrop-blur-md border border-purple-500/30 z-10 flex items-center justify-center"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Lightbulb className="w-8 h-8 text-purple-400" />
              </motion.div>
              
              <img
                src="/images/rabih-rizk.png"
                alt="Rabih Rizk"
                className="relative w-full h-full object-contain z-10 drop-shadow-2xl"
              />
              
              {/* Animated ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-64 h-64 rounded-full border-2 border-blue-500/20"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ 
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear"
                }}
              >
                <div className="w-72 h-72 rounded-full border border-dashed border-purple-500/30" />
              </motion.div>
            </div>
          </motion.div>
          </div>

          {/* Video Section */}
          <motion.div 
            className="lg:col-span-2 w-full bg-white/5 rounded-3xl p-6 backdrop-blur-sm border border-white/10 mt-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-2/3">
                <div 
                  className="relative aspect-video rounded-2xl overflow-hidden border border-blue-500/20 shadow-lg shadow-blue-500/10 group cursor-pointer"
                  onClick={handleVideoClick}
                >
                  {/* Thumbnail */}
                  <img
                    src="https://img.youtube.com/vi/xWvpkf6FfvA/maxresdefault.jpg"
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:bg-black/40 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-500/20 border border-blue-500/40"
                        whileHover={{ scale: 1.1 }}
                        animate={{ 
                          boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0)', '0 0 0 10px rgba(59, 130, 246, 0.3)', '0 0 0 0 rgba(59, 130, 246, 0)']
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2
                        }}
                      >
                        <PlayCircle className="w-10 h-10 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 space-y-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <PlayCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Featured Talk</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Legiit Live 2024: AI Innovation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Watch my latest keynote where I share insights on leveraging AI to transform the future of tech development and business automation.
                </p>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <span>January 2024</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { icon: Users, number: "500+", label: "Happy Clients", color: "cyan" },
              { icon: Lightbulb, number: "200+", label: "Projects Completed", color: "blue" },
              { icon: Wrench, number: "15+", label: "Years Experience", color: "purple" },
              { icon: TrendingUp, number: "100%", label: "Client Satisfaction", color: "pink" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className={`p-6 rounded-2xl bg-white/5 border border-${stat.color}-500/20 hover:bg-white/10 transition-all group backdrop-blur-sm`}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <stat.icon className={`w-8 h-8 text-${stat.color}-400 mb-4 group-hover:scale-110 transition-transform`} />
                <motion.div 
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index + 1.4, duration: 0.6 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}