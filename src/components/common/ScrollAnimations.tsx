"use client";

import { useEffect, useRef } from 'react';

export default function ScrollAnimations() {
  // Use useRef to keep track of elements that have been animated
  const animatedElements = useRef<Set<Element>>(new Set());

  useEffect(() => {
    // Get all elements that need to be animated
    const fadeElements = document.querySelectorAll('.content-fade-in');
    
    // Create Intersection Observer for fade in animations
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedElements.current.has(entry.target)) {
          entry.target.classList.add('content-visible');
          // Add to the set of animated elements
          animatedElements.current.add(entry.target);
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe all fade elements
    fadeElements.forEach(element => {
      if (!animatedElements.current.has(element)) {
        fadeObserver.observe(element);
      }
    });

    // Find elements with wave-header class for special wave animations
    const waveHeaders = document.querySelectorAll('.wave-header');
    
    // Create Intersection Observer for wave headers
    const waveObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedElements.current.has(entry.target)) {
          entry.target.classList.add('wave-animated');
          // Add to the set of animated elements
          animatedElements.current.add(entry.target);
          waveObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all wave headers
    waveHeaders.forEach(element => {
      if (!animatedElements.current.has(element)) {
        waveObserver.observe(element);
      }
    });
    
    // Cleanup function
    return () => {
      fadeElements.forEach(element => {
        fadeObserver.unobserve(element);
      });
      
      waveHeaders.forEach(element => {
        waveObserver.unobserve(element);
      });
    };
  }, []);
  
  return null;
}
