"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TurtleAnimation from '../animations/TurtleAnimation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add a scrolled class once we've scrolled down
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white bg-opacity-90 shadow-md backdrop-blur-md' : 'bg-white bg-opacity-75 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center relative">
        <Link href="#home">
          <div className="logo-container relative cursor-pointer">
            <div className="text-2xl font-bold text-blue-900 logo-text">
              Channa H. Neri
            </div>
          </div>
        </Link>
        <nav className="flex items-center">
          <ul className="flex flex-wrap items-center space-x-6">
            <li className="flex items-center">
              <Link href="#home" className="nav-link text-blue-900 wave-link py-1">Home</Link>
            </li>
            <li className="flex items-center">
              <Link href="#about" className="nav-link text-blue-900 wave-link py-1">About Me</Link>
            </li>
            <li className="flex items-center">
              <Link href="#featured-work" className="nav-link text-blue-900 wave-link py-1">Featured Work</Link>
            </li>
            <li className="flex items-center">
              <Link href="#resume" className="nav-link text-blue-900 wave-link py-1">Resume</Link>
            </li>
            <li className="flex items-center">
              <a 
                href="mailto:hemchanna@go.byuh.edu" 
                className="contact-button"
                aria-label="Contact me via email"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        <TurtleAnimation />
      </div>
    </header>
  );
}
