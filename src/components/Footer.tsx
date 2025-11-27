import { Mail, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl text-[#66b3ff] mb-4">Rescaf</div>
            <p className="text-gray-400 mb-6">
              The Alkebulan Ecosystem for Global Progress. Building the foundational infrastructure for a future where Africa is an indispensable partner in global prosperity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded flex items-center justify-center hover:bg-[#66b3ff] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded flex items-center justify-center hover:bg-[#66b3ff] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded flex items-center justify-center hover:bg-[#66b3ff] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Ecosystem */}
          <div>
            <h4 className="text-white mb-4">Ecosystem</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#66b3ff] transition-colors">Pishon: Nexus</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#66b3ff] transition-colors">Gihon: Infrastructure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#66b3ff] transition-colors">Hiddekel: R&D Labs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#66b3ff] transition-colors">Euphrates: Ventures</a></li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#66b3ff] transition-colors">Havilah AI Platform</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#66b3ff] transition-colors">Nok Digital Identity</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#66b3ff] transition-colors">Planetary Health AI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#66b3ff] transition-colors">Quantum Security</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#66b3ff] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#66b3ff] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#66b3ff] transition-colors">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#66b3ff] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              © 2025 Rescaf. Building for the next seven generations.
            </div>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-[#66b3ff] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#66b3ff] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#66b3ff] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
