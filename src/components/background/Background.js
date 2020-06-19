import React from 'react';
import styled from 'styled-components';
import StyledLink from 'components/StyledLink';
import Typed from 'react-typed';
import Land from './Land';
import Sky from './Sky';
import Text from './Text';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  transform: translateY(0);
  transition: transform 1000ms linear;

  &.slide-down-enter {
    transform: translateY(-100%);
  }

  &.slide-down-enter-active {
    transform: translateY(0);
  }

  &.slide-down-exit {
    transform: translateY(0);
  }

  &.slide-down-exit-active {
    transform: translateY(-100%);
  }
`;

const Background = () => (
  <Wrapper>
    <Sky />
    <Land />
    <Text />
    <StyledLink to="/home">
      <Typed
        strings={['Continue', 'Proceed', 'Carry On', 'Advance', 'Go On']}
        typeSpeed={100}
        backSpeed={100}
        backDelay={8000}
        loop
      />
    </StyledLink>
  </Wrapper>
);

Background.propTypes = {};

export default Background;
