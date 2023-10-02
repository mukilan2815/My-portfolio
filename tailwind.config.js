/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        'redd': '#ea4343',
        'josefin': ['Josefin Sans', 'sans'],
      },
    },
  },
  plugins: [],
}

