
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import FloatingContact from './components/FloatingContact';
import LoadingSkeleton from './components/LoadingSkeleton';
import { Page } from './types';
import { getProjectBySlug } from './data/projectsData';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      // Check if it's a project detail URL (e.g., projects/chelsea-penthouse)
      if (hash.startsWith('projects/')) {
        const slug = hash.replace('projects/', '');
        setCurrentPage(Page.PROJECTS);
        setSelectedProjectSlug(slug);
      } else {
        // Regular page navigation
        if (Object.values(Page).includes(hash as Page)) {
          setCurrentPage(hash as Page);
          setSelectedProjectSlug(null);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setSelectedProjectSlug(null);
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioning(false);
    }, 200);
  };

  const navigateToProject = (slug: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(Page.PROJECTS);
      setSelectedProjectSlug(slug);
      window.location.hash = `projects/${slug}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioning(false);
    }, 200);
  };

  const navigateBackToProjects = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProjectSlug(null);
      window.location.hash = Page.PROJECTS;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioning(false);
    }, 200);
  };

  const renderPage = () => {
    // If we have a selected project, show the detail page
    if (selectedProjectSlug) {
      const project = getProjectBySlug(selectedProjectSlug);
      if (project) {
        return <ProjectDetail project={project} onNavigate={navigateTo} onBack={navigateBackToProjects} />;
      }
      // If project not found, fall back to projects list
      setSelectedProjectSlug(null);
    }

    // Regular page rendering
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={navigateTo} onProjectSelect={navigateToProject} />;
      case Page.ABOUT:
        return <About />;
      case Page.CONTACT:
        return <Contact />;
      case Page.TESTIMONIALS:
        return <Testimonials onNavigate={navigateTo} />;
      case Page.PROJECTS:
        return <Projects onNavigate={navigateTo} onProjectSelect={navigateToProject} />;
      case Page.PRIVACY:
        return <Privacy />;
      case Page.TERMS:
        return <Terms />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-sage/20 selection:text-sage custom-cursor">
      <CustomCursor />
      <BackToTop />
      <FloatingContact />
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <main className={`flex-grow pt-0 page-load ${isTransitioning ? 'opacity-50' : 'opacity-100'} transition-opacity duration-200`}>
        {isTransitioning ? <LoadingSkeleton /> : renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
