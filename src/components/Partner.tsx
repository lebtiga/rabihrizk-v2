import React from 'react';
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Partner With Us
          </h2>
          <p className="text-gray-400 text-lg">
            Looking for influencers and industry leaders to create impactful partnerships. Our proven track record shows significant growth for our partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-8 rounded-xl bg-slate-800/10 backdrop-blur-sm border border-slate-700/50"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center bg-slate-800/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Scale Together?
          </h3>
          <p className="text-gray-400 mb-8">
            Join our growing network of successful partnerships. We've helped influencers and industry leaders achieve remarkable growth through strategic collaboration.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
          >
            Let's Connect
            <svg 
              className="w-4 h-4 ml-2" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
