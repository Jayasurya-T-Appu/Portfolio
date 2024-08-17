/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#FFBE98',
        'custom-text': '#402E32',
      },
      fontSize: {
        'responsive-lg': 'clamp(1.5rem, 4vw + 1rem, 2.5rem)', // Example for large text
        'responsive-md': 'clamp(1.25rem, 3vw + 0.75rem, 2rem)', // Example for medium text
        'responsive-sm': 'clamp(2.5rem, 2vw + 0.5rem, 15rem)', 
      },
    },
  },
  plugins: [],
}

