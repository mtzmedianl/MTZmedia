import type { Metadata } from 'next';
import '../globals.css';

import Navbar from '../components/Navbar';
import Background from '../components/Background';

import { Inter } from 'next/font/google';
const geistSans = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MTZ Media',
  description: 'Professionele video editing en social media content.',
  openGraph: {
    title: 'MTZ Media',
    description: 'Professionele video editing en social media content.',
    url: 'https://mtzmedia.nl/',
    siteName: 'MTZ Media',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630/00A2E8/ffffff?text=MTZ+Media',
        width: 1200,
        height: 630,
        alt: 'MTZ Media',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MTZ Media',
    description: 'Professionele video editing en social media content.',
    images: [
      'https://via.placeholder.com/1200x630/00A2E8/ffffff?text=MTZ+Media',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} min-h-screen text-white selection:bg-dodger-blue selection:text-white`}
      >
        <Background />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
