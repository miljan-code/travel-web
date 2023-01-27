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
        card: '0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)',
      },
      dropShadow: {
        destination: [
          '0px 100px 80px rgba(0, 0, 0, 0.02)',
          '0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852)',
          '0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481)',
          '0px 20px 13px rgba(0, 0, 0, 0.01)',
          '0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185)',
          '0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)',
        ],
      },
    },
  },
  plugins: [],
};
