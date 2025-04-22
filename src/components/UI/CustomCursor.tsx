import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on devices with mouse
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;
    
    setIsVisible(true);
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Check for clickable elements to change cursor state
    const updateHoverState = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isClickable = hoveredElement?.closest('a, button, .skill-orb, [data-tilt]');
      setIsHovering(!!isClickable);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', updateHoverState);
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', updateHoverState);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed pointer-events-none z-[9999] mix-blend-difference
        transition-transform duration-200 rounded-full 
        ${isHovering ? 'w-8 h-8 bg-neon-pink' : 'w-4 h-4 bg-neon-green'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.2)' : 'scale(1)'}`,
      }}
    />
  );
};

export default CustomCursor;