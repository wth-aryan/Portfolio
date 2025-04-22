import React, { useEffect, useState } from 'react';

const ProgressBar: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const percentage = (scrollTop / documentHeight) * 100;
      
      setScrollPercentage(Math.min(percentage, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-neon-green via-neon-pink to-neon-blue z-[1000]"
      style={{ width: `${scrollPercentage}%` }}
    />
  );
};

export default ProgressBar;