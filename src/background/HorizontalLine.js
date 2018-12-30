import React from 'react';
import styled, { keyframes } from 'styled-components';

const MoveToBottom = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(30vh); }
`;

const StyledLine = styled.line`
  stroke: ${props => props.theme.color4};
  stroke-width: 1;
  animation: 2s ${MoveToBottom} infinite cubic-bezier(1, 0.06, 0.78, 0);
  animation-delay: ${props => props.delay / 10}s;
`;

export default ({
  x1, x2, y1, y2, delay,
}) => (
  <StyledLine
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    delay={delay}
  />
);
