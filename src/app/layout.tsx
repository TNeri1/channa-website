import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/ocean-background.css";
import "../styles/hawaiian-theme.css";
import "../styles/section-transitions.css";
import "../styles/hawaiian-gradient.css";
import BodyContent from "../components/BodyContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Channa H. Neri - Hospitality & Tourism Professional",
  description: "Personal website of Channa H. Neri, a Hospitality and Tourism Management student at BYU-Hawaii.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BodyContent>
          {children}
        </BodyContent>
      </body>
    </html>
  );
}
