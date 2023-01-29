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
        newsletter: 'rgb(223, 215, 249, 0.2)',
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
        social: '0px 2px 10px rgba(0, 0, 0, 0.1)',
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
      borderRadius: {
        newsletter: '129px 20px 20px 20px',
      },
      backgroundImage: {
        gradient: 'linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)',
        gradientOrange: 'linear-gradient(180deg, #e68562 0%, #e68562 100%)',
        gradientBlue:
          'linear-gradient(201.65deg, #747DEF 10.27%, #5E3BE1 100%)',
        gradientSocial:
          'conic-gradient(from 180deg at 50% 50%, #B8D2F1 0deg, #F289AA 60deg, #C68BF0 106.09deg, #D164DA 153.75deg, #C963E8 221.25deg, #BFC2E8 258.75deg, #FFC999 288.75deg, #D0D8C9 315deg, #BAD0F1 334.13deg, #CED8CB 358.97deg, rgba(255, 255, 255, 0) 360deg)',
      },
      gridTemplateColumns: {
        footer: '2fr 1fr 1fr 1fr 2fr',
      },
      screens: {
        lg: '1024px',
        xl: '1300px',
        xxl: '1440px',
      },
    },
  },
  plugins: [],
};
