import React, { useState } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of fixed navigation
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="font-poppins text-base sm:text-lg font-medium text-warm-white">
              Biniam Shimeles
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-poppins text-warm-white hover:text-coffee-brown transition-colors duration-300 text-sm lg:text-base"
              >
                {item.name}
              </button>
            ))}
          </div>
          
          {/* Desktop Social Icons */}
          <div className="hidden md:flex space-x-3 lg:space-x-4">
            <a 
              href="mailto:biniams.shimeles@gmail.com" 
              className="text-warm-white hover:text-coffee-brown transition-colors duration-300"
              title="Email"
            >
              <img src="/icons/email.svg" alt="Email" className="w-4 h-4 lg:w-5 lg:h-5" />
            </a>
            <a 
              href="https://github.com/MrBiniam/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-warm-white hover:text-coffee-brown transition-colors duration-300"
              title="GitHub"
            >
              <img src="/icons/github.svg" alt="GitHub" className="w-4 h-4 lg:w-5 lg:h-5" />
            </a>
            <a 
              href="https://www.instagram.com/biniamshimeles/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-warm-white hover:text-coffee-brown transition-colors duration-300"
              title="Instagram"
            >
              <img src="/icons/instagram.svg" alt="Instagram" className="w-4 h-4 lg:w-5 lg:h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-warm-white hover:text-coffee-brown transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 bg-opacity-95 rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 font-poppins text-warm-white hover:text-coffee-brown hover:bg-gray-700 transition-colors duration-300 text-base rounded-md"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-6 pt-4 pb-2">
                <a 
                  href="mailto:biniams.shimeles@gmail.com" 
                  className="text-warm-white hover:text-coffee-brown transition-colors duration-300"
                  title="Email"
                >
                  <img src="/icons/email.svg" alt="Email" className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/MrBiniam/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-warm-white hover:text-coffee-brown transition-colors duration-300"
                  title="GitHub"
                >
                  <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/biniamshimeles/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-warm-white hover:text-coffee-brown transition-colors duration-300"
                  title="Instagram"
                >
                  <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
