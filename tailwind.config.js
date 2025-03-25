module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Next.js pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Next.js components directory
    './app/**/*.{js,ts,jsx,tsx}', // Next.js app directory (if using App Router)
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};