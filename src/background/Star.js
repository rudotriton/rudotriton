import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Blink = () => keyframes`
  0% { transform: translate(-50%, -50%) scale(0); }
  25% { transform: translate(-50%, -50%) scale(0.3); }
  50% { transform: translate(-50%, -50%) scale(0); }
`;

const Svg = styled.svg`
  animation: 6s ${Blink} 6s infinite ease-in-out;
  position: absolute;
  height: 100px;
  width: 100px;
  left: ${props => props.x}vw;
  top: ${props => props.y}vh;
  transform: translate(-50%, -50%) scale(0);
  fill: white;
  z-index: -4;
`;

const Star = ({ x, y }) => (
  <Svg x={x} y={y} viewBox="0 0 100 100">
    <path d="M50,0 C50,37 63,50 100,50 C63,50 50,63 50,100 C50,63 37,50 0,50 C37,50 50,37 50,0 Z" />
  </Svg>
);

Star.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Star;
