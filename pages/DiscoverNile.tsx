import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle, FileCheck, Shield, Search, AlertCircle } from 'lucide-react';

export default function DiscoverNile() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F8F9FB] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
            Nile
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-6">
            AI-assisted GDPR privacy notice checker
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Nile helps organizations, DPOs, and consultants review privacy notices against GDPR transparency duties (Articles 12–14). After uploading a privacy notice, Nile maps each requirement to the most relevant sections of the document and provides a clear result (covered / partially covered / missing / not applicable / needs review).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1B1F3B] hover:bg-[#2E3A6A] text-white">
              Start checking
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              See how it works
            </Button>
          </div>
        </div>
      </section>

      {/* Key Feature Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Every finding includes <span className="font-semibold">evidence citations</span> to the exact passages used—making it easy to verify, fix gaps, and export a structured report for documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Who Uses Nile Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-900">
            Who uses Nile
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Data Protection Officers (DPOs) conducting compliance audits',
              'Privacy consultants reviewing client documentation',
              'Organizations preparing for GDPR assessments',
              'Legal teams validating privacy notice completeness'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-lg">
                <CheckCircle className="w-6 h-6 text-[#1B1F3B] flex-shrink-0 mt-1" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Nile Works Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900">
            How Nile works
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
                <h3 className="text-2xl mb-3 text-gray-900">Upload your privacy notice</h3>
                <p className="text-gray-700">
                  Simply upload your organization&apos;s privacy notice or policy document to begin the analysis.
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
                <h3 className="text-2xl mb-3 text-gray-900">Nile maps requirements to your document</h3>
                <p className="text-gray-700">
                  Nile automatically analyzes your document against GDPR Articles 12–14 transparency requirements, identifying which sections address each requirement.
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
                <h3 className="text-2xl mb-3 text-gray-900">Get clear results with evidence</h3>
                <p className="text-gray-700 mb-4">
                  For each GDPR requirement, Nile provides a clear status:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span><strong>Covered</strong> — Requirement is adequately addressed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                    <span><strong>Partially covered</strong> — Some elements present but incomplete</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <span><strong>Missing</strong> — Requirement not found in the document</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span><strong>Not applicable</strong> — Requirement doesn&apos;t apply to your case</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B1F3B]"></span>
                    <span><strong>Needs review</strong> — Manual verification recommended</span>
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
                <h3 className="text-2xl mb-3 text-gray-900">Review evidence citations</h3>
                <p className="text-gray-700">
                  Every finding links to the exact passages from your document that were analyzed, making it easy to verify the AI&apos;s assessment and understand the reasoning.
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
                <h3 className="text-2xl mb-3 text-gray-900">Fix gaps and improve compliance</h3>
                <p className="text-gray-700">
                  Use the clear findings to identify what&apos;s missing or incomplete, then update your privacy notice accordingly.
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
                <h3 className="text-2xl mb-3 text-gray-900">Export structured reports</h3>
                <p className="text-gray-700">
                  Generate comprehensive reports for your records, audits, or client deliverables with all findings and evidence documented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nile Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900">
            Why organizations choose Nile
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Search,
                text: 'Faster requirement discovery and checks'
              },
              {
                icon: AlertCircle,
                text: 'Clear gaps and action steps'
              },
              {
                icon: FileCheck,
                text: 'Evidence-first reporting for teams'
              },
              {
                icon: Shield,
                text: 'Reduces compliance risk and saves time'
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

      {/* GDPR Focus Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            Built for GDPR transparency requirements
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Nile focuses specifically on GDPR Articles 12–14, which establish the transparency obligations that organizations must meet when collecting and processing personal data.
          </p>
          <div className="bg-[#F8F9FB] border border-[#1B1F3B] rounded-lg p-6">
            <p className="text-gray-700">
              <strong>Article 12:</strong> Transparent information, communication and modalities for exercising data subject rights
            </p>
            <p className="text-gray-700 mt-3">
              <strong>Article 13:</strong> Information to be provided where personal data are collected from the data subject
            </p>
            <p className="text-gray-700 mt-3">
              <strong>Article 14:</strong> Information to be provided where personal data have not been obtained from the data subject
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            Check your compliance. Ship with confidence.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1B1F3B] hover:bg-[#2E3A6A] text-white">
              Start checking
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
