/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#088178',
        'secondary-gray': '#f4f5f9',
      }
    },
  },
  plugins: [],
}

