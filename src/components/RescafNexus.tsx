import { Cpu, Atom, Shield, Dna, Zap, Network } from 'lucide-react';

const schools = [
  {
    name: 'School of Decentralised Intelligence',
    subtitle: 'Advanced AI',
    description: 'Pioneering AI that is collaborative, ethical, and reflective of human diversity. Building multimodal AI for linguistic diversity and planetary stewardship.',
    icon: Cpu
  },
  {
    name: 'School of Quantum Geographies',
    subtitle: 'Quantum Information Science',
    description: 'Harnessing quantum mechanics to redefine humanity\'s relationship with space, time, and information.',
    icon: Atom
  },
  {
    name: 'School of Digital Sovereignty & Cyber Resilience',
    subtitle: 'Security & Infrastructure',
    description: 'Architecting secure and sovereign digital infrastructure. Blockchain for institutional integrity and cyber defense.',
    icon: Shield
  },
  {
    name: 'School of Bio-Innovation & Planetary Health',
    subtitle: 'Biological Engineering',
    description: 'Unlocking biological genius for health sovereignty. Genomics for inclusive medicine and precision public health.',
    icon: Dna
  },
  {
    name: 'School of Sustainable Geologies & Energy',
    subtitle: 'Climate & Planetary Systems',
    description: 'Designing distributed, renewable, and abundant energy ecosystems. Next-generation photovoltaics and climate adaptation.',
    icon: Zap
  },
  {
    name: 'School of Connective Computing & Infrastructure',
    subtitle: 'Advanced Computing',
    description: 'Building sovereign cloud architectures, LEO networks, and edge computing solutions for data sovereignty.',
    icon: Network
  }
];

export function RescafNexus() {
  return (
    <section id="nexus" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[#66b3ff] mb-4">The Talent Forge</div>
          <h2 className="text-white mb-6">The Rescaf Nexus</h2>
          <p className="text-xl text-gray-300 mb-4">
            A New Centre of Gravity for Global Tech
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#66b3ff]/10 border border-[#66b3ff]/20 rounded-full">
            <div className="w-2 h-2 bg-[#66b3ff] rounded-full animate-pulse"></div>
            <span className="text-[#66b3ff]">Where Africa Builds the Future</span>
          </div>
        </div>

        {/* Schools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {schools.map((school, index) => {
            const Icon = school.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#66b3ff]/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#66b3ff]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#66b3ff] transition-colors">
                  <Icon className="w-7 h-7 text-[#66b3ff] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-white mb-2">{school.name}</h3>
                <div className="text-[#66b3ff] mb-3">{school.subtitle}</div>
                <p className="text-gray-400">{school.description}</p>
              </div>
            );
          })}
        </div>

        {/* Builder's Doctrine */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-12 border border-white/10 mb-12">
          <h3 className="text-white mb-8 text-center">The Builder's Doctrine</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-[#66b3ff] mb-3">Learn by Building</div>
              <p className="text-gray-400">
                Every theoretical concept is immediately applied to a tangible project.
              </p>
            </div>
            
            <div>
              <div className="text-[#66b3ff] mb-3">Problems Before Solutions</div>
              <p className="text-gray-400">
                Grand Challenges drive the curriculum from day one.
              </p>
            </div>
            
            <div>
              <div className="text-[#66b3ff] mb-3">Portfolio Over Transcripts</div>
              <p className="text-gray-400">
                Students build a public portfolio of deployed solutions.
              </p>
            </div>
            
            <div>
              <div className="text-[#66b3ff] mb-3">The Moonshot Capstone</div>
              <p className="text-gray-400">
                Final projects receive seed funding from Rescaf Ventures.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 text-center">
            <div className="text-5xl text-[#66b3ff] mb-3">50/50</div>
            <div className="text-white mb-2">Global Elite</div>
            <p className="text-gray-400">
              50% African students, 50% from around the world. Full scholarships for top talent.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 text-center">
            <div className="text-5xl text-[#66b3ff] mb-3">0.1%</div>
            <div className="text-white mb-2">Merit-Based</div>
            <p className="text-gray-400">
              Seeking the top 0.1% of minds globally to join this transformative journey.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 text-center">
            <div className="text-5xl text-[#66b3ff] mb-3">∞</div>
            <div className="text-white mb-2">Generational Impact</div>
            <p className="text-gray-400">
              Building institutions to last for centuries, creating generations of leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
