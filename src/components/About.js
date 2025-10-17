import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  return (
    <section id="about" ref={sectionRef} className="py-20 section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Subtle divider line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-coffee-brown to-transparent mx-auto mb-16"></div>
        
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-warm-white text-center mb-12">
            About Me
          </h2>
          
          <div className="max-w-[700px] mx-auto px-6">
            <p className="font-roboto text-warm-white text-left mb-4" style={{ fontSize: '18px', fontWeight: '400', lineHeight: '1.6', marginBottom: '15px' }}>
              I'm <strong>Biniam Shimeles</strong>, a Computer Science graduate from Ethiopia with a deep interest in creating useful, well-thought-out digital systems.
            </p>
            
            <p className="font-roboto text-warm-white text-left mb-4" style={{ fontSize: '18px', fontWeight: '400', lineHeight: '1.6', marginBottom: '15px' }}>
              I've interned at Ethiopian Airlines, working in the Application Design and Delivery Office, where I learned how real-world systems take shape, from design to deployment.
            </p>
            
            <p className="font-roboto text-warm-white text-left mb-4" style={{ fontSize: '18px', fontWeight: '400', lineHeight: '1.6', marginBottom: '15px' }}>
              Currently, I'm part of a Smart Parking System project with senior developers, a large-scale, ongoing effort that keeps me learning every day. I am someone who doesn't give up easily, takes responsibility seriously, and always does my part to ensure the team succeeds.
            </p>
            
            <p className="font-roboto text-warm-white text-left mb-4" style={{ fontSize: '18px', fontWeight: '400', lineHeight: '1.6', marginBottom: '15px' }}>
              I value loyalty and collaboration, and I make sure I contribute fully rather than holding anyone back — basically, I'm the teammate who shows up, even on Mondays 😎.
            </p>
            
            <p className="font-roboto text-warm-white text-left" style={{ fontSize: '18px', fontWeight: '400', lineHeight: '1.6' }}>
              I enjoy reading ideas that challenge my thinking and discussing them over coffee. If you'd like to talk projects, share ideas, or just say hello, I'm always reachable.
            </p>
          </div>
        </div>
        
        {/* Another subtle divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-coffee-brown to-transparent mx-auto mt-16"></div>
      </div>
    </section>
  );
};

export default About;
