
import React, { useState } from 'react';
import { ArrowRight, MoveRight, Layers, PenTool, Sparkles, Award, TrendingUp, Users, Clock } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
  onProjectSelect?: (slug: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onProjectSelect }) => {
  return (
    <div className="animate-reveal">
      {/* Hero: The Statement */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&q=90&w=2400" 
            className="w-full h-full object-cover brightness-[0.4] scale-100 animate-slow-zoom"
            alt="Luxury Interior"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=2400'; }}
          />
        </div>
        <div className="absolute inset-0 z-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-champagne/5 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-6xl">
          <div className="flex justify-center items-center gap-6 mb-10">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-sage to-transparent"></div>
            <span className="text-[11px] md:text-[13px] uppercase tracking-[1em] font-black text-sage animate-pulse">Established 2014</span>
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-sage to-transparent"></div>
          </div>
          <h1 className="text-7xl md:text-[150px] font-bold serif leading-[0.8] mb-14 tracking-tight drop-shadow-2xl">
            Curating <br /> <span className="italic font-light opacity-90 text-champagne">Elegance.</span>
          </h1>
          <p className="text-xl md:text-3xl font-light mb-20 max-w-3xl mx-auto opacity-80 leading-relaxed italic serif px-12 border-x-2 border-white/20">
            "Design is the silent narrator of your life's greatest moments."
          </p>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <button 
              onClick={() => onNavigate(Page.CONTACT)}
              className="bg-sage text-white px-16 py-7 text-[11px] uppercase tracking-[0.5em] font-black hover:bg-white hover:text-charcoal transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_70px_rgba(95,111,82,0.4)] hover:scale-105 min-w-[300px] ripple-effect magnetic-button"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => onNavigate(Page.ABOUT)}
              className="group flex items-center gap-6 text-white text-[11px] uppercase tracking-[0.5em] font-black hover:text-sage transition-all duration-500 border-b-2 border-transparent hover:border-sage pb-2 underline-expand"
            >
              Our Studio <MoveRight className="group-hover:translate-x-4 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Signature Materials Section */}
      <section className="py-48 bg-gradient-to-b from-white via-champagne/30 to-white overflow-hidden scroll-reveal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative group">
              <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-sage/20 z-0"></div>
              <div className="aspect-[4/5] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] relative z-10 fade-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[3000ms]" 
                  alt="Materials"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1200'; }}
                />
              </div>
              <div className="absolute -bottom-16 -right-16 bg-charcoal p-16 text-white hidden md:block shadow-2xl group-hover:bg-sage transition-colors duration-700">
                <h4 className="text-5xl serif italic mb-6">Tactile Beauty.</h4>
                <p className="text-gray-300 text-lg font-light leading-relaxed">We curate materials that <br /> whisper, not shout.</p>
              </div>
            </div>
            <div className="space-y-12">
              <span className="text-xs uppercase tracking-[0.6em] font-bold text-sage mb-8 block">The Foundation</span>
              <h2 className="text-6xl md:text-8xl font-bold serif text-charcoal mb-12 leading-[0.9]">The Signature <br /><span className="italic font-light opacity-60">Palette.</span></h2>
              <div className="space-y-16">
                <MaterialItem title="Italian Statuario Marble" desc="Timeless, architectural, and enduring. The core of our monolithic designs." />
                <MaterialItem title="European Smoked Oak" desc="Deep textures and warm undertones, hand-finished to survive generations." />
                <MaterialItem title="Raw Silk & Belgian Linen" desc="Softening the brutalist edges of modern life with natural luxury." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology: Large Scale Cards */}
      <section className="py-48 bg-gradient-to-br from-[#F9F7F5] via-white to-[#F9F7F5] px-6 relative overflow-hidden scroll-reveal">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/5 rounded-full blur-[150px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-9xl font-bold serif text-charcoal mb-8">The Process.</h2>
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-sage to-transparent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <MethodCard 
              num="01" 
              icon={<PenTool size={40} />} 
              title="Dialog" 
              text="We begin with a silence, listening to the needs and rhythms of your daily life." 
            />
            <MethodCard 
              num="02" 
              icon={<Layers size={40} />} 
              title="Curation" 
              text="Selection of unique artifacts and textiles to build a cohesive narrative." 
            />
            <MethodCard 
              num="03" 
              icon={<Sparkles size={40} />} 
              title="Reveal" 
              text="The culmination of months of precision — your sanctuary is born." 
            />
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-xs uppercase tracking-[0.6em] font-bold text-sage mb-6 block">Selected Works</span>
            <h2 className="text-6xl md:text-8xl font-bold serif text-charcoal mb-8">Portfolio.</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              A curated selection of our most transformative residential projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=90&w=800"
              title="Chelsea Penthouse"
              location="London, UK"
              category="Residential"
              slug="chelsea-penthouse"
              onClick={() => onProjectSelect?.('chelsea-penthouse')}
            />
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=90&w=800"
              title="Minimalist Villa"
              location="Milan, Italy"
              category="Luxury Home"
              slug="minimalist-villa"
              onClick={() => onProjectSelect?.('minimalist-villa')}
            />
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=90&w=800"
              title="Modern Townhouse"
              location="Paris, France"
              category="Urban Living"
              slug="modern-townhouse"
              onClick={() => onProjectSelect?.('modern-townhouse')}
            />
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=800"
              title="Lakeside Retreat"
              location="Geneva, Switzerland"
              category="Vacation Home"
              slug="lakeside-retreat"
              onClick={() => onProjectSelect?.('lakeside-retreat')}
            />
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=90&w=800"
              title="Art Collector's Loft"
              location="New York, NY"
              category="Contemporary"
              slug="art-collectors-loft"
              onClick={() => onProjectSelect?.('art-collectors-loft')}
            />
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=90&w=800"
              title="Heritage Estate"
              location="Cotswolds, UK"
              category="Restoration"
              slug="heritage-estate"
              onClick={() => onProjectSelect?.('heritage-estate')}
            />
          </div>

          <div className="text-center mt-20">
            <button 
              onClick={() => onNavigate(Page.PROJECTS)}
              className="inline-flex items-center gap-4 px-12 py-6 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-500 text-xs uppercase tracking-[0.5em] font-black group"
            >
              View All Projects <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 bg-gradient-to-br from-charcoal via-charcoal to-sage text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI0ZERkNGQiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center">
            <StatCard 
              icon={<Users size={40} />}
              number="120+"
              label="Completed Projects"
            />
            <StatCard 
              icon={<Award size={40} />}
              number="24"
              label="Design Awards"
            />
            <StatCard 
              icon={<Clock size={40} />}
              number="12"
              label="Years Experience"
            />
            <StatCard 
              icon={<TrendingUp size={40} />}
              number="98%"
              label="Client Satisfaction"
            />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.6em] font-bold text-gray-400 mb-6 block">Trusted By</span>
            <h3 className="text-3xl font-bold serif text-charcoal">Featured In</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-40">
            <LogoPlaceholder name="Architectural Digest" />
            <LogoPlaceholder name="Wallpaper*" />
            <LogoPlaceholder name="Elle Decor" />
            <LogoPlaceholder name="Dezeen" />
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-40 px-6 bg-gradient-to-br from-champagne/30 via-white to-champagne/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sage/5 rounded-full blur-[200px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-xs uppercase tracking-[0.6em] font-bold text-sage mb-6 block">Recognition</span>
            <h2 className="text-6xl md:text-8xl font-bold serif text-charcoal mb-8">Awards & <span className="italic font-light text-sage">Accolades</span></h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Our commitment to excellence has been recognized by leading design institutions worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AwardCard 
              year="2024"
              title="Best Residential Interior"
              organization="International Design Awards"
              project="Chelsea Penthouse"
            />
            <AwardCard 
              year="2023"
              title="Designer of the Year"
              organization="Elle Decoration UK"
              project="Studio Recognition"
            />
            <AwardCard 
              year="2023"
              title="Excellence in Restoration"
              organization="Heritage Design Council"
              project="Heritage Estate"
            />
            <AwardCard 
              year="2022"
              title="Luxury Interior - Gold"
              organization="European Property Awards"
              project="Lakeside Retreat"
            />
            <AwardCard 
              year="2022"
              title="Innovative Space Design"
              organization="Dezeen Awards"
              project="Modern Townhouse"
            />
            <AwardCard 
              year="2021"
              title="Best Use of Materials"
              organization="Architectural Digest"
              project="Minimalist Villa"
            />
          </div>
        </div>
      </section>

      {/* Featured Project: High Contrast */}
      <section className="relative h-[90vh] flex items-center group cursor-pointer overflow-hidden" onClick={() => onNavigate(Page.TESTIMONIALS)}>
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=90&w=2400" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110 brightness-[0.5]" 
          alt="Featured Project"
          onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1616486341351-702524444534?auto=format&fit=crop&q=90&w=2400'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent group-hover:from-charcoal/90 transition-all duration-700"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-white">
          <span className="text-[11px] uppercase tracking-[1em] font-bold text-sage mb-10 block animate-pulse">Selected Project</span>
          <h2 className="text-7xl md:text-[150px] font-bold serif mb-14 leading-[0.8]">The Glass <br /> <span className="italic font-light opacity-90 text-champagne">Penthouse.</span></h2>
          <button className="flex items-center gap-6 text-xs uppercase tracking-[0.6em] font-black border-b-2 border-white/30 pb-4 hover:text-sage hover:border-sage transition-all duration-500 hover:gap-8">
            View Story <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

const MaterialItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="group border-l-2 border-gray-100 pl-10 hover:border-sage transition-all duration-700">
    <h4 className="text-3xl font-bold text-charcoal mb-4 serif uppercase tracking-widest">{title}</h4>
    <p className="text-gray-500 font-light text-xl leading-relaxed">{desc}</p>
  </div>
);

const MethodCard = ({ num, icon, title, text }: { num: string; icon: React.ReactNode; title: string; text: string }) => (
  <div className="bg-white p-16 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_rgba(95,111,82,0.15)] transition-all duration-700 relative overflow-hidden group hover:-translate-y-2 hover-lift spotlight tilt-card">
    <div className="absolute top-0 left-0 w-2 h-0 bg-gradient-to-b from-sage to-charcoal group-hover:h-full transition-all duration-1000"></div>
    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-sage/20 to-transparent"></div>
    <span className="text-[180px] font-bold serif text-gray-50 absolute -right-12 -bottom-16 group-hover:text-sage/10 transition-colors duration-1000 select-none">{num}</span>
    <div className="text-sage mb-12 relative z-10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">{icon}</div>
    <h3 className="text-3xl font-bold text-charcoal mb-6 relative z-10 serif uppercase tracking-[0.2em] group-hover:text-sage transition-colors">{title}</h3>
    <p className="text-gray-500 font-light leading-relaxed relative z-10 text-xl">{text}</p>
  </div>
);

const PortfolioCard = ({ image, title, location, category, slug, onClick }: { image: string; title: string; location: string; category: string; slug: string; onClick?: () => void }) => (
  <div className="group cursor-pointer hover-lift" onClick={onClick}>
    <div className="aspect-[4/5] overflow-hidden shadow-xl mb-6 relative shine-effect">
      <img 
        src={image} 
        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]" 
        alt={title}
        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=800'; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-sage font-black mb-2 block">{category}</span>
        <h3 className="text-white text-2xl font-bold serif mb-1">{title}</h3>
        <p className="text-gray-300 text-sm font-light">{location}</p>
      </div>
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 z-10"></div>
    </div>
  </div>
);

