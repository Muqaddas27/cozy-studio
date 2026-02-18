
import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface TestimonialsProps {
  onNavigate?: (page: Page) => void;
}

const testimonials = [
  {
    name: "Alexander Vance",
    role: "The West End Loft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    quote: "Cozy Studio captured the essence of my personality and translated it into architectural form. The attention to detail was extraordinary, bordering on obsessive.",
    stars: 5,
    location: "London, UK"
  },
  {
    name: "Catherine Le",
    role: "Modern Homeowner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600",
    quote: "They balance luxury with comfort effortlessly. Our home feels like a curated gallery, yet it's entirely functional for our family of four.",
    stars: 5,
    location: "San Francisco, CA"
  },
  {
    name: "Mark Sterling",
    role: "CEO, Sterling Interiors",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
    quote: "Working with the team was a masterclass in collaboration. They respected the heritage of the estate while bringing a fresh, modern perspective.",
    stars: 5,
    location: "Paris, France"
  },
  {
    name: "Isabella Romano",
    role: "Townhouse Renovation",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    quote: "From concept to completion, every phase was handled with precision and care. They transformed our historic townhouse into a modern sanctuary while honoring its heritage.",
    stars: 5,
    location: "Milan, Italy"
  },
  {
    name: "James Mitchell",
    role: "Penthouse Suite Owner",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    quote: "The way they manipulate light and space is nothing short of magical. Our penthouse has become an architectural statement that exceeds every expectation.",
    stars: 5,
    location: "New York, NY"
  },
  {
    name: "Sophie Beaumont",
    role: "Art Collector & Patron",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    quote: "They understood that my home needed to be both a sanctuary and a gallery. The result is a space that showcases my collection while remaining warm and inviting.",
    stars: 5,
    location: "Geneva, Switzerland"
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ onNavigate }) => {
  return (
    <div className="animate-reveal bg-gradient-to-b from-[#FDFCFB] via-white to-[#FDFCFB] min-h-screen">
      {/* Editorial Header */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden scroll-reveal">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-sage/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-[11px] uppercase tracking-[0.8em] font-black text-sage mb-8 block">The Experience</span>
          <h1 className="text-7xl md:text-[130px] font-bold serif text-charcoal leading-[0.8] mb-12">
            Shared <br /> <span className="italic font-light opacity-80 text-sage">Narratives.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto italic border-x-2 border-sage/20 px-12">
            "Our success is measured not in projects, but in the enduring joy our clients find in their new sanctuaries."
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-6 scroll-reveal">
        <div className="max-w-7xl mx-auto space-y-32 stagger-children">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32 hover-lift`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-sage/20 z-0 group-hover:border-sage/40 transition-colors"></div>
                <div className="aspect-[4/5] overflow-hidden shadow-2xl relative z-10 shine-effect">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600'; }}
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 lg:-bottom-20 lg:-right-20 p-12 bg-gradient-to-br from-charcoal to-sage text-white hidden md:block shadow-2xl group-hover:scale-105 transition-transform z-20 spotlight">
                   <Star fill="#FDFCFB" color="#FDFCFB" size={24} className="mb-4 floating" />
                   <h4 className="text-2xl serif font-bold mb-1">{t.location}</h4>
                   <p className="text-[10px] uppercase tracking-widest text-champagne font-black">Verified Client</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-10">
                <Quote className="text-sage opacity-20" size={64} />
                <p className="text-3xl md:text-5xl serif italic font-light text-charcoal leading-tight">
                  "{t.quote}"
                </p>
                <div className="pt-8 border-t border-gray-100">
                  <h3 className="text-2xl font-bold text-charcoal serif uppercase tracking-widest">{t.name}</h3>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-gray-400 font-black mt-2">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-charcoal via-charcoal to-sage p-16 md:p-32 rounded-sm text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iIzVGNkY1MiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20\"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-9xl font-bold serif text-white mb-12">Ready to <span className="italic font-light text-champagne\">Begin?</span></h2>
              <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto mb-16 italic\">
                Every great interior starts with a single conversation. Let's discuss your vision for home.
              </p>
              <button 
                onClick={() => onNavigate?.(Page.CONTACT)}
                className="group inline-flex items-center gap-6 bg-white text-charcoal px-16 py-7 text-xs uppercase tracking-[0.4em] font-black hover:bg-sage hover:text-white transition-all transform hover:scale-105 shadow-2xl hover:shadow-[0_30px_80px_rgba(255,255,255,0.2)] ripple-effect magnetic-button"
              >
                Book Your Discovery Call <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
