import React from 'react';
import Matrix from '../animations/Matrix';
import { Code, Lightbulb, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section relative bg-dark-800 dark:bg-dark-800">
      <Matrix />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 
          className="text-3xl sm:text-4xl font-bold mb-10 glitch text-neon-green" 
          data-text="About Me"
        >
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-dark-900/70 backdrop-blur-sm p-6 rounded-lg border border-neon-green/20 text-left hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-shadow">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
              <img 
                src="src/img/my-img.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-base sm:text-lg mb-6 text-gray-300">
              I'm a <span className="text-neon-green font-semibold">Full Stack Developer</span> with a passion for creating immersive digital experiences that blend form and function.
            </p>
            <p className="text-base sm:text-lg text-gray-300">
              From pixel-perfect frontends to robust, scalable backends, I build solutions that push the boundaries of what's possible on the web.
            </p>
          </div>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-4">
              <div className="bg-neon-green/20 p-3 rounded-lg">
                <Code size={24} className="text-neon-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Clean Code Craftsman</h3>
                <p className="text-gray-400">Writing elegant, maintainable code is my obsession.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-neon-green/20 p-3 rounded-lg">
                <Lightbulb size={24} className="text-neon-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Problem Solver</h3>
                <p className="text-gray-400">I don't just code solutions — I architect them.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-neon-green/20 p-3 rounded-lg">
                <Cpu size={24} className="text-neon-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Tech Enthusiast</h3>
                <p className="text-gray-400">Always exploring emerging technologies and frameworks.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <a 
            href="src/img/Aryan-cv.pdf" 
            download 
            className="inline-block px-6 py-3 bg-neon-green text-black font-orbitron font-medium rounded-full hover:bg-neon-pink transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;