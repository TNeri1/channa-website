"use client";

import { useState, ReactNode } from "react";
import styles from "./WaveAnimation.module.css";

interface WaveButtonProps {
  onClick: () => void;
  className?: string;
  children: ReactNode;
}

export default function WaveButton({ onClick, className, children }: WaveButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onClick();
    }, 800); // Match with animation timing
  };
  
  return (
    <div className="relative">
      <button 
        onClick={handleClick} 
        className={className}
        disabled={isAnimating}
      >
        {children}
      </button>
      {isAnimating && (
        <div className={styles.buttonWave}></div>
      )}
    </div>
  );
} 