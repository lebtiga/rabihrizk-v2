import React from 'react';
import { Mail, Facebook, Twitter, Youtube, Coffee, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialHoverVariants = {
    hover: {
      scale: 1.05,
      x: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-24 bg-[#0A051E] relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div 
            className="relative group"
            variants={imageVariants}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <img
                src="/images/rabih-rizk.png"
                alt="Rabih Rizk"
                className="relative rounded-lg w-full max-w-md mx-auto"
              />
            </motion.div>
          </motion.div>

          {/* Right side - Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium">Get in Touch</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6"
              variants={itemVariants}
            >
              Let's Connect
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              variants={itemVariants}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of these platforms:
            </motion.p>
            
            {/* Social Links */}
            <motion.div className="space-y-4">
              {[
                { 
                  icon: Mail, 
                  href: 'mailto:rob@rizkadvertising.com', 
                  label: 'Email', 
                  text: 'rob@rizkadvertising.com',
                  gradient: 'from-blue-500/10 to-cyan-500/10',
                  iconColor: 'text-blue-400'
                },
                { 
                  icon: Twitter, 
                  href: 'https://x.com/RobRizk2020/', 
                  label: 'Twitter', 
                  text: '@RobRizk2020',
                  gradient: 'from-cyan-500/10 to-teal-500/10',
                  iconColor: 'text-cyan-400'
                },
                { 
                  icon: Facebook, 
                  href: 'https://www.facebook.com/rabihrizk/', 
                  label: 'Facebook', 
                  text: 'Rabih Rizk',
                  gradient: 'from-teal-500/10 to-blue-500/10',
                  iconColor: 'text-teal-400'
                },
                { 
                  icon: Youtube, 
                  href: 'https://www.youtube.com/@Rabih-Rizk', 
                  label: 'YouTube', 
                  text: '@Rabih-Rizk',
                  gradient: 'from-red-500/10 to-pink-500/10',
                  iconColor: 'text-red-400'
                },
                { 
                  icon: Coffee, 
                  href: 'https://buymeacoffee.com/robk', 
                  label: 'Buy Me a Coffee', 
                  text: 'Buy me a coffee',
                  gradient: 'from-yellow-500/10 to-orange-500/10',
                  iconColor: 'text-yellow-400'
                }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className={`flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r ${social.gradient} backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group`}
                  aria-label={social.label}
                  variants={socialHoverVariants}
                  whileHover="hover"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    className={`${social.iconColor} p-2 rounded-lg bg-white/5`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{social.text}</span>
                  <motion.span
                    className="ml-auto text-gray-400"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}