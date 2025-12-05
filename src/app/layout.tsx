'use client';

import Intro from '../components/Intro';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import '../globals.css';

import { Inter } from 'next/font/google';
const geistSans = Inter({ variable: '--font-geist-sans', subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} min-h-screen text-white selection:bg-dodger-blue selection:text-white`}>
        <Background />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
