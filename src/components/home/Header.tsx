import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ContactModal } from '@/components/contact/ContactModal';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/ppsn-logo.png" alt="PPSN Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                <a href="#about" className="text-[#2C3E50] hover:text-[#0A1628] transition-colors duration-300 font-body text-sm font-medium">
                  About
                </a>
                <a href="#services" className="text-[#2C3E50] hover:text-[#0A1628] transition-colors duration-300 font-body text-sm font-medium">
                  Services
                </a>
                <a href="#why" className="text-[#2C3E50] hover:text-[#0A1628] transition-colors duration-300 font-body text-sm font-medium">
                  Why PPSN
                </a>
                <a href="#projects" className="text-[#2C3E50] hover:text-[#0A1628] transition-colors duration-300 font-body text-sm font-medium">
                  Projects
                </a>
              </>
            ) : (
              <>
                <Link to="/" className="text-[#2C3E50] hover:text-[#0A1628] transition-colors duration-300 font-body text-sm font-medium">
                  Home
                </Link>
                <Link to="/#about" className="text-[#2C3E50] hover:text-[#0A1628] transition-colors duration-300 font-body text-sm font-medium">
                  About
                </Link>
                <Link to="/#services" className="text-[#2C3E50] hover:text-[#0A1628] transition-colors duration-300 font-body text-sm font-medium">
                  Services
                </Link>
                <Link to="/#projects" className="text-[#2C3E50] hover:text-[#0A1628] transition-colors duration-300 font-body text-sm font-medium">
                  Projects
                </Link>
              </>
            )}
            <Link to="/contact" className="text-[#2C3E50] hover:text-[#0A1628] transition-colors duration-300 font-body text-sm font-medium">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-6 py-2.5 bg-[#0A1628] text-white rounded-full font-heading font-bold text-sm hover:bg-[#1C2833] hover:shadow-lg hover:shadow-[#0A1628]/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              Get Started
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#0A1628] hover:text-[#D4AF37] transition-colors p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {isHomePage ? (
                <>
                  {['About', 'Services', 'Why PPSN', 'Projects'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(' ', '-').replace('why-ppsn', 'why')}`}
                      className="text-[#2C3E50] hover:text-[#0A1628] hover:bg-gray-50 transition-colors font-body text-base font-medium py-3 px-3 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="text-[#2C3E50] hover:text-[#0A1628] hover:bg-gray-50 transition-colors font-body text-base font-medium py-3 px-3 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  {['About', 'Services', 'Projects'].map((item) => (
                    <Link
                      key={item}
                      to={`/#${item.toLowerCase()}`}
                      className="text-[#2C3E50] hover:text-[#0A1628] hover:bg-gray-50 transition-colors font-body text-base font-medium py-3 px-3 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </>
              )}
              <Link
                to="/contact"
                className="text-[#2C3E50] hover:text-[#0A1628] hover:bg-gray-50 transition-colors font-body text-base font-medium py-3 px-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="mt-3 w-full px-6 py-3 bg-[#0A1628] text-white rounded-full font-heading font-bold text-sm hover:bg-[#1C2833] transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
