import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import rescafLogo from '../rescaf-logo.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = window.location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#D9D9D9] border-b border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center bg-[#D9D9D9]">
              <img
                src={rescafLogo}
                alt="Rescaf logo"
                className="h-20 w-20 object-contain bg-[#D9D9D9] rounded-[22px]"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 68%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 68%, transparent 100%)',
                }}
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {isHome ? (
              <>
                <a href="#about" className="text-gray-700 hover:text-[#1B1F3B] transition-colors">About</a>
                <a href="#products" className="text-gray-700 hover:text-[#1B1F3B] transition-colors">Products</a>
                <a href="#vision" className="text-gray-700 hover:text-[#1B1F3B] transition-colors">Vision</a>
                <a href="#values" className="text-gray-700 hover:text-[#1B1F3B] transition-colors">Values</a>
                <a href="/culture" className="text-gray-700 hover:text-[#1B1F3B] transition-colors">Culture</a>
                <a href="#partner" className="text-gray-700 hover:text-[#1B1F3B] transition-colors">Partner</a>
              </>
            ) : (
              <>
                <a href="/" className="text-gray-700 hover:text-[#1B1F3B] transition-colors">Home</a>
                <a href="/culture" className="text-gray-700 hover:text-[#1B1F3B] transition-colors">Culture</a>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#1B1F3B]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {isHome ? (
                <>
                  <a href="#about" className="text-gray-700 hover:text-[#1B1F3B] transition-colors" onClick={() => setIsOpen(false)}>About</a>
                  <a href="#products" className="text-gray-700 hover:text-[#1B1F3B] transition-colors" onClick={() => setIsOpen(false)}>Products</a>
                  <a href="#vision" className="text-gray-700 hover:text-[#1B1F3B] transition-colors" onClick={() => setIsOpen(false)}>Vision</a>
                  <a href="#values" className="text-gray-700 hover:text-[#1B1F3B] transition-colors" onClick={() => setIsOpen(false)}>Values</a>
                  <a href="/culture" className="text-gray-700 hover:text-[#1B1F3B] transition-colors" onClick={() => setIsOpen(false)}>Culture</a>
                  <a href="#partner" className="text-gray-700 hover:text-[#1B1F3B] transition-colors" onClick={() => setIsOpen(false)}>Partner</a>
                </>
              ) : (
                <>
                  <a href="/" className="text-gray-700 hover:text-[#1B1F3B] transition-colors" onClick={() => setIsOpen(false)}>Home</a>
                  <a href="/culture" className="text-gray-700 hover:text-[#1B1F3B] transition-colors" onClick={() => setIsOpen(false)}>Culture</a>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
