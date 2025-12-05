/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",      // app folder
    "./src/components/**/*.{js,ts,jsx,tsx}" // components folder
  ],
  theme: {
    extend: {
      colors: {
        'dodger-blue': '#1e90ff', // je hover kleur
      },
      boxShadow: {
        neon: '0 0 10px rgba(30, 144, 255, 0.5)',
      },
    },
  },
  plugins: [],
};