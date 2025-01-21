import React from 'react';
import { motion } from 'framer-motion';
import { Download, Users, Eye, Award, ArrowRight } from 'lucide-react';

export default function MediaKit() {
  const stats = [
    {
      icon: <Users className="w-5 h-5" />,
      label: "Social Following",
      value: "50K+",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      label: "Monthly Views",
      value: "100K+",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: "Years Experience",
      value: "10+",
      color: "from-cyan-400 to-cyan-600"
    }
  ];

  const resources = [
    {
      title: "Brand Guidelines",
      description: "Logo usage, color palette, and typography guidelines",
      fileType: "PDF",
      fileSize: "2.4 MB"
    },
    {
      title: "Press Kit",
      description: "Bio, high-res photos, and company information",
      fileType: "ZIP",
      fileSize: "15 MB"
    },
    {
      title: "Media Assets",
      description: "Logos, banners, and social media templates",
      fileType: "ZIP",
      fileSize: "8.7 MB"
    }
  ];

  return (
    <section id="mediakit" className="py-24 bg-[#0A051E]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Media Kit
            </motion.h2>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Download official brand assets, view statistics, and access press materials
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-6 rounded-2xl bg-white/5 border border-blue-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                className="p-6 rounded-2xl bg-white/5 border border-blue-500/20 group hover:bg-white/10 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
                  <span className="text-sm text-gray-400">{resource.fileType}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.fileSize}</span>
                  <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Need something specific? Contact me</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
