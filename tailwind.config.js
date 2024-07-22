/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        secondary: ['Secondary'],
      },
      fontSize: {
        '5xl': '3.2rem',
      },
      colors: {
        primary: '#f7f7f7',
        secondary: '#181818',
      },
      screens: {
        'max-md': { max: '768px' },
      },
    },
  },
  plugins: [],
}
