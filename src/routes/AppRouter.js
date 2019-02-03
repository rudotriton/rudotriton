import React from 'react';
import {
  HashRouter, Route, Switch,
} from 'react-router-dom';
import Home from '../components/Home';
import BackGround from '../background/Background';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={BackGround} />
      <Route exact path="/home" component={Home} />
      <Route component={NotFoundPage} />
    </Switch>
  </HashRouter>
);

export default AppRouter;
