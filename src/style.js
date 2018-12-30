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
    background-color: ${props => props.theme.white};
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
  color1: '#FF0082',
  color2: '#CA3AA2',
  color3: '#8D50AA',
  color4: '#4cfff9',
  color5: '#00C1FF',
  color6: '#140035',
  white: '#FFFFFF',
  black: '#000',
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
