import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import AppRouter from 'router/AppRouter';
import Favicons from 'components/Favicons';
import { GlobalStyle, theme } from './style';

const jsx = (
  <ThemeProvider theme={theme}>
    <>
      <Favicons />
      <GlobalStyle />
      <AppRouter />
    </>
  </ThemeProvider>
);

ReactDOM.render(jsx, document.getElementById('root'));
