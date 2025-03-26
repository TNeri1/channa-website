"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './StitchAnimation.module.css';

export default function StitchAnimation() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const [isJumping, setIsJumping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const animationRef = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element for gentle water sound
    audioRef.current = new Audio("/turtle-sound.mp3"); // Optional sound file
    
    return () => {
      // Cleanup
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  useEffect(() => {
    // Slower speed for turtle
    const speed = 0.4;
    const animate = () => {
      setPosition(prevPosition => {
        const newPosition = prevPosition + (direction * speed);
        
        // Check if we need to change direction
        if (stageRef.current) {
          const maxPosition = stageRef.current.clientWidth - 60; // 60 is width of turtle
          
          if (newPosition > maxPosition) {
            setDirection(-1);
            return maxPosition;
          } else if (newPosition < 0) {
            setDirection(1);
            return 0;
          }
        }
        
        return newPosition;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [direction]);
  
  const handleTurtleClick = () => {
    setIsJumping(true);
    setIsSpeaking(true);
    
    // Play sound if available
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    
    // Reset jumping after animation
    setTimeout(() => {
      setIsJumping(false);
    }, 1200); // Longer for turtle's more gentle motion
    
    // Reset speaking after animation
    setTimeout(() => {
      setIsSpeaking(false);
    }, 1800);
  };
  
  return (
    <div ref={stageRef} className={styles.stageArea}>
      <div 
        className={`
          ${styles.stitch} 
          ${direction === -1 ? styles.flipped : ''} 
          ${isJumping ? styles.jumping : ''}
        `} 
        style={{ left: `${position}px` }}
        onClick={handleTurtleClick}
      />
      {isSpeaking && (
        <div className={styles.speechBubble} style={{ left: `${position + 30}px` }}>
          Honu says hi!
        </div>
      )}
    </div>
  );
} 