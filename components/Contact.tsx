
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MoveRight, Plus, Minus } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="animate-reveal bg-gradient-to-b from-white via-champagne/20 to-white min-h-screen">
      {/* Hero Header */}
      <section className="pt-48 pb-32 px-6 relative overflow-hidden scroll-reveal">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-[11px] uppercase tracking-[0.8em] font-black text-sage mb-8 block">Inquiry</span>
          <h1 className="text-7xl md:text-[130px] font-bold serif text-charcoal leading-[0.8] mb-12">
            The <br /> <span className="italic font-light opacity-80 text-sage">Dialogue.</span>
          </h1>
          <p className="text-2xl text-gray-600 font-light max-w-2xl leading-relaxed italic mx-auto">
            "Every project begins with a conversation about how you wish to feel within your walls."
          </p>
        </div>
      </section>

      <section className="pb-32 px-6 scroll-reveal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Info Side */}
          <div className="lg:col-span-4 space-y-20">
            <div className="space-y-12">
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black mb-4">Email</p>
                <a href="mailto:studio@cozyliving.com" className="text-2xl font-bold text-charcoal serif hover:text-sage transition-colors">studio@cozyliving.com</a>
              </div>
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black mb-4">Phone</p>
                <p className="text-2xl font-bold text-charcoal serif hover:text-sage transition-colors">+44 (0) 20 7946 0000</p>
              </div>
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black mb-4">Studio</p>
                <p className="text-2xl font-bold text-charcoal serif">Chelsea Design Centre,<br />London, UK</p>
              </div>
            </div>

            <div className="aspect-square bg-sage/5 relative overflow-hidden group border-4 border-white shadow-2xl hover-lift shine-effect">
               <img 
                 src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=800" 
                 className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]" 
                 alt="Our studio"
                 onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800'; }}
               />
               <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                 <span className="text-white text-[10px] uppercase tracking-[0.5em] font-black bg-sage/90 px-8 py-4">Visit Us</span>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-20 bg-gradient-to-br from-[#FDFCFB] via-white to-[#FDFCFB] shadow-2xl animate-in zoom-in duration-500 border-4 border-sage/10">
                <div className="bg-sage/10 p-8 rounded-full mb-8">
                  <CheckCircle2 size={80} className="text-sage" />
                </div>
                <h2 className="text-5xl serif font-bold text-charcoal mb-6">Dialogue Started.</h2>
                <p className="text-gray-600 font-light text-xl leading-relaxed">
                  Our creative team has received your inquiry. <br /> Expect a thoughtful response within 48 business hours.
                </p>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-[#FDFCFB] via-white to-[#F9F7F5] p-12 md:p-24 shadow-2xl relative border-2 border-sage/10 glass-effect">
                <form onSubmit={handleSubmit} className="space-y-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Field label="Full Name" placeholder="Arthur Vance" required />
                    <Field label="Email Address" placeholder="arthur@example.com" type="email" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Field label="Project Location" placeholder="London, UK" required />
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">Project Type</label>
                      <select className="w-full bg-transparent py-4 border-b-2 border-gray-200 focus:border-sage outline-none text-xl font-light text-charcoal appearance-none cursor-pointer">
                        <option>Full Interior Design</option>
                        <option>Bespoke Renovation</option>
                        <option>Furniture Curation</option>
                        <option>Commercial Space</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">Tell us about your sanctuary</label>
                    <textarea 
                      rows={4} 
                      className="w-full bg-transparent py-4 border-b-2 border-gray-200 focus:border-sage outline-none text-xl font-light text-charcoal resize-none" 
                      placeholder="Share your vision, your constraints, and your dreams..."
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="group w-full bg-gradient-to-r from-charcoal to-charcoal hover:from-sage hover:to-sage text-white py-10 text-xs uppercase tracking-[0.6em] font-black transition-all shadow-2xl flex items-center justify-center gap-6 hover:shadow-[0_20px_60px_rgba(95,111,82,0.3)] ripple-effect magnetic-button"
                  >
                    Submit Inquiry <MoveRight size={20} className="group-hover:translate-x-4 transition-transform duration-500" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-32 px-6 scroll-reveal">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[11px] uppercase tracking-[0.8em] font-black text-sage mb-8 block">Knowledge Base</span>
            <h2 className="text-6xl md:text-7xl font-bold serif text-charcoal mb-8">
              Frequently <span className="italic font-light text-sage">Asked</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Answers to common inquiries about our process, timeline, and services.
            </p>
          </div>

          <div className="space-y-6 stagger-children">
            <FAQItem 
              question="What is your design process and typical timeline?" 
              answer="Our design process consists of five phases: Initial Consultation (1 week), Conceptual Design (2-3 weeks), Design Development (3-4 weeks), Implementation & Procurement (6-12 weeks), and Installation & Styling (2-3 weeks). Most residential projects take 4-6 months from start to completion, though this varies based on scope and complexity."
            />
            <FAQItem 
              question="How do you structure your fees?" 
              answer="We offer flexible pricing models to suit different project needs. Our standard approach is a design fee based on the scope of work, plus a transparent procurement fee for furniture and materials. For larger projects, we can work on a fixed-fee basis. We provide detailed cost breakdowns before any commitment, ensuring complete transparency."
            />
            <FAQItem 
              question="Do you work on projects outside of London?" 
              answer="Absolutely. While our studio is based in London, we've completed projects across the UK, Europe, and internationally. We're experienced in managing remote projects through detailed documentation, virtual consultations, and trusted local partners for installations."
            />
            <FAQItem 
              question="Can you work within a specific budget?" 
              answer="Yes, we specialize in creating extraordinary spaces across various budgets. During our initial consultation, we'll discuss your budget openly and craft a design strategy that maximizes impact while respecting your financial parameters. We believe excellent design is about intelligent choices, not just expenditure."
            />
            <FAQItem 
              question="What makes Cozy Living Studio different from other designers?" 
              answer="Our philosophy centers on 'luxurious tranquility'—spaces that are both visually stunning and deeply comfortable. We blend minimalist aesthetics with warm, organic elements, focusing on natural materials, craftsmanship, and timeless design. Each project receives our full attention, and we maintain a limited client roster to ensure exceptional service."
            />
            <FAQItem 
              question="Do you offer consultancy services for smaller projects?" 
              answer="Yes, we offer hourly consultancy sessions for clients who need expert guidance on specific design challenges—whether it's color selection, furniture placement, or renovation advice. These sessions can be conducted in-person at your property or virtually via video call."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-gray-100 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-10 flex items-start justify-between gap-8 text-left group hover:bg-champagne/30 px-8 transition-colors"
      >
        <h3 className="text-2xl font-bold serif text-charcoal group-hover:text-sage transition-colors">{question}</h3>
        <div className="text-sage shrink-0 mt-2 group-hover:scale-110 transition-transform">
          {isOpen ? <Minus size={28} /> : <Plus size={28} />}
        </div>
      </button>
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 pb-10' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 font-light text-lg leading-relaxed px-8">{answer}</p>
      </div>
    </div>
  );
};

const Field = ({ label, placeholder, type = "text", required = false }: { label: string; placeholder: string; type?: string; required?: boolean }) => (
  <div className="space-y-4">
    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">{label}</label>
    <input 
      required={required} 
      type={type} 
      placeholder={placeholder}
      className="w-full bg-transparent py-4 border-b-2 border-gray-200 focus:border-sage outline-none text-xl font-light text-charcoal transition-colors placeholder:opacity-30" 
    />
  </div>
);

export default Contact;
