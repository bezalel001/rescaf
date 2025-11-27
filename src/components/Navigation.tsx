import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl text-[#66b3ff]">Rescaf</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Vision</a>
            <a href="#ecosystem" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Ecosystem</a>
            <a href="#values" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Values</a>
            <a href="#solutions" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Solutions</a>
            <a href="#nexus" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Nexus</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#66b3ff]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="#vision" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Vision</a>
              <a href="#ecosystem" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Ecosystem</a>
              <a href="#values" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Values</a>
              <a href="#solutions" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Solutions</a>
              <a href="#nexus" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Nexus</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}