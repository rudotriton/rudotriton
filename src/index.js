import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from 'App';
import Favicons from 'components/Favicons';
import { GlobalStyle, theme } from './style';

const jsx = (
  <ThemeProvider theme={theme}>
    <>
      <Favicons />
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>
);

ReactDOM.render(jsx, document.getElementById('root'));
