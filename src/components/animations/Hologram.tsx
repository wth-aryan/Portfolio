import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hologram: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const container = containerRef.current;
    const aspectRatio = container.clientWidth / container.clientHeight;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.z = 2;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    
    // Create a cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    
    // Create edges
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ 
        color: 0x00ff88,
        transparent: true,
        opacity: 0.7
      })
    );
    scene.add(line);
    
    // Add point lights
    const pointLight1 = new THREE.PointLight(0x00ff88, 1, 10);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0xff00ff, 0.5, 10);
    pointLight2.position.set(-2, -2, 2);
    scene.add(pointLight2);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      line.rotation.x += 0.005;
      line.rotation.y += 0.01;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Handle mousemove for interactive rotation
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      line.rotation.x = y * 2;
      line.rotation.y = x * 2;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="w-48 h-48 md:w-64 md:h-64 mx-auto relative rounded-full"
    >
      {/* Add glowing effect */}
      <div className="absolute inset-0 rounded-full bg-neon-green/10 blur-xl animate-pulse-neon" />
    </div>
  );
};

export default Hologram;