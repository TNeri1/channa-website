"use client";

import { useEffect, useState } from 'react';

export default function ScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      let current = '';
      
      sections.forEach((section) => {
        // Cast section to HTMLElement to access offsetTop and clientHeight
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
          current = sectionElement.getAttribute('id') || '';
        }
      });
      
      setActiveSection(current);
      
      // Update nav links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('scrollspy-active');
        
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('scrollspy-active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initialize on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return null; // This component doesn't render anything
} 