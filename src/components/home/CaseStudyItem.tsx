"use client";

import Image from "next/image";
import { useState } from "react";

interface CaseStudyItemProps {
  id: number;
  title: string;
  image: string;
  expandedCase: number | null;
  toggleCase: (id: number) => void;
  children: React.ReactNode;
}

export default function CaseStudyItem({ 
  id, 
  title, 
  image, 
  expandedCase, 
  toggleCase, 
  children 
}: CaseStudyItemProps) {
  return (
    <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
      <div 
        className="cursor-pointer ocean-card"
        onClick={() => toggleCase(id)}
        onKeyDown={(e) => e.key === 'Enter' && toggleCase(id)}
        tabIndex={0}
        role="button"
        aria-expanded={expandedCase === id}
        aria-controls={`case-study-content-${id}`}
      >
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={id === 0} // Only prioritize the first case study
          />
        </div>
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-blue-800">
            {title}
          </h2>
          <span className="text-blue-600 text-xl font-bold ml-4 flex-shrink-0" aria-hidden="true">
            {expandedCase === id ? '▲' : '▼'}
          </span>
        </div>
      </div>
      
      <div 
        id={`case-study-content-${id}`}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          expandedCase === id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 border-t border-blue-100">
          {children}
        </div>
      </div>
    </div>
  );
}
