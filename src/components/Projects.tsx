import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronUp, ChevronDown, Code, Globe, Zap } from 'lucide-react';

export default function EnhancedProjects() {
  const [expandedProject, setExpandedProject] = useState(null);
  
  const projects = [
    {
      title: 'Rule Your Day',
      description: 'AI-powered daily planner and productivity tool that helps you organize tasks with smart prioritization and time blocking.',
      url: 'https://ruleyour.day/',
      image: '/images/ruleyourday.png', // Placeholder, would need an actual image
      tech: ['React', 'Node.js', 'MongoDB', 'OpenAI'],
      category: 'Productivity',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'SaaSperity',
      description: 'Complete SaaS business management platform for tracking metrics, managing customers, and automating billing workflows.',
      url: 'https://saasperity.com/',
      image: '/images/saasperity.png', // Placeholder, would need an actual image
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      category: 'Business',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'MapPack Toolbox',
      description: 'Local SEO optimization suite that helps businesses improve their Google Maps presence and local search rankings.',
      url: 'https://mappacktoolbox.com/',
      image: '/images/mappack.png', // Placeholder, would need an actual image
      tech: ['Vue', 'Firebase', 'Google Maps API', 'Python'],
      category: 'Marketing',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'BlogStorm AI',
      description: 'AI-powered content generation platform that creates SEO-optimized blog posts in seconds using advanced language models.',
      url: 'https://blogstorm.ai/',
      image: '/images/blogstorm.png', // Placeholder, would need an actual image
      tech: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
      category: 'Content',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Concrete Calculator Pro',
      description: 'Professional concrete estimation tools for contractors and engineers to calculate materials needed for construction projects.',
      url: 'https://concretecalculator.pro/',
      image: '/images/concrete.png', // Placeholder, would need an actual image
      tech: ['React', 'React Native', 'Node.js', 'MongoDB'],
      category: 'Construction',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Email Sneak',
      description: 'Email marketing and automation platform designed for personalized campaigns with advanced analytics and segmentation.',
      url: 'https://emailsneak.com/',
      image: '/images/emailsneak.png', // Placeholder, would need an actual image
      tech: ['Next.js', 'AWS SES', 'PostgreSQL', 'Redis'],
      category: 'Marketing',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const toggleProject = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#0A051E] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600/20 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My SaaS Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of AI-powered tools and services I've built to solve real-world problems
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-300 ${
                expandedProject === i ? 'shadow-xl shadow-blue-500/10' : 'hover:shadow-lg hover:shadow-blue-500/5'
              }`}
            >
              {/* Project image - would need actual images */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  {project.icon}
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-xs font-medium text-blue-300">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <motion.button
                    onClick={() => toggleProject(i)}
                    whileHover={{ rotate: expandedProject === i ? -180 : 180, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700/50 text-gray-400 hover:text-white"
                  >
                    {expandedProject === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </motion.button>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">
                  {expandedProject === i 
                    ? project.description
                    : `${project.description.substring(0, 80)}...`}
                </p>
                
                {expandedProject === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div className="flex justify-end">
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    Visit Site
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="mailto:rob@rizkadvertising.com?subject=Custom Solution Inquiry"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium shadow-lg shadow-blue-700/20 hover:shadow-blue-700/40 transition-all duration-300"
          >
            Need a Custom Solution?
            <motion.span 
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}