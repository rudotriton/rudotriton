import React, { useState } from 'react';
import styled from 'styled-components';
import Background from 'background/Background';
import Home from 'components/Home';
import { CSSTransition } from 'react-transition-group';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  const [home, setHome] = useState(false);
  const switchHome = () => {
    setHome(!home);
  };
  return (
    <Wrapper>
      <CSSTransition
        in={!home}
        key="bg"
        classNames="slide-down"
        timeout={1000}
        unmountOnExit
      >
        <Background switchHome={switchHome} />
      </CSSTransition>
      <CSSTransition
        in={home}
        key="home"
        classNames="slide-up"
        timeout={1000}
        unmountOnExit
      >
        <Home switchHome={switchHome} />
      </CSSTransition>
    </Wrapper>
  );
};

App.defaultProps = {};

App.propTypes = {};

export default App;
