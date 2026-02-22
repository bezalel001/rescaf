import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl text-[#66b3ff]">rescaf</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {isHome ? (
              <>
                <a href="#about" className="text-gray-700 hover:text-[#66b3ff] transition-colors">About</a>
                <a href="#products" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Products</a>
                <a href="#vision" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Vision</a>
                <a href="#values" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Values</a>
                <Link to="/culture" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Culture</Link>
                <a href="#partner" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Partner</a>
              </>
            ) : (
              <>
                <Link to="/" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Home</Link>
                <Link to="/culture" className="text-gray-700 hover:text-[#66b3ff] transition-colors">Culture</Link>
              </>
            )}
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
              {isHome ? (
                <>
                  <a href="#about" className="text-gray-700 hover:text-[#66b3ff] transition-colors" onClick={() => setIsOpen(false)}>About</a>
                  <a href="#products" className="text-gray-700 hover:text-[#66b3ff] transition-colors" onClick={() => setIsOpen(false)}>Products</a>
                  <a href="#vision" className="text-gray-700 hover:text-[#66b3ff] transition-colors" onClick={() => setIsOpen(false)}>Vision</a>
                  <a href="#values" className="text-gray-700 hover:text-[#66b3ff] transition-colors" onClick={() => setIsOpen(false)}>Values</a>
                  <Link to="/culture" className="text-gray-700 hover:text-[#66b3ff] transition-colors" onClick={() => setIsOpen(false)}>Culture</Link>
                  <a href="#partner" className="text-gray-700 hover:text-[#66b3ff] transition-colors" onClick={() => setIsOpen(false)}>Partner</a>
                </>
              ) : (
                <>
                  <Link to="/" className="text-gray-700 hover:text-[#66b3ff] transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
                  <Link to="/culture" className="text-gray-700 hover:text-[#66b3ff] transition-colors" onClick={() => setIsOpen(false)}>Culture</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}