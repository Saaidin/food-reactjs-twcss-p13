/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.1)',
        'black-rgba-2': 'rgba(0, 0, 0, 0.3)',
        'white-color-1': '#ffffffcc',
        'white-color-2': '#ccc',
        'primary-dark-1': '#5651e5',
        'primary-light-1': '#709dff',
      },
      maxWidth: {
        'mw-1': '700px',
        'mw-2': '275px',
        'mw-3': '310px',
      },
      fontFamily: {
        'ff-1': ['Poppins', 'sans-serif'],
      },
      screens: {
        'max-y20': {'max': '385px'},
        'min-y20': {'min': '386px'},
      }  
    },
  },
  plugins: [],
}
