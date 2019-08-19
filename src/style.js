import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: ${(props) => props.theme.font};
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    background: ${(props) => props.theme.black};
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

export const theme = {
  pink: '#FF0082',
  darkPink: 'rgba(143, 0, 138, 1)',
  red: 'rgba(253, 29, 29, 1)',
  purple: 'rgba(131, 58, 180, 1)',
  yellow: 'rgba(252, 176, 69, 1)',
  cyan: 'rgba(0, 255, 250, 1)',
  // cyan: '#00C1FF',
  darkBlue: 'rgba(0, 39, 143, 1)',
  darkPurple: 'rgba(48, 1, 108, 1)',
  darkestPurple: 'rgba(30, 0, 77, 1)',
  white: '#FFFFFF',
  grey: '#888',
  black: '#000',
  glitch1: '#FF0082',
  glitch2: 'rgba(0, 39, 143, 1)',
  reflectiveChrome: 'linear-gradient(180deg, rgba(158,11,255,1) 18%, rgba(11,18,185,1) 24%, rgba(0,212,255,1) 30%, rgba(255,255,255,1) 38%, rgba(255,255,255,1) 49%, rgba(38,38,38,1) 49%, rgba(201,18,207,1) 56%, rgba(0,123,255,1) 64%, rgba(255,255,255,1) 75%)',
  textBoxGradient: 'linear-gradient(159deg, rgba(70, 160, 249, 1) 0%, rgba(184,5,246,1) 50%, rgba(255,0,130,1) 100%)',
  brandGradient: 'linear-gradient(270deg, #5e00bc, #ff4c93, #ff567f, #ff6363);',
  fontCursive: 'Mr De Haviland',
  fontBoldItalic: 'Chakra Petch',
  fontMonospace: 'Share Tech Mono',
  fontLarge: '15rem',
  fontMedium: '10rem',
  fontSmall: '2.5rem',
  fontTiny: '1.8rem',
  bpLarge: '850px',
  bpMedium: '550px',
  bpSmall: '460px',
  bpTiny: '400px',
};
