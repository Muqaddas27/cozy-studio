
import React, { useState } from 'react';
import { MapPin, Award, ArrowRight } from 'lucide-react';
import { Page } from '../types';
import { projectsData, categories, Project } from '../data/projectsData';

interface ProjectsProps {
  onNavigate: (page: Page) => void;
  onProjectSelect: (slug: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate, onProjectSelect }) => {
  const [filter, setFilter] = useState<string>('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="animate-reveal bg-gradient-to-b from-white via-champagne/20 to-white min-h-screen">
      {/* Hero Header */}
      <section className="pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-[11px] uppercase tracking-[0.8em] font-black text-sage mb-8 block">Portfolio</span>
          <h1 className="text-7xl md:text-[130px] font-bold serif text-charcoal leading-[0.8] mb-12">
            Our <br /> <span className="italic font-light opacity-80 text-sage">Projects.</span>
          </h1>
          <p className="text-2xl text-gray-600 font-light max-w-2xl leading-relaxed italic mx-auto">
            "Each project is a unique narrative of space, light, and materiality — crafted with uncompromising attention to detail."
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-16 px-6 scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-4 text-xs uppercase tracking-[0.3em] font-black transition-all border-2 ripple-effect ${
                  filter === cat
                    ? 'bg-sage text-white border-sage'
                    : 'bg-white text-charcoal border-gray-200 hover:border-sage hover:text-sage'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Showing <span className="font-bold text-sage">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 stagger-children">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                project={project}
                onClick={() => onProjectSelect(project.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-charcoal to-sage p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iIzVGNkY1MiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-bold serif text-white mb-12">
                Start Your <span className="italic font-light text-champagne">Journey</span>
              </h2>
              <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto mb-16 italic">
                Ready to create your own sanctuary? Let's discuss how we can bring your vision to life.
              </p>
              <button 
                onClick={() => onNavigate(Page.CONTACT)}
                className="group inline-flex items-center gap-6 bg-white text-charcoal px-16 py-7 text-xs uppercase tracking-[0.4em] font-black hover:bg-champagne hover:text-sage transition-all shadow-2xl hover:scale-105"
              >
                Begin Your Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <div className="group cursor-pointer hover-lift scroll-reveal" onClick={onClick}>
    <div className="aspect-[4/5] overflow-hidden shadow-xl mb-6 relative shine-effect fade-zoom">
      <img 
        src={project.image} 
        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-[2000ms]" 
        alt={project.title}
        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=800'; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-sage font-black mb-2 block">{project.category}</span>
        <h3 className="text-white text-2xl font-bold serif mb-1">{project.title}</h3>
        <p className="text-gray-300 text-sm font-light flex items-center gap-2">
          <MapPin size={14} /> {project.location}
        </p>
      </div>
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 z-10"></div>
      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <span className="text-charcoal text-xs font-black uppercase tracking-wider">View Details</span>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <span>{project.year}</span>
        <span>•</span>
        <span>{project.area}</span>
      </div>
      {project.awards && (
        <div className="flex items-center gap-2 text-sage text-xs">
          <Award size={14} className="floating" />
        </div>
      )}
    </div>
  </div>
);

export default Projects;
