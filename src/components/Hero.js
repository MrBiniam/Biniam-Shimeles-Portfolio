import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showHeroText, setShowHeroText] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Trigger hero text animation after a short delay
    const timer = setTimeout(() => {
      setShowHeroText(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [isVisible]);

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Biniam_ Shimeles_Resume.pdf';
    link.download = 'Biniam_Shimeles_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="font-poppins font-semibold text-center mb-8 sm:mb-12">
            <h1 className={`hero-title-large transition-all duration-800 ease-out ${showHeroText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Hi, I'm{' '}
              <span className="text-coffee-brown">Biniam Shimeles</span>
              <span className="hero-title">
                <br />
                I build things that work and love a good book (yeah, both){' '}
                <img src="/icons/computer.svg" alt="PC" className="inline w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mx-1" />
                <img src="/icons/books.svg" alt="Books" className="inline w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mx-1" />.
              </span>
            </h1>
          </div>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button 
            onClick={scrollToProjects}
            className="btn-primary text-lg"
          >
            View Projects
          </button>
          <button 
            onClick={downloadResume}
            className="btn-secondary text-lg"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
