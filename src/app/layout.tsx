import type { Metadata } from "next";
import { GeistSans, GeistMono } from 'geist/font'
import "./globals.css";
import "../styles/ocean-background.css";
import "../styles/hawaiian-theme.css";
import "../styles/section-transitions.css";
import "../styles/hawaiian-gradient.css";
import BodyContent from "../components/BodyContent";

const geistSans = GeistSans
const geistMono = GeistMono

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
