/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'goa-orange': '#FF6B35',
        'goa-blue': '#004E89',
        'goa-sand': '#F4A460',
        'goa-green': '#2E8B57',
        'goa-dark': '#1a1a2e',
        'goa-light': '#f8f9fa',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}