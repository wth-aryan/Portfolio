import React, { useEffect, useRef } from 'react';
import { skills } from '../../data/skills';
import VanillaTilt from 'vanilla-tilt';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!skillsRef.current) return;
    
    // Initialize vanilla-tilt
    const elements = skillsRef.current.querySelectorAll('.skill-orb');
    
    VanillaTilt.init(elements as NodeListOf<HTMLElement>, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
      scale: 1.1
    });
    
    // Clean up vanilla-tilt
    return () => {
      elements.forEach((element) => {
        (element as any)?.vanillaTilt?.destroy();
      });
    };
  }, []);
  
  return (
    <section id="skills" className="section relative bg-black dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-16 glitch text-neon-green" 
          data-text="Skills & Technologies"
        >
          Skills & Technologies
        </h2>
        
        <div 
          ref={skillsRef}
          className="flex flex-wrap justify-center gap-6 sm:gap-8"
        >
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="skill-orb"
              data-tilt
            >
              <span className="text-sm sm:text-base font-orbitron text-black">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-20 max-w-2xl mx-auto bg-dark-800/70 backdrop-blur-sm p-6 rounded-lg border border-neon-green/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white text-center">Expertise Areas</h3>
          
          <div className="space-y-4">
            {['Frontend Development', 'Backend Architecture', 'Database Design', 'Cloud Infrastructure'].map((area) => (
              <div key={area} className="relative">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-300">{area}</span>
                  <span className="text-sm font-medium text-neon-green">90%</span>
                </div>
                <div className="w-full bg-dark-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-neon-green to-neon-blue h-2 rounded-full" 
                    style={{ width: '90%' }}
                  ></div>
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