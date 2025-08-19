import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function EnhancedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

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
    { name: 'Home', id: 'hero', type: 'scroll' },
    { name: 'Services', id: 'services', type: 'scroll' },
    { name: 'Tech Stack', id: 'technologies', type: 'scroll' },
    { name: 'Projects', id: 'projects', type: 'scroll' },
    { name: 'AKA Framework', id: '/aka-seo-wireframe', type: 'link' },
    { name: 'Partner', id: 'partner', type: 'scroll' },
    { name: 'Contact', id: 'contact', type: 'scroll' }
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
            <motion.div 
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={() => {
                if (!isHomePage) {
                  navigate('/');
                } else {
                  scrollTo('hero');
                }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="relative w-12 h-12">
                {/* Animated background rings */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                {/* Main logo container */}
                <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 3
                    }}
                  />
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-sm" />
                  {/* Logo text */}
                  <span className="relative font-bold text-white text-2xl font-display tracking-wider">
                    R
                  </span>
                  {/* Decorative dots */}
                  <motion.div
                    className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-blue-300"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold text-xl tracking-tight group-hover:scale-105 transition-transform">
                  Rabih Rizk
                </span>
                <span className="text-xs tracking-wider uppercase bg-gradient-to-r from-blue-400/80 to-purple-400/80 text-transparent bg-clip-text font-semibold">
                  AI-POWERED ENTREPRENEUR
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => {
                if (item.type === 'link') {
                  return (
                    <Link
                      key={item.id}
                      to={item.id}
                      className={`px-4 py-2 rounded-lg text-sm font-medium relative ${
                        location.pathname === item.id
                          ? 'text-white bg-blue-500/10 border border-blue-500/30'
                          : 'text-gray-400 hover:text-white'
                      } transition-colors`}
                    >
                      {item.name}
                    </Link>
                  );
                }
                
                // For scroll items, only show on homepage
                if (!isHomePage && item.id !== 'hero') return null;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      if (!isHomePage) {
                        navigate('/');
                        setTimeout(() => scrollTo(item.id), 100);
                      } else {
                        scrollTo(item.id);
                      }
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium relative ${
                      activeSection === item.id && isHomePage
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    } transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    {item.name}
                    {activeSection === item.id && isHomePage && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-blue-500/10 rounded-lg -z-10 border border-blue-500/30"
                        transition={{ type: 'spring', duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                );
              })}
              
              <motion.a
                href="mailto:rob@rizkadvertising.com?subject=Let's discuss your project"
                onClick={(e) => {
                  // Allow default email behavior
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
                  {navigationItems.map((item) => {
                    if (item.type === 'link') {
                      return (
                        <Link
                          key={item.id}
                          to={item.id}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center justify-between p-3 rounded-lg text-left ${
                            location.pathname === item.id
                              ? 'bg-blue-500/10 text-white border border-blue-500/30'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          } transition-colors`}
                        >
                          <span>{item.name}</span>
                          <ChevronRight className={`w-4 h-4 ${location.pathname === item.id ? 'text-blue-400' : 'text-gray-600'}`} />
                        </Link>
                      );
                    }
                    
                    // For scroll items, only show on homepage
                    if (!isHomePage && item.id !== 'hero') return null;
                    
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => {
                          if (!isHomePage) {
                            navigate('/');
                            setIsMenuOpen(false);
                            setTimeout(() => scrollTo(item.id), 100);
                          } else {
                            scrollTo(item.id);
                          }
                        }}
                        className={`flex items-center justify-between p-3 rounded-lg text-left ${
                          activeSection === item.id && isHomePage
                            ? 'bg-blue-500/10 text-white border border-blue-500/30'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        } transition-colors`}
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        <span>{item.name}</span>
                        <ChevronRight className={`w-4 h-4 ${activeSection === item.id && isHomePage ? 'text-blue-400' : 'text-gray-600'}`} />
                      </motion.button>
                    );
                  })}
                </div>
                
                <div className="mt-auto">
                  <a
                    href="mailto:rob@rizkadvertising.com?subject=Let's discuss your project"
                    onClick={(e) => {
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