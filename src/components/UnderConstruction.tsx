'use client';
import React from 'react';

export default function UnderConstruction() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#1F1F1F', // donker antraciet
        color: 'white',
        fontFamily: 'var(--font-geist-sans)', // dezelfde font als Hero
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      {/* Logo als tekst */}
      <div style={{ marginBottom: '2rem' }}>
        <h1
          style={{
            fontSize: '4rem', // groter, net als Hero
            fontWeight: 'bold',
            color: '#00A2E8', // Dodger Blue
            margin: 0,
          }}
        >
          MTZ Media
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'white', marginTop: '0.5rem' }}>
          Video Editing & Social Media Content
        </p>
      </div>

      {/* Under Construction boodschap */}
      <div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
          🚧 Under Construction 🚧
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '400px', margin: '0 auto', color: 'white' }}>
          Onze website is tijdelijk offline voor updates. Kom later terug voor de nieuwste content!
        </p>
      </div>

      {/* Footer */}
      <footer style={{ position: 'absolute', bottom: '1rem', fontSize: '0.9rem', color: 'white' }}>
        &copy; {new Date().getFullYear()} MTZ Media
      </footer>
    </main>
  );
}
