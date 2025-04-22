import React from 'react';
import Hologram from '../animations/Hologram';
import Particles from '../animations/Particles';

const Hero: React.FC = () => {
  return (
    <section id="home" className="section relative flex flex-col items-center justify-center bg-black dark:bg-black">
      <Particles />
      
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <Hologram />
        
        <h1 
          className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-8 mb-4 glitch text-neon-green"
          data-text="Aryan Chaudhary"
        >
          Aryan Chaudhary
        </h1>
        
        <p className="text-lg sm:text-xl mb-8 text-neon-green font-orbitron">
          Full Stack Developer | AI Enthusiast | Digital Craftsman
        </p>
        
        <div className="space-x-4">
          <a
            href="#contact"
            className="relative inline-block px-6 py-3 bg-neon-green text-black font-orbitron font-medium rounded-full overflow-hidden group"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-neon-pink rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative">Get in Touch</span>
          </a>
          
          <a
            href="#projects"
            className="relative inline-block px-6 py-3 border border-neon-green text-neon-green font-orbitron font-medium rounded-full overflow-hidden hover:bg-neon-green/10 transition-colors"
          >
            View My Work
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-neon-green flex justify-center pt-2">
            <div className="w-1 h-2 bg-neon-green rounded-full animate-[pulse_1.5s_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;