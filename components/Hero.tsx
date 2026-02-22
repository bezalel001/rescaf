import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden rescaf-motif">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0E111A] via-[#141a2d] to-[#1B1F3B]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_15%,rgba(245,183,0,0.12),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(46,58,106,0.34),transparent_42%),radial-gradient(circle_at_70%_78%,rgba(27,31,59,0.42),transparent_40%)]" />
      <div
        className="absolute inset-0 z-0 opacity-[0.2]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(217,217,217,0.45) 1px, transparent 0)',
          backgroundSize: '38px 38px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.65), transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.65), transparent)',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0E111A]/62 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main headline */}
        <div className="max-w-4xl rescaf-reveal">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-[0.96] text-white">
            Build progress. Prove it.
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed rescaf-reveal rescaf-delay-1 [text-shadow:0_2px_14px_rgba(0,0,0,0.45)]">
            rescaf is a global technology company turning human potential into real outcomes—through products people love and infrastructure the future depends on.
          </p>
          
          <p className="text-lg md:text-xl text-slate-100 mb-10 leading-relaxed rescaf-reveal rescaf-delay-2 [text-shadow:0_2px_14px_rgba(0,0,0,0.45)]">
            We build tools that help individuals learn and grow, and systems that help organizations operate responsibly, efficiently, and transparently.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 rescaf-reveal rescaf-delay-3">
            <Button 
              size="lg" 
              className="bg-[#F5B700] hover:bg-[#e0a700] text-[#1B1F3B] px-8 py-6 text-lg"
            >
              Explore our work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Partner with us
            </Button>
          </div>
        </div>
        
        {/* Trust strip */}
        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
          <div className="rescaf-reveal rescaf-delay-1">
            <div className="text-sm font-semibold text-[#F5B700] mb-2 uppercase tracking-wide">
              Outcome-driven
            </div>
            <p className="text-slate-200">
              Measurable progress, not buzzwords
            </p>
          </div>
          
          <div className="rescaf-reveal rescaf-delay-2">
            <div className="text-sm font-semibold text-[#F5B700] mb-2 uppercase tracking-wide">
              Responsible by design
            </div>
            <p className="text-slate-200">
              Transparency, privacy, and trust
            </p>
          </div>
          
          <div className="rescaf-reveal rescaf-delay-3">
            <div className="text-sm font-semibold text-[#F5B700] mb-2 uppercase tracking-wide">
              Built to scale
            </div>
            <p className="text-slate-200">
              From software products to global infrastructure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
