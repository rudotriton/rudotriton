import React from 'react';
import {
  Router, Route, Switch,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../components/Home';
import BackGround from '../background/Background';
import NotFoundPage from '../components/NotFoundPage';

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={BackGround} />
      <Route path="/home" component={Home} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
