import { Users, Sparkles, Clock, Award, BookOpen, Share2 } from 'lucide-react';

const values = [
  {
    title: 'Ubuntu in Practice',
    subtitle: 'We Rise Together',
    description: 'We prioritize the collective well-being over individual glory. Our success is measured by the prosperity we create for our entire network.',
    icon: Users
  },
  {
    title: 'Sovereign Imagination',
    subtitle: 'We Define Our Own Future',
    description: 'We have the audacity to define our own challenges and create world-class technology on our own terms.',
    icon: Sparkles
  },
  {
    title: 'Generational Stewardship',
    subtitle: 'We Build for the Long Term',
    description: 'We make decisions that prioritize long-term impact for the next seven generations.',
    icon: Clock
  },
  {
    title: 'Radical Excellence',
    subtitle: 'We Set the Global Standard',
    description: 'We prove that African excellence is world-class and undeniable in everything we do.',
    icon: Award
  },
  {
    title: 'Rooted Innovation',
    subtitle: 'We Build on Ancient Wisdom',
    description: 'We find transformative solutions at the intersection of ancestral knowledge and cutting-edge technology.',
    icon: BookOpen
  },
  {
    title: 'Each One, Teach One',
    subtitle: 'We Share to Grow',
    description: 'Knowledge is not a commodity to be hoarded but a wellspring to be shared for our collective rise.',
    icon: Share2
  }
];

export function Values() {
  return (
    <section id="values" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[#66b3ff] mb-4">Our Alkebulan DNA</div>
          <h2 className="text-gray-900 mb-6">Core Values</h2>
          <p className="text-xl text-gray-600">
            The non-negotiable principles that guide every decision, hire, and innovation at Rescaf
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group p-8 border border-gray-200 rounded-lg hover:border-[#66b3ff] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#66b3ff]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#66b3ff] transition-colors">
                  <Icon className="w-6 h-6 text-[#66b3ff] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-gray-900 mb-2">{value.title}</h3>
                <div className="text-[#66b3ff] mb-3">{value.subtitle}</div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
