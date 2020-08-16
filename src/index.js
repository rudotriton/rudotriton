import Favicons from "components/Favicons";
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "router/AppRouter";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./style";

const jsx = (
  <ThemeProvider theme={theme}>
    <>
      <Favicons />
      <GlobalStyle />
      <AppRouter />
    </>
  </ThemeProvider>
);

ReactDOM.render(jsx, document.getElementById("root"));
