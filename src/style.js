import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: ${props => props.theme.font};

    @media only screen and (max-width: ${props => props.theme.bpMedium}) {
      font-size: 56.25%;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    background-color: ${props => props.theme.black};
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
  cyan: '#4cfff9',
  darkBlue: 'rgba(0, 39, 143, 1)',
  darkPurple: 'rgba(48, 1, 108, 1)',
  darkestPurple: 'rgba(30, 0, 77, 1)',
  white: '#FFFFFF',
  black: '#000',
  glitch1: '#FF0082',
  glitch2: 'rgba(0, 39, 143, 1)',
  font: 'Montserrat',
  fontLarge: '3rem',
  fontMedium: '2rem',
  fontSmall: '1.5rem',
  fontTiny: '1.2rem',
  bpLarge: '850px',
  bpMedium: '550px',
  bpSmall: '460px',
  bpTiny: '400px',
};
