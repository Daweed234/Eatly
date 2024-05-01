/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '10px 0 40px 0 rgba(0, 0, 0, 0.1)', 
      },
    },
  },
  plugins: [],
}

