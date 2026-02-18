
import React, { useState } from 'react';
import { X, Mail, Linkedin, Award, Briefcase, Home, Palette, ShoppingBag, Layers } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio: string;
  experience: string;
  expertise: string[];
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Arthur Vale",
    role: "Principal Architect",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "With over 15 years of experience in high-end residential architecture, Arthur brings a unique blend of classical training and contemporary vision to every project.",
    experience: "15+ Years",
    expertise: ["Architectural Design", "Space Planning", "Historic Renovation"],
    email: "arthur@cozyliving.com"
  },
  {
    name: "Sofia Rossi",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    bio: "Milan-trained designer with a passion for materiality and artisan craftsmanship. Sofia oversees the creative vision and aesthetic direction of all studio projects.",
    experience: "12+ Years",
    expertise: ["Interior Styling", "Color Theory", "Art Curation"],
    email: "sofia@cozyliving.com"
  },
  {
    name: "Leonid Vance",
    role: "Lead Curator",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    bio: "Expert in sourcing rare and bespoke furniture pieces from Europe's finest ateliers. Leonid's network spans antique dealers, contemporary makers, and artisan workshops.",
    experience: "10+ Years",
    expertise: ["Furniture Curation", "Antique Sourcing", "Custom Fabrication"],
    email: "leonid@cozyliving.com"
  },
  {
    name: "Elena Marceau",
    role: "Head of Materials",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio: "Specializing in sustainable and luxurious materials, Elena ensures every surface, textile, and finish meets our exacting standards of quality and environmental responsibility.",
    experience: "8+ Years",
    expertise: ["Material Science", "Sustainable Design", "Textile Selection"],
    email: "elena@cozyliving.com"
  },
  {
    name: "Marcus Chen",
    role: "Senior Designer",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    bio: "Marcus brings technical precision and innovative solutions to complex spatial challenges. His work seamlessly integrates technology with timeless design principles.",
    experience: "9+ Years",
    expertise: ["3D Visualization", "Technical Drawing", "Smart Home Integration"],
    email: "marcus@cozyliving.com"
  },
  {
    name: "Isabelle Durand",
    role: "Project Director",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    bio: "Ensuring every project runs smoothly from conception to completion, Isabelle coordinates teams, manages timelines, and maintains our commitment to excellence.",
    experience: "11+ Years",
    expertise: ["Project Management", "Client Relations", "Budget Coordination"],
    email: "isabelle@cozyliving.com"
  }
];

