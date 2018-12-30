import React from 'react';
import styled, { keyframes } from 'styled-components';

const Blink = ({ opacity }) => keyframes`
  0% { background-color: rgba(255, 255, 255, ${opacity}); }
  50% { background-color: transparent; }
  100% { background-color: rgba(255, 255, 255, ${opacity}); }
`;

const StarWrapper = styled.div`
  width: 2px;
  height: 2px;
  position: absolute;
  border-radius: 50%;
  top: ${props => props.y};
  left: ${props => props.x};
  background-color: rgba(255, 255, 255, ${props => props.opacity});
  animation: ${props => props.speed}s ${Blink} infinite cubic-bezier(1, 0.06, 0.78, 0);
  animation-delay: ${props => props.delay / 10}s;
`;

export default props => (
  <StarWrapper {...props} />
);
