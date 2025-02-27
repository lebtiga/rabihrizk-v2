import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiOpenai,
  SiAmazonaws,
  SiGooglecloud,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
} from 'react-icons/si';

export default function Technologies() {
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

  const technologies = [
    { icon: <SiJavascript className="w-8 h-8" />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript", color: "text-blue-400" },
    { icon: <SiReact className="w-8 h-8" />, name: "React", color: "text-cyan-400" },
    { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js", color: "text-white" },
    { icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind CSS", color: "text-cyan-400" },
    { icon: <SiPython className="w-8 h-8" />, name: "Python", color: "text-yellow-400" },
    { icon: <SiOpenai className="w-8 h-8" />, name: "OpenAI", color: "text-green-400" },
    { icon: <SiAmazonaws className="w-8 h-8" />, name: "AWS", color: "text-orange-400" },
    { icon: <SiGooglecloud className="w-8 h-8" />, name: "Google Cloud", color: "text-blue-400" },
    { icon: <SiDocker className="w-8 h-8" />, name: "Docker", color: "text-blue-500" },
    { icon: <SiKubernetes className="w-8 h-8" />, name: "Kubernetes", color: "text-blue-600" },
    { icon: <SiMongodb className="w-8 h-8" />, name: "MongoDB", color: "text-green-500" },
    { icon: <SiPostgresql className="w-8 h-8" />, name: "PostgreSQL", color: "text-blue-400" },
    { icon: <SiRedis className="w-8 h-8" />, name: "Redis", color: "text-red-500" },
    { icon: <SiGit className="w-8 h-8" />, name: "Git", color: "text-orange-500" },
    { icon: <SiGithub className="w-8 h-8" />, name: "GitHub", color: "text-gray-400" },
  ];

  return (
    <section id="technologies" className="py-20 bg-[#0A051E] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium">Tech Stack</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Technologies I Work With
            </h2>
            <p className="text-lg text-gray-300">
              Leveraging cutting-edge tools and frameworks to build powerful solutions
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <motion.div 
                  className={`${tech.color} relative`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {tech.icon}
                </motion.div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
