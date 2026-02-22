import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  ArrowRight, 
  Users, 
  Award, 
  Globe, 
  Target, 
  BookOpen, 
  Clock,
  FileText,
  Shield,
  BarChart3,
  Lock,
  CheckCircle,
  X,
  TrendingUp,
  MessageSquare,
  HelpCircle
} from 'lucide-react';

export default function Culture() {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#1B1F3B]/5 via-white to-[#2E3A6A]/10 rescaf-divider rescaf-motif">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl rescaf-reveal">
            <div className="text-sm font-semibold text-[#1B1F3B] mb-4 uppercase tracking-wide">
              rescaf Culture
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              Who we are
            </h1>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                rescaf is a global technology company built to solve meaningful problems at scale. We build products and, over time, the infrastructure that powers emerging technologies—across Africa and around the world.
              </p>
              <p>
                We're mission-led and outcome-driven: we care about what we ship, who it helps, and whether it can be trusted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What it feels like */}
      <section className="py-20 px-6 bg-white rescaf-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 rescaf-reveal">
            What it feels like to work here
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl rescaf-surface">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-[#1B1F3B]" />
                <h3 className="text-2xl font-semibold">We rise together</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We don't optimize for individual glory. We collaborate deeply, share credit, and protect team trust. People succeed at rescaf by making others stronger.
              </p>
            </div>

            <div className="p-8 rounded-2xl rescaf-surface">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-[#1B1F3B]" />
                <h3 className="text-2xl font-semibold">We build with ownership</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                If you ship it, you own it—quality, reliability, and long-term maintenance. We take responsibility end-to-end and don't pass problems downstream.
              </p>
            </div>

            <div className="p-8 rounded-2xl rescaf-surface">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-[#1B1F3B]" />
                <h3 className="text-2xl font-semibold">We're globally open, and proudly rooted</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We hire and partner internationally. We welcome ideas from everywhere. At the same time, we build with cultural intelligence and real-world context—especially for regions and communities that have historically been overlooked by mainstream tech.
              </p>
            </div>

            <div className="p-8 rounded-2xl rescaf-surface">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-[#1B1F3B]" />
                <h3 className="text-2xl font-semibold">Excellence is the baseline</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We value speed, but never at the expense of integrity. We aim for world-class standards in engineering, design, operations, and customer experience.
              </p>
            </div>

            <div className="p-8 rounded-2xl rescaf-surface">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-8 w-8 text-[#1B1F3B]" />
                <h3 className="text-2xl font-semibold">We learn out loud</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Teaching is part of the job. We mentor, document, and share knowledge across roles, teams, and countries—because shared knowledge compounds.
              </p>
            </div>

            <div className="p-8 rounded-2xl rescaf-surface">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-8 w-8 text-[#1B1F3B]" />
                <h3 className="text-2xl font-semibold">We think long-term</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We plan in years, not just weeks. We build systems meant to last—products people trust and infrastructure that stays reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 px-6 bg-gray-50 rescaf-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 rescaf-reveal">
            How we work
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl rescaf-surface">
              <div className="flex items-start gap-4">
                <FileText className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">We default to clarity</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1B1F3B] mt-1">•</span>
                      <span>We write things down: specs, decisions, learnings, and expectations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1B1F3B] mt-1">•</span>
                      <span>We prefer clear communication over constant meetings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1B1F3B] mt-1">•</span>
                      <span>We keep plans visible and measurable.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl rescaf-surface">
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Small teams, high trust</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1B1F3B] mt-1">•</span>
                      <span>Teams move fast with autonomy.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1B1F3B] mt-1">•</span>
                      <span>Accountability is real: we deliver, we follow through, we fix what we break.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl rescaf-surface">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Feedback is direct and respectful</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1B1F3B] mt-1">•</span>
                      <span>We challenge ideas, not people.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1B1F3B] mt-1">•</span>
                      <span>We give feedback early, clearly, and with the goal of improvement—not ego.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl rescaf-surface">
              <div className="flex items-start gap-4">
                <BarChart3 className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">We measure outcomes</h3>
                  <p className="text-gray-700 mb-3">We don't build for hype. We build for results:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1B1F3B] mt-1">•</span>
                      <span>user progress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1B1F3B] mt-1">•</span>
                      <span>reliability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1B1F3B] mt-1">•</span>
                      <span>security and trust</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1B1F3B] mt-1">•</span>
                      <span>measurable impact</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl rescaf-surface">
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Trust is a feature</h3>
                  <p className="text-gray-700">
                    Privacy, safety, and security are not afterthoughts. If people can't trust it, it's not finished.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How decisions get made */}
      <section className="py-20 px-6 bg-white rescaf-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6 rescaf-reveal">
            How decisions get made
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            At rescaf, decisions should be:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Principle-led</h3>
                <p className="text-gray-600">Aligned with our values</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Evidence-driven</h3>
                <p className="text-gray-600">Data and real-world feedback</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Reversible when possible</h3>
                <p className="text-gray-600">Move fast on decisions that can be undone</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Careful when necessary</h3>
                <p className="text-gray-600">Slow down on high-risk choices—security, safety, reliability</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 italic">
            We write down major decisions so everyone understands the "why," not just the "what."
          </p>
        </div>
      </section>

      {/* What we look for */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1B1F3B]/5 to-white rescaf-divider rescaf-motif">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6 rescaf-reveal">
            What we look for
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            We hire globally and we care more about ability and character than pedigree.
          </p>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Signals we value</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Builders with judgment:</span>
                  <span className="text-gray-700"> you can move fast and make smart trade-offs.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Low ego, high standards:</span>
                  <span className="text-gray-700"> confident, humble, and coachable.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Strong communication:</span>
                  <span className="text-gray-700"> you can explain your thinking clearly (especially in writing).</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Ownership mindset:</span>
                  <span className="text-gray-700"> you don't wait to be told; you take responsibility.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Context-aware thinking:</span>
                  <span className="text-gray-700"> you design for real constraints and real people.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Mission alignment:</span>
                  <span className="text-gray-700"> you care about expanding opportunity and building trustworthy systems.</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">What we don't value</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Blame culture</span>
              </div>

              <div className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Gatekeeping knowledge</span>
              </div>

              <div className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Politics over progress</span>
              </div>

              <div className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Hype-first building</span>
              </div>

              <div className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">"Move fast" as an excuse for sloppy work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we grow people */}
      <section className="py-20 px-6 bg-white rescaf-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6 rescaf-reveal">
            How we grow people
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            We invest in long-term excellence:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3 p-6 rounded-2xl rescaf-surface">
              <TrendingUp className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Mentorship and peer coaching</h3>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-2xl rescaf-surface">
              <BookOpen className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Documentation and internal learning sessions</h3>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-2xl rescaf-surface">
              <Target className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Room to lead projects and own outcomes</h3>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-2xl rescaf-surface">
              <MessageSquare className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Feedback that helps you improve fast</h3>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg italic">
            At rescaf, growth isn't a perk—it's part of the system.
          </p>
        </div>
      </section>

      {/* Working globally */}
      <section className="py-20 px-6 bg-gray-50 rescaf-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6 rescaf-reveal">
            Working globally
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            We're built for international collaboration.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-6 rounded-2xl rescaf-surface">
              <Globe className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                We respect time zones and use async communication where possible.
              </p>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-2xl rescaf-surface">
              <FileText className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                We document decisions so everyone can stay aligned.
              </p>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-2xl rescaf-surface">
              <Shield className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                We design workflows that work across countries and cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white rescaf-divider">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 rescaf-reveal">
            Culture FAQ
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-start gap-3 mb-3">
                <HelpCircle className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Do you work remote?</h3>
              </div>
              <p className="text-gray-700 ml-9">
                We support distributed work and design for async collaboration. Team setups may vary by role and project.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-start gap-3 mb-3">
                <HelpCircle className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">What matters most in performance?</h3>
              </div>
              <p className="text-gray-700 ml-9">
                Outcomes, reliability, quality, and how you strengthen the team—measured over time.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-start gap-3 mb-3">
                <HelpCircle className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">How do you handle mistakes?</h3>
              </div>
              <p className="text-gray-700 ml-9">
                We fix the system, not the person. We do blameless reviews, learn quickly, and improve the process.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-start gap-3 mb-3">
                <HelpCircle className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">What's the pace like?</h3>
              </div>
              <p className="text-gray-700 ml-9">
                High focus, high standards. We ship steadily and avoid chaos.
              </p>
            </div>

            <div className="pb-6">
              <div className="flex items-start gap-3 mb-3">
                <HelpCircle className="h-6 w-6 text-[#1B1F3B] mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Do you hire internationally?</h3>
              </div>
              <p className="text-gray-700 ml-9">
                Yes. We build globally and welcome talent and partners from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join us CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1B1F3B]/5 to-white rescaf-motif">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 rescaf-reveal">
            Join us
          </h2>
          
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            If you want to build technology that creates real progress—and you care about excellence, ownership, and fairness—we'd love to hear from you.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#1B1F3B] hover:bg-[#2E3A6A] text-white px-8 py-6 text-lg"
            >
              View open roles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-[#1B1F3B] text-[#1B1F3B] hover:bg-[#1B1F3B]/5 px-8 py-6 text-lg"
            >
              Partner with rescaf
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
