import { Button } from './ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export function Partnership() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#1B1F3B]/5 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-sm font-semibold text-[#1B1F3B] mb-4 uppercase tracking-wide">
          Partner with rescaf
        </div>
        
        <h2 className="text-4xl md:text-5xl mb-6">
          Let's collaborate
        </h2>
        
        <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
          If you're an educator, organization, investor, or builder who cares about measurable progress and responsible technology, we'd love to collaborate.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-[#1B1F3B] hover:bg-[#2E3A6A] text-white px-8 py-6 text-lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-gray-500">
          Email / form / calendar link placeholder
        </p>
      </div>
    </section>
  );
}
