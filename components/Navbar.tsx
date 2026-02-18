
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Page, NavItem } from '../types';
import QuickContactModal from './QuickContactModal';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', value: Page.HOME },
    { label: 'Studio', value: Page.ABOUT },
    { label: 'Projects', value: Page.PROJECTS },
    { label: 'Reviews', value: Page.TESTIMONIALS },
    { label: 'Connect', value: Page.CONTACT },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const isHome = currentPage === Page.HOME;
  
  // High-Contrast Styles
  const navbarClasses = isScrolled 
    ? 'bg-white/95 backdrop-blur-xl text-charcoal py-4 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-b-2 border-sage/20 glass-effect-dark' 
    : isHome 
      ? 'bg-transparent text-white py-10' 
      : 'bg-white text-charcoal py-8 border-b-2 border-gray-100';

  const btnClasses = isScrolled || !isHome
    ? 'bg-gradient-to-r from-charcoal to-charcoal hover:from-sage hover:to-sage text-white ripple-effect magnetic-button hover-glow'
    : 'bg-white text-charcoal hover:bg-sage hover:text-white ripple-effect magnetic-button';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${navbarClasses}`}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => handleNavClick(Page.HOME)}
        >
          <span className="text-2xl font-bold tracking-[0.5em] serif select-none group-hover:text-sage transition-colors">
            COZY STUDIO
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-16">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`text-[10px] uppercase tracking-[0.4em] font-black transition-all relative group py-2 underline-expand ${
                currentPage === item.value 
                  ? 'text-sage opacity-100' 
                  : 'opacity-60 hover:opacity-100 hover:text-sage'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className={`px-12 py-4 text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 transform ${btnClasses}`}
          >
            Inquiry
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-3"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-charcoal via-charcoal to-sage z-[110] flex flex-col items-center justify-center space-y-12 text-white animate-in slide-in-from-top duration-500">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-10 right-10 hover:text-sage transition-colors"><X size={44}/></button>
          <div className="text-champagne text-[10px] uppercase tracking-[0.8em] font-bold mb-4 opacity-70">Menu</div>
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`text-6xl font-bold serif transition-all ${
                currentPage === item.value ? 'text-sage italic scale-110' : 'hover:text-sage'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick(Page.CONTACT)}
            className="mt-16 bg-sage px-16 py-6 text-sm uppercase tracking-[0.5em] font-black hover:bg-white hover:text-charcoal transition-all shadow-2xl hover:scale-105 transform"
          >
            Start Project
          </button>
        </div>
      )}
      <QuickContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
