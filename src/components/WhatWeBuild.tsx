import { Brain, Fingerprint, Heart, Lock, Building2, Lightbulb } from 'lucide-react';

const products = [
  {
    name: 'Havilah',
    tagline: 'The Global AI Learning Platform',
    description: 'A sovereign, adaptive learning intelligence that cultivates the world\'s brightest minds in frontier technologies.',
    icon: Brain
  },
  {
    name: 'Nok',
    tagline: 'Sovereign Digital Identity Infrastructure',
    description: 'A digital identity and verification protocol rooted in Ubuntu, securing the digital sovereignty of people and nations.',
    icon: Fingerprint
  },
  {
    name: 'AI for Planetary Health',
    tagline: 'Global Health Solutions',
    description: 'AI models trained on diverse African data to solve global challenges, diagnosing diseases more accurately.',
    icon: Heart
  },
  {
    name: 'Quantum-Resistant Encryption',
    tagline: 'Next-Generation Security',
    description: 'Pioneering the next generation of encryption to future-proof digital communications and financial systems.',
    icon: Lock
  },
  {
    name: 'tenKobo',
    tagline: 'Ecosystem-Empowering Platforms',
    description: 'Transforming essential industries by digitizing and empowering thousands of small local businesses.',
    icon: Building2
  },
  {
    name: 'Leadership Pipeline',
    tagline: 'Permanent Pipeline of Leaders',
    description: 'Building a perpetual engine for producing the world\'s most ethical, innovative, and culturally-grounded leaders.',
    icon: Lightbulb
  }
];

export function WhatWeBuild() {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[#66b3ff] mb-4">Innovation in Action</div>
          <h2 className="text-gray-900 mb-6">What We Are Building</h2>
          <p className="text-xl text-gray-600">
            Tangible, high-impact solutions that serve as the foundational layers of a new digital and knowledge economy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isActive = product.name === 'Havilah' || product.name === 'tenKobo';
            return (
              <div
                key={index}
                className={`group bg-white p-8 rounded-lg border border-gray-200 hover:border-[#66b3ff] hover:shadow-xl transition-all duration-300 ${!isActive ? 'opacity-40' : ''}`}
              >
                <div className="w-14 h-14 bg-[#66b3ff]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#66b3ff] transition-colors">
                  <Icon className="w-7 h-7 text-[#66b3ff] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-gray-900 mb-2">{product.name}</h3>
                <div className="text-[#66b3ff] mb-3">{product.tagline}</div>
                <p className="text-gray-600">{product.description}</p>
                {!isActive && (
                  <div className="mt-4 inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    Coming Soon
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-12 bg-white rounded-lg border border-gray-200 text-center">
          <h3 className="text-gray-900 mb-4">Not Just Products, But Solutions for Humanity</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Every solution we build is designed to solve real problems, starting with Africa and scaling to the world. We build for impact, sovereignty, and generational change.
          </p>
          <button className="px-8 py-4 bg-[#66b3ff] text-white rounded hover:bg-blue-600 transition-colors">
            Explore Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
}