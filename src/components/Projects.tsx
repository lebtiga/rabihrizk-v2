import React from 'react';

const projects = [
  {
    title: 'Rule Your Day',
    description: 'AI-powered daily planner and productivity tool',
    url: 'https://ruleyour.day/'
  },
  {
    title: 'SaaSperity',
    description: 'Complete SaaS business management platform',
    url: 'https://saasperity.com/'
  },
  {
    title: 'MapPack Toolbox',
    description: 'Local SEO optimization suite',
    url: 'https://mappacktoolbox.com/'
  },
  {
    title: 'BlogStorm AI',
    description: 'AI-powered content generation platform',
    url: 'https://blogstorm.ai/'
  },
  {
    title: 'Concrete Calculator Pro',
    description: 'Professional concrete estimation tools',
    url: 'https://concretecalculator.pro/'
  },
  {
    title: 'Email Sneak',
    description: 'Email marketing and automation platform',
    url: 'https://emailsneak.com/'
  },
  {
    title: 'Cast My Blog',
    description: 'Blog to podcast conversion service',
    url: 'https://castmyblog.com/'
  },
  {
    title: 'Free Local SEO Tools',
    description: 'Suite of free local SEO optimization tools',
    url: 'https://freelocalseotools.com/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0A051E]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My SaaS Projects
          </h2>
          <p className="text-lg text-gray-400">
            A collection of AI-powered tools and services I've built
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-slate-800/10 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}