
import React from 'react';
import { ArrowLeft, MapPin, Calendar, Ruler, Award } from 'lucide-react';
import { Page } from '../types';
import { Project } from '../data/projectsData';

interface ProjectDetailProps {
  project: Project;
  onNavigate: (page: Page) => void;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onNavigate, onBack }) => {
  return (
    <div className="animate-reveal bg-gradient-to-b from-white via-champagne/20 to-white min-h-screen">
      {/* Back Button */}
      <section className="pt-36 pb-12 px-6 scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={onBack}
            className="group flex items-center gap-4 text-charcoal hover:text-sage transition-colors text-sm uppercase tracking-[0.3em] font-black"
          >
            <ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={20} />
            Back to Projects
          </button>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="pb-20 px-6 scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[70vh] overflow-hidden shadow-2xl shine-effect">
            <img 
              src={project.image} 
              className="w-full h-full object-cover" 
              alt={project.title}
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=1600'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <span className="text-xs uppercase tracking-[0.5em] font-black text-sage mb-4 block">{project.category}</span>
              <h1 className="text-6xl md:text-8xl font-bold serif mb-6 leading-tight">{project.title}</h1>
              <div className="flex flex-wrap items-center gap-8 text-gray-200">
                <span className="flex items-center gap-2 text-lg">
                  <MapPin size={20} /> {project.location}
                </span>
                <span className="flex items-center gap-2 text-lg">
                  <Calendar size={20} /> {project.year}
                </span>
                <span className="flex items-center gap-2 text-lg">
                  <Ruler size={20} /> {project.area}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 bg-white scroll-reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.4em] font-black text-sage mb-8">Project Overview</h2>
          <p className="text-3xl md:text-4xl serif italic text-charcoal font-light leading-relaxed">
            "{project.description}"
          </p>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-6 bg-gradient-to-br from-champagne/30 via-white to-champagne/30 scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 stagger-children">
            <div>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.4em] font-black text-charcoal">The Challenge</span>
                <div className="w-20 h-1 bg-sage mt-4"></div>
              </div>
              <p className="text-xl text-gray-600 font-light leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.4em] font-black text-charcoal">Our Solution</span>
                <div className="w-20 h-1 bg-sage mt-4"></div>
              </div>
              <p className="text-xl text-gray-600 font-light leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 bg-white scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.4em] font-black text-charcoal mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {project.features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-8 bg-gradient-to-br from-champagne/20 to-white hover:from-sage/10 hover:to-sage/5 transition-all border-l-4 border-transparent hover:border-sage"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-sage rounded-full flex-shrink-0 mt-2 group-hover:scale-125 transition-transform"></div>
                  <span className="text-lg text-charcoal font-light leading-relaxed">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 px-6 bg-gradient-to-b from-charcoal to-sage scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.4em] font-black text-champagne mb-16 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {project.gallery.map((img, index) => (
              <div 
                key={index} 
                className="relative aspect-[4/5] overflow-hidden shadow-2xl hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-shadow group shine-effect hover-lift fade-zoom"
              >
                <img 
                  src={img} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[1500ms]" 
                  alt={`${project.title} - Image ${index + 1}`}
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=800'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      {project.awards && (
        <section className="py-20 px-6 bg-white scroll-reveal">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-8 bg-gradient-to-r from-champagne/40 via-champagne/20 to-transparent p-12 border-l-4 border-sage hover-lift spotlight">
              <div className="bg-sage/10 p-6 rounded-full floating">
                <Award className="text-sage" size={48} />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.4em] font-black text-charcoal mb-3">Recognition</h3>
                <p className="text-2xl font-bold text-charcoal serif">{project.awards}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-charcoal via-charcoal to-sage relative overflow-hidden scroll-reveal">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iIzVGNkY1MiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold serif text-white mb-8">
            Explore More <span className="italic font-light text-champagne">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto">
            Discover our complete portfolio of exceptional interiors and transformative spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={onBack}
              className="px-12 py-6 bg-white text-charcoal hover:bg-sage hover:text-white transition-all text-xs uppercase tracking-[0.4em] font-black shadow-2xl hover:scale-105 ripple-effect magnetic-button"
            >
              View All Projects
            </button>
            <button 
              onClick={() => onNavigate(Page.CONTACT)}
              className="px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-charcoal transition-all text-xs uppercase tracking-[0.4em] font-black hover:scale-105 ripple-effect magnetic-button"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
