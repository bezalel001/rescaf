import { Button } from './ui/button';
import { ArrowRight, Target, CheckCircle, FileCheck } from 'lucide-react';
import { Link } from 'react-router';

export function WhatWeBuild() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-sm font-semibold text-[#66b3ff] mb-4 uppercase tracking-wide">
            What we build
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Products and platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            We're building a growing portfolio of tools across learning, compliance, and future domains.
          </p>
        </div>

        <div className="space-y-12">
          {/* Havilah */}
          <div className="border border-gray-200 rounded-lg p-8 hover:border-[#66b3ff] transition-colors">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#66b3ff]/10 rounded-lg">
                <Target className="h-8 w-8 text-[#66b3ff]" />
              </div>
              <div>
                <h3 className="text-3xl mb-2">Havilah — Learning OS</h3>
                <p className="text-lg text-gray-700">
                  A learning operating system that turns any goal into a personalized path, daily practice, real projects, and proof of skill.
                </p>
                <p className="text-gray-600 mt-2 italic">
                  Do → Get feedback → Retry → Ship proof.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#66b3ff] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Personalized learning maps</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#66b3ff] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Practice with immediate feedback</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#66b3ff] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Real projects and shareable proof-of-skill profiles</div>
                </div>
              </div>
            </div>

            <Link to="/discover-havilah">
              <Button 
                variant="outline" 
                className="border-[#66b3ff] text-[#66b3ff] hover:bg-[#66b3ff]/5"
              >
                Discover Havilah
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Nile */}
          <div className="border border-gray-200 rounded-lg p-8 hover:border-[#66b3ff] transition-colors">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#66b3ff]/10 rounded-lg">
                <FileCheck className="h-8 w-8 text-[#66b3ff]" />
              </div>
              <div>
                <h3 className="text-3xl mb-2">Nile — AI-aided EU compliance</h3>
                <p className="text-lg text-gray-700">
                  A compliance checking platform that helps teams understand requirements, validate documentation, and reduce risk when operating under EU rules and standards.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#66b3ff] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Faster requirement discovery and checks</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#66b3ff] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Clear gaps and action steps</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#66b3ff] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Evidence-first reporting for teams</div>
                </div>
              </div>
            </div>

            <Link to="/discover-nile">
              <Button 
                variant="outline" 
                className="border-[#66b3ff] text-[#66b3ff] hover:bg-[#66b3ff]/5"
              >
                Discover Nile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            More products are coming as we expand into new problem areas.
          </p>
        </div>
      </div>
    </section>
  );
}