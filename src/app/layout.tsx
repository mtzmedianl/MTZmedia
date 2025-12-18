import '../globals.css';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import { Inter } from 'next/font/google';
const geistSans = Inter({ variable: '--font-geist-sans', subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <title>MTZ Media</title>
        <meta name="description" content="Professionele video editing en social media content." />

        {/* Open Graph */}
        <meta property="og:title" content="MTZ Media" />
        <meta property="og:description" content="Professionele video editing en social media content." />
        <meta property="og:url" content="https://mtzmedia.nl/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://via.placeholder.com/1200x630/00A2E8/ffffff?text=MTZ+Media" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MTZ Media" />
        <meta name="twitter:description" content="Professionele video editing en social media content." />
        <meta name="twitter:image" content="https://via.placeholder.com/1200x630/00A2E8/ffffff?text=MTZ+Media" />
      </head>
      <body className={`${geistSans.variable} min-h-screen text-white selection:bg-dodger-blue selection:text-white`}>
        <Background />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
