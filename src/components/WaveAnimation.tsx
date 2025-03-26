"use client";

import { useEffect, useState } from "react";
import styles from "./WaveAnimation.module.css";

interface WaveAnimationProps {
  isVisible: boolean;
  onAnimationComplete?: () => void;
}

export default function WaveAnimation({ isVisible, onAnimationComplete }: WaveAnimationProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsExiting(false);
    } else if (!isExiting) {
      setIsExiting(true);
      // Shorter timeout to match the updated CSS animation duration
      const timer = setTimeout(() => {
        if (onAnimationComplete) {
          onAnimationComplete();
        }
        setIsExiting(false); // Reset once animation is complete
      }, 500); // Reduced from 1000ms to 500ms to match the CSS
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, isExiting, onAnimationComplete]);

  if (!isVisible && !isExiting) return null;

  return (
    <div className={`${styles.waveContainer} ${!isVisible ? styles.exit : ''}`}>
      <div className={styles.wave}></div>
      <div className={`${styles.wave} ${styles.wave2}`}></div>
      <div className={`${styles.wave} ${styles.wave3}`}></div>
    </div>
  );
} 