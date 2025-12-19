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
        backgroundColor: '#00A2E8', // Dodger Blue
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      {/* Logo / Brand */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0 }}>
          MTZ Media
        </h1>
        <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
          Video Editing & Social Media Content
        </p>
      </div>

      {/* Under Construction Message */}
      <div>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚧 Under Construction 🚧</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '400px', margin: '0 auto' }}>
          Onze website is tijdelijk offline voor updates. Kom later terug voor de nieuwste content!
        </p>
      </div>

      {/* Optional Footer */}
      <footer style={{ position: 'absolute', bottom: '1rem', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} MTZ Media
      </footer>
    </main>
  );
}
