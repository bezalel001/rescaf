import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#66b3ff 1px, transparent 1px), linear-gradient(90deg, #66b3ff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#66b3ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 mt-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#66b3ff]/10 border border-[#66b3ff]/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-[#66b3ff] rounded-full animate-pulse"></div>
            <span className="text-[#66b3ff]">Where Africa Builds the Future</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white mb-6">
            The Alkebulan Ecosystem for Global Progress
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
            Building one of the most important institutions of the 21st century. A sovereign ecosystem of technology, education, and investment—rooted in African principles, dedicated to solving humanity's most pressing challenges.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-[#66b3ff] text-white rounded hover:bg-blue-600 transition-all flex items-center gap-2 group">
              Explore Our Vision
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 text-white rounded border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Introduction
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            <div>
              <div className="text-3xl text-[#66b3ff] mb-2">4</div>
              <div className="text-gray-400">Core Pillars</div>
            </div>
            <div>
              <div className="text-3xl text-[#66b3ff] mb-2">6</div>
              <div className="text-gray-400">Schools of Excellence</div>
            </div>
            <div>
              <div className="text-3xl text-[#66b3ff] mb-2">50+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-3xl text-[#66b3ff] mb-2">∞</div>
              <div className="text-gray-400">Generations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
