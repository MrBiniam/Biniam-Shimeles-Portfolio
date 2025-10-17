import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const skills = [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'MySQL', icon: '/icons/mysql.svg' },
    { name: 'Arduino', icon: '/icons/arduino.svg' },
    { name: 'React', icon: '/icons/react.svg' }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-warm-white text-center mb-16">
            Skills
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`skill-icon transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center hover:border-coffee-brown hover:transform hover:scale-110 transition-all duration-300 hover:shadow-lg">
                  <img 
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 md:w-12 md:h-12"
                    title={skill.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
