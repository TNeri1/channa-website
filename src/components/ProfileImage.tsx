"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProfileImage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imagePath, setImagePath] = useState('/images/profile.jpg');
  
  useEffect(() => {
    // Try to load the image from different possible locations
    const checkImagePaths = async () => {
      const paths = [
        '/images/profile.jpg',
        '/profile.jpg',
        '/public/images/profile.jpg',
        '/public/profile.jpg'
      ];
      
      for (const path of paths) {
        try {
          const res = await fetch(path);
          if (res.ok) {
            console.log(`Found image at ${path}`);
            setImagePath(path);
            setImageLoaded(true);
            return;
          }
        } catch (e) {
          console.log(`Failed to find image at ${path}`);
        }
      }
      
      // If no image is found, we'll fall back to the initials
      setImageLoaded(false);
    };
    
    checkImagePaths();
  }, []);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    setImageLoaded(false);
  };
  
  return (
    <div className="relative w-64 h-64 rounded-full border-4 border-white shadow-lg flex-shrink-0 mb-8 bg-blue-50 overflow-hidden">
      {/* Show initials if image fails to load */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl font-bold text-blue-500">CH</div>
        </div>
      )}
      
      {/* Try to load the image */}
      {imageLoaded && (
        <Image 
          src={imagePath}
          alt="Channa Hem Neri" 
          fill
          priority
          sizes="256px"
          className="object-cover"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </div>
  );
} 