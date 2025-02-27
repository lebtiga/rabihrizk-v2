import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function EnhancedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = ['hero', 'services', 'technologies', 'projects', 'partner', 'contact'];
      const currentPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Tech Stack', id: 'technologies' },
    { name: 'Projects', id: 'projects' },
    { name: 'Partner', id: 'partner' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-[#0A051E]/80 backdrop-blur-lg border-b border-blue-900/30 shadow-lg shadow-blue-950/10' 
            : 'py-5 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              href="#hero" 
              className="flex items-center space-x-3 group"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('hero');
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-70 blur-md group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center border border-blue-400/30">
                  <span className="font-bold text-white text-xl">R</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight group-hover:text-blue-400 transition-colors">
                  Rabih Rizk
                </span>
                <span className="text-blue-500 text-xs tracking-wider">
                  AI-POWERED CREATOR
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium relative ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  } transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-blue-500/10 rounded-lg -z-10 border border-blue-500/30"
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
              
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium shadow-lg shadow-blue-700/20"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                Let's Talk
              </motion.a>
            </div>

            {/* Mobile Navigation Toggle */}
            <motion.button 
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.div 
              className="absolute top-0 right-0 h-full w-64 bg-gradient-to-b from-[#0A051E] to-[#120A2E] shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col h-full p-6">
                <div className="mb-8 flex justify-end">
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="flex flex-col space-y-1">
                  {navigationItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`flex items-center justify-between p-3 rounded-lg text-left ${
                        activeSection === item.id
                          ? 'bg-blue-500/10 text-white border border-blue-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      } transition-colors`}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className={`w-4 h-4 ${activeSection === item.id ? 'text-blue-400' : 'text-gray-600'}`} />
                    </motion.button>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('contact');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium text-center shadow-lg shadow-blue-700/20"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}