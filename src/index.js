import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './style';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routes/AppRouter';

const jsx = (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  </ThemeProvider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
