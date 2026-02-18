
import React from 'react';
import { Page } from '../types';
import { Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleSocialClick = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    // You can replace these with actual social media URLs
    const urls: { [key: string]: string } = {
      instagram: 'https://instagram.com/cozyliving',
      twitter: 'https://twitter.com/cozyliving',
      linkedin: 'https://linkedin.com/company/cozyliving'
    };
    if (urls[platform]) {
      window.open(urls[platform], '_blank');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-charcoal to-charcoal/95 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sage to-transparent"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-sage/5 rounded-full blur-[150px]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold tracking-[0.2em] serif mb-8 text-champagne">COZY STUDIO</h2>
            <p className="text-gray-400 max-w-sm mb-10 leading-relaxed font-light">
              Designing sanctuaries that transcend time. We are a multidisciplinary studio committed to the highest standards of architectural integrity.
            </p>
            <div className="flex gap-6">
              <SocialIcon icon={<Instagram size={18} />} onClick={(e) => handleSocialClick(e, 'instagram')} />
              <SocialIcon icon={<Twitter size={18} />} onClick={(e) => handleSocialClick(e, 'twitter')} />
              <SocialIcon icon={<Linkedin size={18} />} onClick={(e) => handleSocialClick(e, 'linkedin')} />
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-sage mb-8">Explore</h4>
            <ul className="space-y-4">
              <li><FooterLink onClick={() => onNavigate(Page.PROJECTS)}>Portfolio</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate(Page.ABOUT)}>Our Philosophy</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate(Page.TESTIMONIALS)}>Client Voices</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate(Page.CONTACT)}>Contact Studio</FooterLink></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-sage mb-8">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6 font-light">Join our list for exclusive interior insights and collection previews.</p>
            {submitted ? (
              <div className="text-sage text-sm py-2 animate-in fade-in">✓ Thank you for subscribing!</div>
            ) : (
              <form onSubmit={handleNewsletterSubmit}>
                <div className="flex border-b-2 border-gray-700 pb-2 focus-within:border-sage transition-colors">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-transparent border-none outline-none w-full text-sm font-light py-2 placeholder:text-gray-600" 
                  />
                  <button type="submit" className="text-sage hover:text-white transition-colors hover:scale-110 transform magnetic-button">
                    <ArrowUp size={20} className="rotate-45" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        <div className="pt-12 border-t-2 border-gradient-to-r from-gray-800 via-sage/20 to-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold italic">
            © 2026 Cozy Living Studio. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            <button onClick={() => onNavigate(Page.PRIVACY)} className="hover:text-sage transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate(Page.TERMS)} className="hover:text-sage transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="text-gray-400 hover:text-sage transition-colors text-sm font-light tracking-wide block w-full text-left hover:translate-x-1 transform duration-300 underline-expand"
  >
    {children}
  </button>
);

const SocialIcon = ({ icon, onClick }: { icon: React.ReactNode; onClick: (e: React.MouseEvent) => void }) => (
  <a 
    href="#" 
    onClick={onClick}
    className="w-10 h-10 border-2 border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:border-sage hover:text-sage hover:bg-sage/10 transition-all duration-300 hover:scale-110 transform magnetic-button"
  >
    {icon}
  </a>
);

export default Footer;
