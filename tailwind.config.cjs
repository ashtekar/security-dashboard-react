/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background-dark': '#1a1a1a',
        'card-background': '#242424',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'accent-blue': '#3b82f6',
        'accent-red': '#ef4444',
        'accent-green': '#10b981',
        'border-color': '#333333',
      },
    },
  },
  plugins: [],
}
