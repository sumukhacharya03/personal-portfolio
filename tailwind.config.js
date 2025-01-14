/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Next.js pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Next.js components directory
    './app/**/*.{js,ts,jsx,tsx}', // Next.js app directory (if using App Router)
  ],
  theme: {
    extend: {
      screens:
      {'xs':'480px',},
    },
  },
  plugins: [],
};
