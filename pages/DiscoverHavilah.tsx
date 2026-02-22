import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle, Target, Zap, Trophy } from 'lucide-react';

export default function DiscoverHavilah() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F8F9FB] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
            Havilah
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-6">
            Learn any skill by doing the work — and leave with proof.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Havilah is a learning platform that turns your goal into a step-by-step plan, short daily practice, real projects, and a shareable proof-of-skill profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1B1F3B] hover:bg-[#2E3A6A] text-white">
              Start with your goal
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              See how proof works
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Most people don&apos;t struggle because they&apos;re not capable—they struggle because learning is often passive. Havilah is built around the loop that creates real ability:
          </p>
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-2xl font-semibold text-gray-900">
              Do → Get feedback → Retry → Ship proof
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-900">
            What you can use Havilah for
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Improve in school subjects (math, science, writing, languages)',
              'Prepare for exams and assessments',
              'Build job-ready skills (coding, communication, analysis)',
              'Learn a skill systematically instead of randomly'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-lg">
                <CheckCircle className="w-6 h-6 text-[#1B1F3B] flex-shrink-0 mt-1" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900">
            How Havilah works
          </h2>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#1B1F3B] text-white flex items-center justify-center text-xl font-semibold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-gray-900">Choose a goal</h3>
                <p className="text-gray-700">
                  Tell Havilah what you want to achieve and how much time you have each day.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#1B1F3B] text-white flex items-center justify-center text-xl font-semibold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-gray-900">Get a personalized learning map</h3>
                <p className="text-gray-700">
                  Havilah shows you what to learn first, what comes next, and what &quot;mastery&quot; looks like—so you always know the next step.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#1B1F3B] text-white flex items-center justify-center text-xl font-semibold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-gray-900">Do short daily sessions (10–45 minutes)</h3>
                <p className="text-gray-700 mb-4">
                  Instead of just watching lessons, you practice:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B1F3B]"></span>
                    solving problems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B1F3B]"></span>
                    writing and revising
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B1F3B]"></span>
                    speaking and explaining
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B1F3B]"></span>
                    building small projects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B1F3B]"></span>
                    answering real scenarios
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#1B1F3B] text-white flex items-center justify-center text-xl font-semibold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-gray-900">Get clear feedback and retry immediately</h3>
                <p className="text-gray-700">
                  Havilah shows you what to fix, how to fix it, and makes you retry—so improvement happens fast.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#1B1F3B] text-white flex items-center justify-center text-xl font-semibold">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-gray-900">Build real projects (&quot;Proof Tasks&quot;)</h3>
                <p className="text-gray-700">
                  You complete structured projects that demonstrate your ability—like essays, presentations, case analyses, or builds.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#1B1F3B] text-white flex items-center justify-center text-xl font-semibold">
                  6
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-gray-900">Share proof of skill</h3>
                <p className="text-gray-700 mb-4">
                  Havilah creates a Proof Profile you control. It shows:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B1F3B]"></span>
                    your projects and outputs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B1F3B]"></span>
                    rubric-based evaluations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B1F3B]"></span>
                    progress over time
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B1F3B]"></span>
                    evidence people can actually review
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium">
                  Not just grades. Not just &quot;I took a course.&quot; Real proof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Havilah Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900">
            Why customers choose Havilah
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                text: 'It removes confusion: you always know what to do next'
              },
              {
                icon: Zap,
                text: 'It builds real skill: practice + feedback, not passive content'
              },
              {
                icon: CheckCircle,
                text: 'It\'s measurable: progress is tracked and visible'
              },
              {
                icon: Trophy,
                text: 'It\'s shareable: your work becomes proof'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg">
                <item.icon className="w-8 h-8 text-[#1B1F3B] flex-shrink-0" />
                <p className="text-gray-700 text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            Start with a goal. Leave with proof.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1B1F3B] hover:bg-[#2E3A6A] text-white">
              Start learning
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              Contact / Partner
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
