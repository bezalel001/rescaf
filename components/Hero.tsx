import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#66b3ff]/5 via-white to-[#66b3ff]/10" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Main headline */}
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
            Build progress. Prove it.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
            rescaf is a global technology company turning human potential into real outcomes—through products people love and infrastructure the future depends on.
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            We build tools that help individuals learn and grow, and systems that help organizations operate responsibly, efficiently, and transparently.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-[#66b3ff] hover:bg-[#5599dd] text-white px-8 py-6 text-lg"
            >
              Explore our work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-[#66b3ff] text-[#66b3ff] hover:bg-[#66b3ff]/5 px-8 py-6 text-lg"
            >
              Partner with us
            </Button>
          </div>
        </div>
        
        {/* Trust strip */}
        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
          <div>
            <div className="text-sm font-semibold text-[#66b3ff] mb-2 uppercase tracking-wide">
              Outcome-driven
            </div>
            <p className="text-gray-700">
              Measurable progress, not buzzwords
            </p>
          </div>
          
          <div>
            <div className="text-sm font-semibold text-[#66b3ff] mb-2 uppercase tracking-wide">
              Responsible by design
            </div>
            <p className="text-gray-700">
              Transparency, privacy, and trust
            </p>
          </div>
          
          <div>
            <div className="text-sm font-semibold text-[#66b3ff] mb-2 uppercase tracking-wide">
              Built to scale
            </div>
            <p className="text-gray-700">
              From software products to global infrastructure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}