import React, { useEffect } from 'react';
import Header from './components/Layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import CustomCursor from './components/UI/CustomCursor';
import ProgressBar from './components/UI/ProgressBar';
import Loader from './components/UI/Loader';
import Scanline from './components/UI/Scanline';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Aryan Chaudhary ';
    
    // Optional: Text-to-speech welcome message on desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(
        'Welcome to my digital realm! I am Aryan Chaudhary, a full stack developer ready to build the future.'
      );
      utterance.pitch = 1.2;
      utterance.rate = 0.9;
      
      // Only speak after a delay to not interrupt page load
      setTimeout(() => {
        window.speechSynthesis.speak(utterance);
      }, 2500);
    }
  }, []);

  return (
    <div className="relative">
      <Loader />
      <Scanline />
      <CustomCursor />
      <ProgressBar />
      <Header />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-6 bg-black dark:bg-black text-center text-gray-400">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aryan Chaudhary. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          <span className="text-neon-green">Designed & Built with ❤️</span>
        </p>
      </footer>
    </div>
  );
}

export default App;