import React, { useEffect, useState } from 'react';
import { Code } from 'lucide-react';

const Loader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Initializing holographic interface');
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Animate loading text with dots
    const dotInterval = setInterval(() => {
      setDots(prev => prev.length < 3 ? prev + '.' : '');
    }, 400);

    // Change loading text periodically
    const textInterval = setInterval(() => {
      const texts = [
        'Initializing holographic interface',
        'Loading quantum particles',
        'Generating digital world',
        'Establishing neuro-link',
        'Activating cybernetic enhancements',
        'Welcome to world',
      ];
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      setLoadingText(randomText);
    }, 2000);

    // Hide loader after timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(dotInterval);
      clearInterval(textInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-dark-900 z-[9999] flex flex-col items-center justify-center">
      <div className="relative">
        <Code size={48} className="text-neon-green animate-pulse" />
        <div className="absolute inset-0 bg-dark-900 opacity-50 mix-blend-overlay rounded-full" />
      </div>
      <div className="h-1 w-40 bg-dark-700 rounded-full mt-6 mb-4 overflow-hidden">
        <div className="h-full bg-neon-green animate-[pulse_1.5s_ease-in-out_infinite]" />
      </div>
      <p className="text-neon-green font-orbitron text-sm">
        {loadingText}{dots}
      </p>
    </div>
  );
};

export default Loader;