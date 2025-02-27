import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    title: "Influencer Collaboration",
    description: "Perfect for content creators with engaged followers who want to scale their impact"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
    title: "Proven Success",
    description: "Track record of successful partnerships with measurable growth and engagement"
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    title: "Custom Solutions",
    description: "Tailored partnership strategies that align with your brand and audience"
  }
];

export default function Partner() {
  return (
    <section id="partner" className="py-24 bg-[#0A051E]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Partner With Us
          </h2>
          <p className="text-gray-300 text-lg">
            Looking for influencers and industry leaders to create impactful partnerships. Our proven track record shows significant growth for our partners.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={{
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
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 group"
            >
              <motion.div 
                className="mb-6 text-blue-400"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto text-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-12 border border-blue-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Scale Together?
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Join our growing network of successful partnerships. We've helped influencers and industry leaders achieve remarkable growth through strategic collaboration.
          </p>
          <motion.a
            href="mailto:rob@rizkadvertising.com?subject=Partnership Inquiry"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