const About: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="animate-reveal bg-gradient-to-b from-[#FDFCFB] via-white to-[#FDFCFB] min-h-screen">
      {/* Editorial Header */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] md:text-[12px] uppercase tracking-[0.8em] font-black text-sage mb-8 animate-pulse">Our Identity</span>
            <h1 className="text-7xl md:text-[140px] font-bold serif leading-[0.8] mb-12 text-charcoal">
              Quietly <br /> <span className="italic font-light opacity-80 text-sage">Refined.</span>
            </h1>
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-sage to-transparent mb-12"></div>
            <p className="text-xl md:text-3xl text-gray-600 font-light max-w-4xl leading-relaxed italic serif">
              "We believe that true luxury is found in the spaces between the noise — where light, texture, and silence meet."
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-sage/10 rounded-full blur-[150px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-charcoal/5 rounded-full blur-[150px] -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      </section>

      {/* The Vision - Overlapping Layout */}
      <section className="py-32 px-6 scroll-reveal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 relative group hover-lift">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-sage/20 z-0 group-hover:border-sage/40 transition-colors"></div>
            <div className="aspect-[16/10] overflow-hidden shadow-2xl relative z-10 shine-effect">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1600" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-[3000ms]" 
                alt="Architectural detail"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=90&w=1600'; }}
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-80 hidden md:block border-[12px] border-white shadow-2xl overflow-hidden group-hover:border-sage/20 transition-colors z-20">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=90&w=600" 
                className="w-full h-full object-cover" 
                alt="Materials"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=90&w=600'; }}
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-12">
            <h2 className="text-5xl md:text-7xl font-bold serif text-charcoal mb-8 leading-tight">The Vision.</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              Founded in 2014, Cozy Studio was born from a desire to redefine the relationship between dwellers and their environments. We don't just furnish rooms; we curate the backdrop for your life's most meaningful moments.
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
              Our approach is rooted in architectural integrity and an obsessive attention to the tactile world. We source from hidden workshops in Milan, antique fairs in Paris, and artisan looms in Belgium.
            </p>
            <div className="flex gap-12 border-t-2 border-gradient-to-r from-sage/20 to-transparent pt-10">
              <Stat value="120+" label="Bespoke Homes" />
              <Stat value="08" label="Design Awards" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-32 bg-gradient-to-br from-[#F9F7F5] via-white to-[#F9F7F5] px-6 relative overflow-hidden scroll-reveal">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sage/5 rounded-full blur-[200px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 stagger-children">
            <Pillar 
              title="Materiality" 
              desc="Raw stone, hand-rubbed brass, and live-edge oak. We celebrate the inherent honesty of materials." 
            />
            <Pillar 
              title="Proportion" 
              desc="Balance is the silent language of comfort. We study the geometry of a room before we ever touch a palette." 
            />
            <Pillar 
              title="Longevity" 
              desc="We design for the next century, not the next season. Our work is intentionally trend-resistant." 
            />
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-40 px-6 bg-white relative overflow-hidden scroll-reveal">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sage/5 rounded-full blur-[150px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-xs uppercase tracking-[0.5em] font-bold text-sage mb-6 block">What We Offer</span>
            <h2 className="text-6xl md:text-8xl font-bold serif text-charcoal mb-8">Our Services.</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              From concept to completion, we provide comprehensive design services tailored to your unique vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 stagger-children">
            <ServiceCard 
              icon={<Home size={40} />}
              title="Full Interior Design"
              description="Comprehensive design services from initial concept through final installation. We manage every detail to create cohesive, stunning spaces that reflect your lifestyle."
              features={["Space Planning", "Material Selection", "Furniture Procurement", "Installation &amp; Styling"]}
            />
            <ServiceCard 
              icon={<Palette size={40} />}
              title="Design Consultancy"
              description="Expert guidance for specific design challenges. Whether you need color advice, room layout help, or material selection, we provide professional insights."
              features={["Color Consultation", "Layout Optimization", "Material Guidance", "Style Direction"]}
            />
            <ServiceCard 
              icon={<Layers size={40} />}
              title="Renovation &amp; Restoration"
              description="Transform existing spaces while respecting architectural heritage. We blend modern functionality with historical integrity in every renovation project."
              features={["Heritage Restoration", "Modern Updates", "Structural Planning", "Permit Coordination"]}
            />
            <ServiceCard 
              icon={<ShoppingBag size={40} />}
              title="Furniture &amp; Art Curation"
              description="Access our global network of artisans, makers, and galleries. We source bespoke pieces and curate collections that elevate your space."
              features={["Bespoke Furniture", "Art Acquisition", "Antique Sourcing", "Custom Fabrication"]}
            />
          </div>
        </div>
      </section>

      {/* The Creatives */}
      <section className="py-40 px-6 bg-white relative overflow-hidden scroll-reveal">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-sage/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-xs uppercase tracking-[0.5em] font-bold text-sage mb-6 block">The Collective</span>
            <h2 className="text-6xl md:text-8xl font-bold serif text-charcoal">The Masterminds.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 stagger-children">
            {teamMembers.map((member) => (
              <TeamCard 
                key={member.name}
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <TeamMemberModal 
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
};

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="group cursor-default">
    <h4 className="text-5xl serif font-bold text-charcoal mb-2 group-hover:text-sage transition-colors">{value}</h4>
    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black">{label}</p>
  </div>
);

const Pillar: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="group relative">
    <div className="h-1 w-full bg-gradient-to-r from-gray-200 via-sage/20 to-gray-200 mb-10 group-hover:from-sage group-hover:to-sage transition-all duration-700"></div>
    <h3 className="text-2xl font-bold text-charcoal serif uppercase tracking-[0.2em] mb-6 group-hover:text-sage transition-colors">{title}</h3>
    <p className="text-gray-600 font-light leading-relaxed text-lg">{desc}</p>
  </div>
);

const TeamCard: React.FC<{ member: TeamMember; onClick: () => void }> = ({ member, onClick }) => (
  <div className="group cursor-pointer hover-lift" onClick={onClick}>
    <div className="aspect-[4/5] overflow-hidden mb-10 shadow-2xl grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 relative shine-effect">
      <img 
        src={member.img} 
        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1500ms]" 
        alt={member.name}
        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800'; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent group-hover:from-sage/20 transition-all duration-700"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="bg-white/90 text-charcoal px-8 py-3 text-xs uppercase tracking-[0.4em] font-black backdrop-blur-sm">View Profile</span>
      </div>
    </div>
    <h3 className="text-3xl font-bold text-charcoal serif mb-2 group-hover:text-sage transition-colors">{member.name}</h3>
    <p className="text-[11px] uppercase tracking-[0.4em] text-sage font-black opacity-70 group-hover:opacity-100 transition-opacity">{member.role}</p>
  </div>
);

const TeamMemberModal: React.FC<{ member: TeamMember; onClose: () => void }> = ({ member, onClose }) => (
  <div className="fixed inset-0 bg-charcoal/90 backdrop-blur-sm z-[200] flex items-center justify-center p-6 animate-in fade-in duration-300" onClick={onClose}>
    <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 bg-charcoal text-white hover:bg-sage transition-colors flex items-center justify-center z-10"
      >
        <X size={24} />
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="relative aspect-[4/5] md:aspect-auto">
          <img 
            src={member.img} 
            className="w-full h-full object-cover" 
            alt={member.name}
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="p-12 md:p-16 space-y-8">
          <div>
            <h2 className="text-5xl font-bold serif text-charcoal mb-4 leading-tight">{member.name}</h2>
            <p className="text-sage text-sm uppercase tracking-[0.4em] font-black mb-6">{member.role}</p>
          </div>

          <div className="border-t-2 border-sage/20 pt-8">
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              {member.bio}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sage/10 flex items-center justify-center">
                <Award className="text-sage" size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-black">Experience</p>
                <p className="text-xl font-bold text-charcoal serif">{member.experience}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-sage/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Briefcase className="text-sage" size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-black mb-3">Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span key={index} className="bg-sage/10 text-sage px-4 py-2 text-xs uppercase tracking-wider font-bold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <div className="w-12 h-12 bg-sage/10 flex items-center justify-center">
                <Mail className="text-sage" size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-black">Contact</p>
                <a href={`mailto:${member.email}`} className="text-lg font-bold text-sage hover:text-charcoal transition-colors">
                  {member.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; features: string[] }> = ({ icon, title, description, features }) => (
  <div className="group bg-gradient-to-br from-champagne/20 via-white to-white p-12 hover:shadow-2xl transition-all duration-700 border-2 border-transparent hover:border-sage/20 hover-lift spotlight">
    <div className="text-sage mb-8 group-hover:scale-110 transition-transform duration-500 floating">
      {icon}
    </div>
    <h3 className="text-3xl font-bold serif text-charcoal mb-6 group-hover:text-sage transition-colors">{title}</h3>
    <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">{description}</p>
    <div className="space-y-3 pt-6 border-t border-gray-100">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="w-2 h-2 bg-sage rounded-full"></div>
          <span className="text-sm text-gray-500 font-light">{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

export default About;
