import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Globe, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Building tailored solutions that perfectly match your business needs, from web apps to automation tools.",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/20",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Integration",
      description: "Implementing cutting-edge AI technologies to enhance your workflows and boost productivity.",
      color: "text-blue-400",
      borderColor: "border-blue-400/20",
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Process Automation",
      description: "Streamlining your operations with smart automation solutions that save time and reduce errors.",
      color: "text-indigo-400",
      borderColor: "border-indigo-400/20",
      gradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Tech Consulting",
      description: "Strategic guidance on leveraging technology to achieve your business goals and stay ahead.",
      color: "text-purple-400",
      borderColor: "border-purple-400/20",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
  return (
    <section id="services" className="py-20 bg-[#0A051E]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium">What I Do</span>
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Services I Offer
            </h2>
            <p className="text-lg text-gray-400">
              Empowering businesses with innovative tech solutions and AI integration
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  className={`mb-6 ${service.color} relative`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3 relative">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed relative">
                  {service.description}
                </p>
                <div className="mt-6 relative">
                  <a
                    href="mailto:rob@rizkadvertising.com?subject=Inquiry about your services"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${service.color} border border-current opacity-75 hover:opacity-100 transition-all duration-300`}
                  >
                    Let's Connect
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