const StatCard = ({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) => (
  <div className="group">
    <div className="text-sage mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-6xl md:text-7xl font-bold serif mb-4 text-champagne">{number}</h3>
    <p className="text-gray-300 text-sm uppercase tracking-[0.4em] font-black">{label}</p>
  </div>
);

const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="group cursor-pointer hover:opacity-100 transition-opacity">
    <div className="text-2xl font-bold serif text-charcoal uppercase tracking-wider">{name}</div>
  </div>
);

const AwardCard = ({ year, title, organization, project }: { year: string; title: string; organization: string; project: string }) => (
  <div className="group bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-transparent hover:border-sage hover-lift spotlight">
    <div className="flex items-start justify-between mb-6">
      <div className="bg-sage/10 px-5 py-2">
        <span className="text-sage font-black text-sm uppercase tracking-widest">{year}</span>
      </div>
      <Award className="text-sage/40 group-hover:text-sage transition-colors floating" size={32} />
    </div>
    <h3 className="text-2xl font-bold serif text-charcoal mb-4 group-hover:text-sage transition-colors">{title}</h3>
    <p className="text-sm uppercase tracking-wider text-gray-400 font-black mb-3">{organization}</p>
    <p className="text-gray-600 font-light italic">{project}</p>
  </div>
);

export default Home;
