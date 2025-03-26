"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import WaveAnimation from "./WaveAnimation";

interface PageTransitionContextType {
  navigateTo: (url: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  navigateTo: () => {},
});

export const usePageTransition = () => useContext(PageTransitionContext);

export default function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [destinationUrl, setDestinationUrl] = useState<string | null>(null);
  
  // Show initial loading animation, but make it shorter
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Reduced from 1500ms to 800ms for a quicker initial load
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle navigation - keep transitions brief
  const navigateTo = (url: string) => {
    if (url === pathname) return; // Don't animate if clicking the current page
    setDestinationUrl(url);
    setIsLoading(true);
  };
  
  // Execute navigation after animation completes - ensure quick transitions
  useEffect(() => {
    if (destinationUrl && !isLoading) {
      router.push(destinationUrl);
      setDestinationUrl(null);
    }
  }, [destinationUrl, isLoading, router]);

  return (
    <PageTransitionContext.Provider value={{ navigateTo }}>
      <WaveAnimation 
        isVisible={isLoading} 
        onAnimationComplete={() => setIsLoading(false)}
      />
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out", // Faster fade-in
        }}
      >
        {children}
      </div>
    </PageTransitionContext.Provider>
  );
} 