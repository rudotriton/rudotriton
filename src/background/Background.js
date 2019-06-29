import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Land from './Land';
import Sky from './Sky';
import Text from './Text';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  transform: translateY(0);
  transition: all 1000ms linear;

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

const Background = ({ switchHome }) => (
  <Wrapper>
    <Sky />
    <Land />
    <Text switchHome={switchHome} />
  </Wrapper>
);

Background.propTypes = {
  switchHome: PropTypes.func.isRequired,
};

export default Background;
