"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './TurtleAnimation.module.css';

export default function TurtleAnimation() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const [isJumping, setIsJumping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [message, setMessage] = useState("");
  const animationRef = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationInProgressRef = useRef(false);
  
  // Cute turtle messages
  const turtleMessages = [
    "Aloha! 🌺",
    "I'm Honu! 🐢",
    "Surf's up! 🏄‍♂️",
    "Mahalo! 🌴",
    "Turtle-y awesome!",
    "Shell-o there!",
  ];
  
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
          const maxPosition = stageRef.current.clientWidth - 50; // 50px is width of emoji
          
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
  
  // Get a random turtle message
  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * turtleMessages.length);
    return turtleMessages[randomIndex];
  };
  
  const handleTurtleClick = () => {
    // Prevent multiple clicks from creating multiple animations
    if (animationInProgressRef.current) return;
    
    animationInProgressRef.current = true;
    setIsJumping(true);
    setIsSpeaking(true);
    setMessage(getRandomMessage());
    
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
      animationInProgressRef.current = false;
    }, 1800);
  };
  
  return (
    <div ref={stageRef} className={styles.stageArea}>
      <div 
        className={`
          ${styles.turtle} 
          ${direction === -1 ? styles.flipped : ''} 
          ${isJumping ? styles.jumping : ''}
        `} 
        style={{ left: `${position}px` }}
        onClick={handleTurtleClick}
      >
        🐢
      </div>
      {isSpeaking && (
        <div className={styles.speechBubble} style={{ left: `${position + 25}px` }}>
          {message}
        </div>
      )}
    </div>
  );
} 