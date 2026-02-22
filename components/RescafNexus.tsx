import { GraduationCap, Building, Users, Sparkles } from 'lucide-react';

export function RescafNexus() {
  const audiences = [
    {
      title: 'Learners and educators',
      icon: GraduationCap
    },
    {
      title: 'Teams operating in regulated environments',
      icon: Building
    },
    {
      title: 'Partners building digital services at scale',
      icon: Sparkles
    },
    {
      title: 'Communities seeking more access to opportunity',
      icon: Users
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mb-12">
          <div className="text-sm font-semibold text-[#1B1F3B] mb-4 uppercase tracking-wide">
            Who we serve
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Built for individuals and organizations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <div 
                key={audience.title}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#1B1F3B] transition-colors"
              >
                <div className="p-3 bg-[#1B1F3B]/10 rounded-lg inline-block mb-4">
                  <Icon className="h-8 w-8 text-[#1B1F3B]" />
                </div>
                <h3 className="text-lg font-semibold leading-snug">
                  {audience.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}