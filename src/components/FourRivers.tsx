import { GraduationCap, Shield, FlaskConical, TrendingUp } from 'lucide-react';

const rivers = [
  {
    name: 'Pishon',
    title: 'The Rescaf Nexus',
    description: 'Our world-class university and research institute for emerging technology. The source of our talent and groundbreaking IP, training the next generation of ethical innovators.',
    icon: GraduationCap,
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    name: 'Gihon',
    title: 'Sovereign Digital Infrastructure',
    description: 'The foundational technologies we build and control: sovereign cloud computing, cybersecurity, and blockchain platforms.',
    icon: Shield,
    color: 'bg-emerald-600',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600'
  },
  {
    name: 'Hiddekel',
    title: 'Focused Research & Development Labs',
    description: 'Our specialized divisions in AI, Quantum Computing, and Biotech take breakthroughs from the Nexus and turn them into world-changing products.',
    icon: FlaskConical,
    color: 'bg-purple-600',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600'
  },
  {
    name: 'Euphrates',
    title: 'Rescaf Ventures & Investments',
    description: 'Our strategic investment arm that funds the growth of spin-offs and external startups that align with our mission, ensuring global scale.',
    icon: TrendingUp,
    color: 'bg-[#66b3ff]',
    lightColor: 'bg-blue-50',
    textColor: 'text-[#66b3ff]'
  }
];

export function FourRivers() {
  return (
    <section id="ecosystem" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[#66b3ff] mb-4">The Core Ecosystem</div>
          <h2 className="text-gray-900 mb-6">The Four Rivers</h2>
          <p className="text-xl text-gray-600">
            Four interdependent pillars that create a self-reinforcing cycle of innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rivers.map((river, index) => {
            const Icon = river.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className={`inline-flex w-14 h-14 ${river.color} rounded-lg items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <div className={`${river.textColor} mb-2`}>{river.name}</div>
                <h3 className="text-gray-900 mb-3">{river.title}</h3>
                <p className="text-gray-600">{river.description}</p>
              </div>
            );
          })}
        </div>

        {/* Self-Reinforcing Cycle */}
        <div className="mt-16 p-12 bg-gradient-to-r from-slate-900 to-blue-900 rounded-lg text-center">
          <h3 className="text-white mb-4">A Self-Reinforcing Cycle</h3>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg">
            Research fuels innovation → Innovation creates profit → Profit funds more research and scholarships → Graduates become leaders who strengthen the entire ecosystem
          </p>
        </div>
      </div>
    </section>
  );
}
