"use client";

import { useEffect, useRef } from 'react';

const OceanBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Wave properties - increased amplitude and adjusted frequencies for more visible movement
    const waves = {
      count: 5,  // Reduced count for more distinct waves
      length: 0.005,  // Longer wavelength
      amplitude: 70,  // Increased amplitude for more pronounced waves
      frequency: 0.02  // Faster movement
    };

    // Colors for gradient - More vibrant Hawaiian ocean colors
    const colors = {
      top: 'rgba(0, 180, 180, 0.9)',      // Brighter turquoise
      upperMiddle: 'rgba(0, 140, 210, 0.8)', // Brighter azure
      lowerMiddle: 'rgba(0, 100, 190, 0.7)',  // Brighter deep blue
      bottom: 'rgba(0, 70, 140, 0.6)'     // Brighter navy
    };

    // Animation
    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, colors.top);
      gradient.addColorStop(0.3, colors.upperMiddle);
      gradient.addColorStop(0.6, colors.lowerMiddle);
      gradient.addColorStop(1, colors.bottom);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw more distinct waves
      for (let i = 0; i < waves.count; i++) {
        ctx.beginPath();
        
        // Wave properties vary by index for more natural look
        const waveLength = waves.length * (1 + i * 0.4);
        const amplitude = waves.amplitude * (1 + i * 0.3);
        const frequency = waves.frequency * (1 + i * 0.2);
        const phase = i * Math.PI / 3; // Increased phase shift
        const yOffset = canvas.height * (0.3 + i * 0.15); // More spread out
        
        // Start at the left edge
        ctx.moveTo(0, yOffset);
        
        // Draw wave path with smoother curves
        for (let x = 0; x < canvas.width; x += 10) { // Larger steps for smoother curves
          // Combine sine and cosine waves with different frequencies
          const sinComponent = Math.sin(x * waveLength + time * frequency + phase) * amplitude;
          const cosComponent = Math.cos(x * waveLength * 0.7 + time * frequency * 0.8 + phase/2) * amplitude * 0.4;
          
          const y = yOffset + sinComponent + cosComponent;
          ctx.lineTo(x, y);
        }
        
        // Complete the path to the bottom-right corner and back to start
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        // More opaque wave colors
        const alpha = 0.4 - (i * 0.05); // Higher base opacity
        
        // Alternate between white and light blue for waves
        if (i % 2 === 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(230, 250, 255, ${alpha})`; // Lighter blue for contrast
        }
        
        ctx.fill();
      }
      
      time += 0.05; // Faster animation
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default OceanBackground; 