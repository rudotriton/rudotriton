import PropTypes from "prop-types";
import React from "react";
import styled, { keyframes } from "styled-components";

const Blink = () => keyframes`
  0% { transform: translate3d(-50%, -50%, 0) scale(0) rotate(0deg);}
  25% { transform: translate3d(-50%, -50%, 0) scale(0.3) rotate(90deg); }
  50% { transform: translate3d(-50%, -50%, 0) scale(0) rotate(180deg); }
  100% { transform: translate3d(-50%, -50%, 0) scale(0) rotate(360deg);}

`;

const Svg = styled.svg`
  animation: 6s ${Blink} 6s infinite linear;
  position: absolute;
  height: 100px;
  width: 100px;
  left: ${(props) => props.x}vw;
  top: ${(props) => props.y}vh;
  transform: translate3d(-50%, -50%, 0) scale(0);
  fill: white;
  z-index: -4;
  @media (prefers-reduced-motion) {
    animation: none;
  }
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
