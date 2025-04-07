"use client";

import { ReactNode, useEffect } from 'react';
import ScrollSpy from '../common/ScrollSpy';
import ScrollAnimations from '../common/ScrollAnimations';
import Footer from './Footer';
import Header from './Header';
import SocialLinks from '../common/SocialLinks';

interface BodyContentProps {
  children: ReactNode;
}

export default function BodyContent({ children }: BodyContentProps) {
  // Enable smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Account for header height
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Enhance the gradient opacity */}
      <div className="fixed-background"></div>
      <div className="hawaiian-gradient-bg" style={{ opacity: 0.9 }}></div>
      <div className="wave-overlay"></div>
      
      <ScrollSpy />
      <ScrollAnimations />
      <Header />
      <SocialLinks />
      
      {/* Add padding to the top to account for the fixed header */}
      <div className="pt-20 content-overlay">
        {/* Render the children directly without additional containers */}
        {children}
      </div>
      
      <Footer />
    </div>
  );
}
