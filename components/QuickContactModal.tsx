
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuickContactModal: React.FC<QuickContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-lg w-full rounded-sm shadow-2xl animate-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-charcoal to-sage p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
          >
            <X size={20} />
          </button>
          <h2 className="text-3xl font-bold serif text-white mb-2">Quick Inquiry</h2>
          <p className="text-white/80 text-sm font-light">We'll respond within 24 hours</p>
        </div>

        {/* Body */}
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="text-sage" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Message Sent!</h3>
              <p className="text-gray-600">Thank you for contacting us. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-black mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-sage outline-none transition-colors text-charcoal"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-sage outline-none transition-colors text-charcoal"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-black mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-sage outline-none transition-colors text-charcoal"
                  placeholder="+44 20 1234 5678"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-black mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-sage outline-none transition-colors resize-none text-charcoal"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-charcoal to-sage text-white py-4 text-xs uppercase tracking-wider font-black hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 group"
              >
                Send Inquiry
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickContactModal;
