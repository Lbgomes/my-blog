import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
    grid: {
      container: '130rem',
      gutter: '3.2rem'
    },
    border: {
      white: '1px solid #fff',
      primary: '1px solid #E4672E',
      gray: '1px solid #ffffff26;',
      radius: {
        small: '0.4rem',
        smallHalf: '0.8rem',
        medium: '1.4rem',
        large: '2.4rem',
        full: '100%'
      }
    },
    font: {
      family: "'Nunito Sans', sans-serif",
      semiRegular: 300,
      regular: 400,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      sizes: {
        xsmall: '1.2rem',
        small: '1.4rem',
        medium: '1.6rem',
        large: '1.8rem',
        xlarge: '2.0rem',
        xxlarge: '2.8rem',
        sTitle: '3.8rem',
        Title: '5.0rem'
      }
    },
    colors: {
      primary: '#E4672E',
      white: '#FFFFFF',
      black: '#101010',
      gray: 'rgba(255, 255, 255, 0.4)',
      neutral: '#EBEBEB',
      danger: '#F5365C',
      green: '#00E89A',
      error: '#FF3030',
      secondBlack: '#0A0A0A',
      yellow: '#FCC201',
      hoverBlack: '#FFFFFF0D'
    },
    spacings: {
      xxxsmall: '0.6rem',
      xxsmall: '0.8rem',
      xsmallbtn: '0.9rem',
      xsmall: '1.6rem',
      small: '2.4rem',
      medium: '3.2rem',
      large: '4.0rem',
      xlarge: '4.8rem',
      xxlarge: '5.6rem'
    },
    layers: {
      base: 10,
      menu: 20,
      overlay: 30,
      modal: 40,
      alwaysOnTop: 50
    },
    screen: {
      giant: '1536px',
      huge: '1170px',
      large: '1024px',
      medium: '768px',
      small: '375px'
    }
  } 

  export default theme;