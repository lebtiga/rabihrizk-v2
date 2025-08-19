import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Brain, Target, Layers, Building, Sparkles, ArrowRight, BookOpen, Rocket } from 'lucide-react';

export default function AKAWireframe() {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0A051E] text-white">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                The AKA SEO Wireframe™
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              The Modern Framework for AI-Era Search Visibility
            </p>
            <p className="text-lg text-gray-400">
              Created by Rabih Rizk | Battle-tested on Real Businesses | Built for the Future
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* The Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-8 md:p-12 border border-blue-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              <Sparkles className="inline-block w-8 h-8 mr-2 text-blue-400" />
              How I Discovered AKA
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                After years of helping businesses navigate SEO, I noticed something interesting. 
                The sites that were winning - <span className="text-blue-400 font-semibold">really winning</span> - 
                weren't just following the traditional playbook.
              </p>
              
              <p>
                When ChatGPT and AI search arrived, everything changed. Search engines stopped just matching keywords. 
                They started understanding context, expertise, and genuine authority.
              </p>

              <p>
                I spent months analyzing successful sites, testing strategies, and working with dozens of businesses. 
                Then I saw it - a pattern. The winners were unconsciously following a three-layer structure that 
                made them irresistible to both search engines AND AI systems.
              </p>

              <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <p className="italic">
                  "It wasn't about gaming algorithms anymore. It was about building genuine, structured authority 
                  that machines could recognize and trust."
                </p>
              </div>

              <p>
                That's when the <span className="text-purple-400 font-semibold">AKA SEO Wireframe</span> was born - 
                a simplified, practical framework that any business could implement to dominate modern search.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Wireframe Visualization */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Three-Layer Framework
            </h2>
            <p className="text-xl text-gray-400">
              Hover over each layer to explore how they work together
            </p>
          </motion.div>

          <div className="relative">
            {/* SVG Wireframe Diagram */}
            <svg
              viewBox="0 0 800 400"
              className="w-full max-w-4xl mx-auto"
              style={{ height: 'auto' }}
            >
              {/* Connection Lines */}
              <motion.line
                x1="200" y1="100"
                x2="400" y2="200"
                stroke={hoveredLayer === 'authority' ? '#60A5FA' : '#374151'}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.line
                x1="200" y1="100"
                x2="400" y2="100"
                stroke={hoveredLayer === 'authority' ? '#60A5FA' : '#374151'}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.line
                x1="400" y1="200"
                x2="600" y2="300"
                stroke={hoveredLayer === 'knowledge' ? '#A78BFA' : '#374151'}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <motion.line
                x1="400" y1="200"
                x2="600" y2="200"
                stroke={hoveredLayer === 'knowledge' ? '#A78BFA' : '#374151'}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.line
                x1="400" y1="200"
                x2="600" y2="100"
                stroke={hoveredLayer === 'knowledge' ? '#A78BFA' : '#374151'}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              />

              {/* Authority Layer */}
              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setHoveredLayer('authority')}
                onMouseLeave={() => setHoveredLayer(null)}
                className="cursor-pointer"
              >
                <circle
                  cx="200"
                  cy="100"
                  r="60"
                  fill={hoveredLayer === 'authority' ? '#1E40AF' : '#1F2937'}
                  stroke="#60A5FA"
                  strokeWidth="3"
                />
                <text x="200" y="100" textAnchor="middle" className="fill-white font-bold text-xl">
                  A
                </text>
                <text x="200" y="120" textAnchor="middle" className="fill-gray-300 text-sm">
                  Authority
                </text>
              </motion.g>

              {/* Knowledge Layer */}
              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onMouseEnter={() => setHoveredLayer('knowledge')}
                onMouseLeave={() => setHoveredLayer(null)}
                className="cursor-pointer"
              >
                <circle
                  cx="400"
                  cy="100"
                  r="40"
                  fill={hoveredLayer === 'knowledge' ? '#5B21B6' : '#1F2937'}
                  stroke="#A78BFA"
                  strokeWidth="2"
                />
                <text x="400" y="105" textAnchor="middle" className="fill-white font-bold">
                  K
                </text>
                <text x="400" y="120" textAnchor="middle" className="fill-gray-300 text-xs">
                  Knowledge
                </text>
              </motion.g>

              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onMouseEnter={() => setHoveredLayer('knowledge')}
                onMouseLeave={() => setHoveredLayer(null)}
                className="cursor-pointer"
              >
                <circle
                  cx="400"
                  cy="200"
                  r="40"
                  fill={hoveredLayer === 'knowledge' ? '#5B21B6' : '#1F2937'}
                  stroke="#A78BFA"
                  strokeWidth="2"
                />
                <text x="400" y="205" textAnchor="middle" className="fill-white font-bold">
                  K
                </text>
                <text x="400" y="220" textAnchor="middle" className="fill-gray-300 text-xs">
                  Knowledge
                </text>
              </motion.g>

              {/* Answer Layer */}
              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onMouseEnter={() => setHoveredLayer('answer')}
                onMouseLeave={() => setHoveredLayer(null)}
                className="cursor-pointer"
              >
                <circle
                  cx="600"
                  cy="100"
                  r="30"
                  fill={hoveredLayer === 'answer' ? '#0891B2' : '#1F2937'}
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <text x="600" y="105" textAnchor="middle" className="fill-white font-bold text-sm">
                  A
                </text>
                <text x="600" y="118" textAnchor="middle" className="fill-gray-300 text-xs">
                  Answer
                </text>
              </motion.g>

              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onMouseEnter={() => setHoveredLayer('answer')}
                onMouseLeave={() => setHoveredLayer(null)}
                className="cursor-pointer"
              >
                <circle
                  cx="600"
                  cy="200"
                  r="30"
                  fill={hoveredLayer === 'answer' ? '#0891B2' : '#1F2937'}
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <text x="600" y="205" textAnchor="middle" className="fill-white font-bold text-sm">
                  A
                </text>
                <text x="600" y="218" textAnchor="middle" className="fill-gray-300 text-xs">
                  Answer
                </text>
              </motion.g>

              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onMouseEnter={() => setHoveredLayer('answer')}
                onMouseLeave={() => setHoveredLayer(null)}
                className="cursor-pointer"
              >
                <circle
                  cx="600"
                  cy="300"
                  r="30"
                  fill={hoveredLayer === 'answer' ? '#0891B2' : '#1F2937'}
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <text x="600" y="305" textAnchor="middle" className="fill-white font-bold text-sm">
                  A
                </text>
                <text x="600" y="318" textAnchor="middle" className="fill-gray-300 text-xs">
                  Answer
                </text>
              </motion.g>
            </svg>

            {/* Layer Descriptions */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <motion.div
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                  hoveredLayer === 'authority'
                    ? 'bg-blue-900/30 border-blue-400 scale-105'
                    : 'bg-gray-900/30 border-gray-700'
                }`}
                onMouseEnter={() => setHoveredLayer('authority')}
                onMouseLeave={() => setHoveredLayer(null)}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold">Authority Pages</h3>
                </div>
                <p className="text-gray-300">
                  Your foundation. Comprehensive resources that establish you as the definitive source 
                  on your core topics. Think digital headquarters, not just service pages.
                </p>
                <div className="mt-4 text-sm text-gray-400">
                  <p className="font-semibold text-blue-400 mb-2">Example:</p>
                  <p>"Complete Guide to Commercial Roofing" - covering everything from materials to maintenance</p>
                </div>
              </motion.div>

              <motion.div
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                  hoveredLayer === 'knowledge'
                    ? 'bg-purple-900/30 border-purple-400 scale-105'
                    : 'bg-gray-900/30 border-gray-700'
                }`}
                onMouseEnter={() => setHoveredLayer('knowledge')}
                onMouseLeave={() => setHoveredLayer(null)}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold">Knowledge Pages</h3>
                </div>
                <p className="text-gray-300">
                  Your depth. Demonstrate expertise by exploring every facet of your authority topics. 
                  Prove you understand the nuances and complexities.
                </p>
                <div className="mt-4 text-sm text-gray-400">
                  <p className="font-semibold text-purple-400 mb-2">Examples:</p>
                  <p>"TPO vs EPDM Roofing Comparison" • "Energy Efficiency in Flat Roofs"</p>
                </div>
              </motion.div>

              <motion.div
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                  hoveredLayer === 'answer'
                    ? 'bg-cyan-900/30 border-cyan-400 scale-105'
                    : 'bg-gray-900/30 border-gray-700'
                }`}
                onMouseEnter={() => setHoveredLayer('answer')}
                onMouseLeave={() => setHoveredLayer(null)}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold">Answer Pages</h3>
                </div>
                <p className="text-gray-300">
                  Your accessibility. Direct answers to questions your customers ask ChatGPT and Google. 
                  Capture intent at the moment of need.
                </p>
                <div className="mt-4 text-sm text-gray-400">
                  <p className="font-semibold text-cyan-400 mb-2">Examples:</p>
                  <p>"How long does a commercial roof last?" • "Cost per square foot for TPO?"</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why AKA Works in the AI Era
            </h2>
            <p className="text-xl text-gray-400">
              Built for how modern search actually works
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: 'LLM-Optimized Structure',
                description: 'AI models are trained on Q&A pairs and authoritative sources. AKA provides both.'
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: 'Context Over Keywords',
                description: 'Builds contextual relationships that AI understands, not keyword stuffing.'
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: 'Natural Information Flow',
                description: 'Mirrors how humans seek information - from broad understanding to specific answers.'
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: 'Simplified Implementation',
                description: 'Designed for small and mid-sized businesses who need results without complexity.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="p-2 bg-blue-500/20 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-400">
              What happens when you implement AKA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '340%', label: 'Organic Traffic Increase', subtext: 'Local Service Business' },
              { number: '85%', label: 'Target Keywords Ranking', subtext: 'B2B SaaS Company' },
              { number: '50+', label: 'Featured Snippets Won', subtext: 'E-commerce Brand' },
              { number: '3x', label: 'Faster Results', subtext: 'vs Traditional SEO' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-6 border border-blue-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.subtext}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your SEO?
              </h2>
              <p className="text-xl mb-8 text-gray-100">
                Join the waitlist for the complete AKA SEO Wireframe guide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Get the Complete Guide
                </motion.button>
                <motion.a
                  href="mailto:rob@rizkadvertising.com?subject=AKA SEO Wireframe Inquiry"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Is AKA different from traditional pillar/cluster models?',
                a: 'Yes! While it builds on SEO fundamentals, AKA is specifically optimized for AI-era search, simplified for SMB implementation, and includes the critical Answer layer that traditional models miss.'
              },
              {
                q: 'How long does it take to see results?',
                a: 'Most businesses see initial improvements within 60-90 days, with significant results typically appearing at the 4-6 month mark.'
              },
              {
                q: 'Do I need to abandon my current SEO strategy?',
                a: 'Not at all! AKA builds upon proven SEO fundamentals. Your existing content can often be reorganized into the AKA structure.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 rounded-xl p-6 border border-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-400 mb-4">
            The AKA SEO Wireframe™ - Created by Rabih Rizk
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Rabih Rizk. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}