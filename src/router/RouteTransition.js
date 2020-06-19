import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import MountTransition from 'router/MountTransition';

export const RouteTransition = ({ children, exact, path, slide, slideUp }) => (
  <Route exact={exact} path={path}>
    <MountTransition slide={slide} slideUp={slideUp}>
      {children}
    </MountTransition>
  </Route>
);

RouteTransition.defaultProps = {
  children: [],
  exact: false,
  slide: 0,
  slideUp: 0,
  path: undefined,
};

RouteTransition.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
  exact: PropTypes.bool,
  slide: PropTypes.number,
  slideUp: PropTypes.number,
};

export const AnimatedRoutes = ({ children, exitBeforeEnter, initial }) => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Switch location={location} key={location.pathname}>
        {children}
      </Switch>
    </AnimatePresence>
  );
};

AnimatedRoutes.defaultProps = {
  children: [],
  exitBeforeEnter: false,
  initial: false,
};

AnimatedRoutes.propTypes = {
  children: PropTypes.node,
  exitBeforeEnter: PropTypes.bool,
  initial: PropTypes.bool,
};
