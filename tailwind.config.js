/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './sections/**/*.{js,jsx,ts,tsx}',
    './styles/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#181E4B',
        primaryLight: '#5E6282',
        primaryDark: '#212832',
        secondary: '#DF6951',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        volkhov: ['Volkhov', 'sans-serif'],
      },
      boxShadow: {
        btn: '0px 20px 35px rgba(241, 165, 1, 0.15)',
        btnRed: '0px 20px 35px rgba(223, 105, 81, 0.15)',
      },
    },
  },
  plugins: [],
};
