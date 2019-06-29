import React from 'react';
import {
  HashRouter, Route, Switch,
} from 'react-router-dom';
import BackGround from 'background/Background';
import Home from 'components/Home';
import NotFoundPage from 'components/NotFoundPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const appear = (pathname, node, appears) => {
  console.log('appear', pathname, node, appears);
};

const AppRouter = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Route render={({ location }) => (
      <TransitionGroup>
        {console.log(location)}
        <CSSTransition
          key={location.pathname}
          // appear
          timeout={300}
          classNames="slide"
          // onEnter={(node, appears) => appear(location.pathname, node, appears)}
        >
          <Switch location={location}>
            <Route exact path="/" component={BackGround} />
            <Route exact path="/home" component={Home} />
            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
    />
  </HashRouter>
);

export default AppRouter;
