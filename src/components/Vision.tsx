import { Target, Heart, Compass } from 'lucide-react';

export function Vision() {
  return (
    <section id="vision" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-[#66b3ff] mb-4">Our Foundation</div>
          <h2 className="text-gray-900 mb-6">
            A Necessary Evolution
          </h2>
          <p className="text-xl text-gray-600">
            The world is waiting for the unique brilliance, resilience, and perspective that we bring. Our model is built with a depth of cultural understanding rooted in the Alkebulan worldview.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#66b3ff] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To partner in building humanity's future by making African wisdom, innovation, and leadership indispensable to global prosperity and harmony.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To build a sovereign ecosystem of world-class technology and transformative education, rooted in African principles, that solves continental challenges.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-rose-50 to-orange-50 rounded-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-900 mb-4">Our Purpose</h3>
            <p className="text-gray-600">
              To harness ancestral wisdom, fuse it with world-class technology, and deploy it at scale to solve humanity's most pressing challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
