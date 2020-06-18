import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Background from 'components/background/Background';
import Home from 'components/Home';

const AppRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route component={Home} path="/home" exact />
      <Route component={Background} path="/" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
