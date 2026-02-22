import { Server, Database, Zap } from 'lucide-react';

export function FourRivers() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#66b3ff]/5 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mb-12">
          <div className="text-sm font-semibold text-[#66b3ff] mb-4 uppercase tracking-wide">
            Long-term vision
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Infrastructure that powers opportunity
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Software alone isn't enough. The next decade will be shaped by who can build reliable digital capacity.
            </p>
            <p>
              Over time, rescaf will build and operate data centers and IT infrastructure that support emerging technologies across Africa and around the world—making high-quality compute and digital services more accessible, dependable, and locally empowering.
            </p>
          </div>
        </div>

        {/* Visual representation */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="p-3 bg-[#66b3ff]/10 rounded-lg inline-block mb-4">
              <Server className="h-8 w-8 text-[#66b3ff]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Centers</h3>
            <p className="text-gray-600">
              Building physical infrastructure to support emerging tech demands
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="p-3 bg-[#66b3ff]/10 rounded-lg inline-block mb-4">
              <Database className="h-8 w-8 text-[#66b3ff]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Capacity</h3>
            <p className="text-gray-600">
              Making compute and services accessible where they're needed most
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="p-3 bg-[#66b3ff]/10 rounded-lg inline-block mb-4">
              <Zap className="h-8 w-8 text-[#66b3ff]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reliable & Secure</h3>
            <p className="text-gray-600">
              Enterprise-grade infrastructure built for dependability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}