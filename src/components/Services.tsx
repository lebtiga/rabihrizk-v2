import React from 'react';
import { FiCode, FiCpu, FiDatabase, FiGlobe } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Custom Development",
      description: "Building tailored solutions that perfectly match your business needs, from web apps to automation tools.",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/20",
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: "AI Integration",
      description: "Implementing cutting-edge AI technologies to enhance your workflows and boost productivity.",
      color: "text-blue-400",
      borderColor: "border-blue-400/20",
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Process Automation",
      description: "Streamlining your operations with smart automation solutions that save time and reduce errors.",
      color: "text-indigo-400",
      borderColor: "border-indigo-400/20",
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Tech Consulting",
      description: "Strategic guidance on leveraging technology to achieve your business goals and stay ahead.",
      color: "text-purple-400",
      borderColor: "border-purple-400/20",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0A051E]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Services I Offer</h2>
            <p className="text-gray-400">
              Empowering businesses with innovative tech solutions and AI integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-blue-500/20 hover:bg-white/10 transition-all group"
              >
                <div className={`mb-4 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4">
                  <a
                    href="#contact"
                    className={`text-sm ${service.color} flex items-center gap-2 group-hover:gap-3 transition-all`}
                  >
                    Let's Connect
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
