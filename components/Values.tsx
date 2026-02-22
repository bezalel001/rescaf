import { Users, Compass, TreePine, Award, Lightbulb, GraduationCap } from 'lucide-react';

export function Values() {
  const values = [
    {
      number: '1',
      title: 'Ubuntu in Practice: We Rise Together',
      description: 'We prioritize shared progress over individual glory. Our success is measured by the opportunity, prosperity, and knowledge we create for our teams, partners, and the communities we serve.',
      practice: 'What this means at rescaf: we collaborate deeply, share credit, and build systems that uplift more than just ourselves.',
      icon: Users
    },
    {
      number: '2',
      title: 'Sovereign Imagination: We Shape Our Own Future',
      description: 'We choose ownership over dependency. We define problems from real context, think boldly, and build world-class solutions on our terms—while partnering globally where it strengthens outcomes.',
      practice: 'What this means at rescaf: we welcome global ideas and talent, but we build local capability, maintain control of our fundamentals, and avoid fragile reliance.',
      icon: Compass
    },
    {
      number: '3',
      title: 'Generational Stewardship: We Build for the Long Term',
      description: 'We act as stewards of a vision bigger than ourselves. We prioritize sustainability, resilience, and trust over short-term wins. We build institutions, not just products.',
      practice: 'What this means at rescaf: we invest in reliability, security, documentation, and durable infrastructure.',
      icon: TreePine
    },
    {
      number: '4',
      title: 'Radical Excellence: We Set the Standard',
      description: 'We hold ourselves to the highest standards of quality, precision, and execution. From the code we write to the customer experience we deliver, we aim to be undeniably world-class.',
      practice: 'What this means at rescaf: we sweat the details, ship responsibly, and do not compromise on quality.',
      icon: Award
    },
    {
      number: '5',
      title: 'Rooted Innovation: Wisdom + Technology',
      description: 'We draw inspiration from deep wisdom, lived experience, and diverse knowledge systems to design solutions that truly fit people\'s realities. We believe the strongest innovation happens where cultural intelligence meets cutting-edge technology.',
      practice: 'What this means at rescaf: we build with context, humility, and respect—so our products work in the real world, not just in theory.',
      icon: Lightbulb
    },
    {
      number: '6',
      title: 'Each One, Teach One: We Share to Grow',
      description: 'We are lifelong learners and active teachers. Knowledge isn\'t hoarded—it\'s shared, documented, and multiplied.',
      practice: 'What this means at rescaf: we mentor, write things down, run learning sessions, and help each other level up—across roles, teams, and countries.',
      icon: GraduationCap
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mb-12">
          <div className="text-sm font-semibold text-[#1B1F3B] mb-4 uppercase tracking-wide">
            rescaf values
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            How we work and what we believe
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div 
                key={value.number}
                className="relative p-8 border border-gray-200 rounded-lg hover:border-[#1B1F3B] transition-colors group bg-gradient-to-br from-white to-gray-50"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#1B1F3B]/10 flex items-center justify-center text-[#1B1F3B] font-bold text-xl group-hover:bg-[#1B1F3B] group-hover:text-white transition-colors">
                      {value.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="h-6 w-6 text-[#1B1F3B] flex-shrink-0" />
                      <h3 className="text-xl font-semibold leading-tight">{value.title}</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {value.description}
                </p>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    {value.practice}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}