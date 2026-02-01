/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#5454D4',
          pink: '#FF64AE',
          yellow: '#FFD700',
        },
        dark: {
          900: '#000000',
          800: '#1A1A1A',
          700: '#2D2D2D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
