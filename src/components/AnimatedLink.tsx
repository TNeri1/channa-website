"use client";

import { ReactNode } from "react";
import { usePageTransition } from "./PageTransitionProvider";

interface AnimatedLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function AnimatedLink({ href, className, children }: AnimatedLinkProps) {
  const { navigateTo } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
} 