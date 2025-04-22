import React, { useEffect, useState } from 'react';
import ThemeToggle from '../UI/ThemeToggle';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-neon-green font-orbitron">
          &gt; Aryan Chaudhary
        </h1>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-neon-green"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
            <li><a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li><a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
            <li><a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
            <li><ThemeToggle /></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;