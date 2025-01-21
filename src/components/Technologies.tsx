import React from 'react';
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
    <section id="technologies" className="py-20 bg-[#0A051E]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Technologies I Work With</h2>
            <p className="text-gray-400">
              Leveraging cutting-edge tools and frameworks to build powerful solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
              >
                <div className={`${tech.color} transform group-hover:scale-110 transition-all`}>
                  {tech.icon}
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
