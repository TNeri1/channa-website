"use client";

import Link from "next/link";
import ProfileImage from "../common/ProfileImage";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center gap-8 py-4">
      <div className="content-fade-in rounded-xl shadow-lg p-8 max-w-4xl w-full mx-auto mt-8 bg-white bg-opacity-80">
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-2 text-blue-900 flex items-center justify-center">
              <span className="hibiscus-icon mr-4" aria-hidden="true">🌺</span>
              Aloha, I&apos;m Channa H. Neri
              <span className="hibiscus-icon ml-4" aria-hidden="true">🌺</span>
            </h1>
            <p className="text-lg text-blue-800 italic">Hospitality and Tourism Management Student</p>
          </div>
          
          {/* Use the ProfileImage component */}
          <ProfileImage />
          
          <div className="max-w-2xl text-center">
            <p className="mb-6">
              Welcome to my personal website! I&apos;m a passionate Hospitality and Tourism Management student 
              at Brigham Young University-Hawaii with a love for cultural experiences and exceptional service.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Link href="#about" className="bg-blue-100 p-6 rounded-lg shadow-md transition-all text-center ocean-card">
            <h2 className="font-semibold text-xl mb-2 text-blue-900">About Me</h2>
            <p>Learn more about my journey and passions</p>
          </Link>
          
          <Link href="#resume" className="bg-blue-100 p-6 rounded-lg shadow-md transition-all text-center ocean-card">
            <h2 className="font-semibold text-xl mb-2 text-blue-900">Resume</h2>
            <p>View my qualifications and experience</p>
          </Link>
          
          <Link href="mailto:hemchanna@go.byuh.edu" className="bg-blue-100 p-6 rounded-lg shadow-md transition-all text-center ocean-card">
            <h2 className="font-semibold text-xl mb-2 text-blue-900">Email Me</h2>
            <p>hemchanna@go.byuh.edu</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
