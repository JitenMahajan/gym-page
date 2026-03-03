/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "obsidian": "#0A0A0A",
        "volt": "#CCFF00",
        "prose-primary": "#E0E0E0",
        "prose-secondary": "#A0A0A0",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
