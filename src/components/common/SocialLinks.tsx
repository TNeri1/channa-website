"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from '@/types';

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/channa-hem/",
      icon: faLinkedin,
      color: "#0077b5"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_channahem/",
      icon: faInstagram,
      color: "#E4405F"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@Channa_and_TJ",
      icon: faYoutube,
      color: "#FF0000"
    }
  ];

  return (
    <div className="social-icons fixed top-1/4 left-4 z-40 flex flex-col gap-4">
      {socialLinks.map((link) => (
        <a 
          key={link.name}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all hover:transform hover:scale-110 shadow-md"
          aria-label={`Visit ${link.name}`}
        >
          <FontAwesomeIcon icon={link.icon} size="lg" color={link.color} />
        </a>
      ))}
    </div>
  );
}
