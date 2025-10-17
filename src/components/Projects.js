import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Coffee and Teff Supply Chain",
      description: "A blockchain-inspired platform for transparent and efficient Coffee and Teff trade — complete with Chapa payment integration and role-based access.",
      github: "https://github.com/MrBiniam/Coffee-and-Teff-Supply-Chain"
    },
    {
      title: "Great Mates RMI Chat System",
      description: "A distributed Java chat app using RMI — real-time group and private messaging with elegant modern UI.",
      github: "https://github.com/MrBiniam/Great-Mates-RMI-Chat-System"
    },
    {
      title: "Snap-Mates",
      description: "A Python-based image processing application with real-time filters, clean GUI, and batch editing capabilities. Built with OpenCV and Tkinter.",
      github: "https://github.com/MrBiniam/Snap-Mates"
    },
    {
      title: "Movie Club",
      description: "A movie rental management system that supports user authentication, search, and secure order processing with admin control.",
      github: "https://github.com/MrBiniam/MovieClub"
    },
    {
      title: "Automatic Water Level Controller",
      description: "Arduino-powered system that automatically manages tank water levels using ultrasonic sensors and relays, with live LCD feedback.",
      github: "https://github.com/MrBiniam/Automatic-Water-Level-Controller"
    },
    {
      title: "GPA Calculator",
      description: "A clean, efficient desktop app that calculates weighted GPA instantly.",
      github: "https://github.com/MrBiniam/GPA-Calculator"
    }
  ];

  const openGitHub = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-warm-white text-center mb-16">
            Selected Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`project-card transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="font-heading text-xl font-semibold text-warm-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <button 
                  onClick={() => openGitHub(project.github)}
                  className="inline-flex items-center gap-2 text-coffee-brown hover:text-warm-white transition-colors duration-200 font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
