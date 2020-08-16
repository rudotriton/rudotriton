import FourOhFour from "components/404";
import Background from "components/background/Background";
import Home from "components/Home";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes, RouteTransition } from "./RouteTransition";

const AppRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <AnimatedRoutes>
      <RouteTransition exact path="/">
        <Background />
      </RouteTransition>
      <RouteTransition exact path="/home">
        <Home />
      </RouteTransition>
      <RouteTransition>
        <FourOhFour />
      </RouteTransition>
    </AnimatedRoutes>
  </BrowserRouter>
);

export default AppRouter;
