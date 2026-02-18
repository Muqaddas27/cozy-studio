
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/442079460000?text=Hello, I would like to inquire about your interior design services.', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+442079460000';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:studio@cozyliving.com';
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      {/* Contact Options */}
      {isOpen && (
        <div className="mb-4 space-y-3 animate-in slide-in-from-bottom duration-300">
          <button
            onClick={handleEmail}
            className="flex items-center gap-3 bg-white text-charcoal px-6 py-4 rounded-full shadow-2xl hover:bg-sage hover:text-white transition-all hover:scale-105 group"
            aria-label="Email us"
          >
            <Mail size={20} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-wider">Email</span>
          </button>
          
          <button
            onClick={handleCall}
            className="flex items-center gap-3 bg-white text-charcoal px-6 py-4 rounded-full shadow-2xl hover:bg-sage hover:text-white transition-all hover:scale-105 group"
            aria-label="Call us"
          >
            <Phone size={20} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-wider">Call</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all hover:scale-105 group"
            aria-label="WhatsApp us"
          >
            <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-wider">WhatsApp</span>
          </button>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group ${
          isOpen 
            ? 'bg-charcoal text-white rotate-180' 
            : 'bg-sage text-white hover:scale-110'
        }`}
        aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
      >
        {isOpen ? (
          <X size={28} className="group-hover:rotate-90 transition-transform" />
        ) : (
          <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
