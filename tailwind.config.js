/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.30)',
        'primary-green': '#088178',
        'secondary-gray': '#f4f5f9',
      },
      fontFamily: {
        iransSans: ['iransSans'],
      },
    },
  },
  plugins: [],
}

