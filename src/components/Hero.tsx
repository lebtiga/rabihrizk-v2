import React from 'react';
import { FiUsers, FiTool, FiTrendingUp, FiPlayCircle, FiCalendar } from 'react-icons/fi';
import { HiLightBulb } from 'react-icons/hi';

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#0A051E] py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2">
              <h2 className="text-2xl font-bold text-white">RABIH RIZK</h2>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-white">
              Hey there! 👋
            </h1>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Remember when people said AI couldn't be creative? Well, I'm here to prove them wrong! I've found an amazing way to team up with AI to build incredible things faster than ever before.
              </p>
              <p>
                Think of it like having a super-smart assistant that helps me create awesome websites and apps at lightning speed. But don't worry - there's still a human (that's me & my team!) making sure everything looks perfect and works just right.
              </p>
            </div>

            <div className="inline-flex items-center px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/30">
              <span className="text-blue-400 font-medium">Tech Innovator & AI Expert</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <img
                src="/images/rabih-rizk.png"
                alt="Rabih Rizk"
                className="relative w-full h-full object-contain z-10"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Video Section */}
          <div className="lg:col-span-2 w-full bg-white/5 rounded-3xl p-6 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-2/3">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-blue-500/20 shadow-lg shadow-blue-500/10 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:opacity-0 transition-opacity"></div>
                  <iframe
                    src="https://www.youtube.com/embed/xWvpkf6FfvA"
                    title="Legiit Live 2024 - Rabih Rizk"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="w-full md:w-1/3 space-y-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <FiPlayCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Featured Talk</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Legiit Live 2024: AI Innovation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Watch my latest keynote where I share insights on leveraging AI to transform the future of tech development and business automation.
                </p>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FiCalendar className="w-4 h-4" />
                  <span>January 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-blue-500/20 hover:bg-white/10 transition-all group">
              <FiUsers className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-blue-500/20 hover:bg-white/10 transition-all group">
              <HiLightBulb className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-blue-500/20 hover:bg-white/10 transition-all group">
              <FiTool className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">24</div>
              <div className="text-sm text-gray-400">AI Tools Built</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-blue-500/20 hover:bg-white/10 transition-all group">
              <FiTrendingUp className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">300%</div>
              <div className="text-sm text-gray-400">Faster Development</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
