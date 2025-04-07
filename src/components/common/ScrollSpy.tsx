"use client";

import { useEffect, useState, useCallback } from 'react';

export default function ScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>('');

  // Use useCallback to avoid recreating the function on each render
  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    
    sections.forEach((section) => {
      // Cast to HTMLElement to access layout properties
      const htmlSection = section as HTMLElement;
      const sectionTop = htmlSection.offsetTop;
      const sectionHeight = htmlSection.clientHeight;
      
      // Consider a section active if we've scrolled to it (with a small offset)
      // or if we're within the section
      if (window.scrollY >= (sectionTop - 100)) {
        current = section.getAttribute('id') || '';
      }
    });
    
    if (current !== activeSection) {
      setActiveSection(current);
      
      // Update nav links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('scrollspy-active');
        
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('scrollspy-active');
        }
      });
    }
  }, [activeSection]);
  
  useEffect(() => {
    // Use passive: true for better performance on mobile
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initialize on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  return null; // This component doesn't render anything
}
