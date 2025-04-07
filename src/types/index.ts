// Common type definitions for the website

// For featured work case studies
export interface CaseStudy {
  id: number;
  title: string;
  image: string;
  shortDescription?: string;
  content: React.ReactNode;
}

// For navigation items
export interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

// For social media links
export interface SocialLink {
  name: string;
  url: string;
  icon: any; // FontAwesome icon
  color: string;
}
