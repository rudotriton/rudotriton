import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const MoveToBottom = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(30vh); }
`;

const StyledLine = styled.line`
  stroke: ${props => props.theme.cyan};
  stroke-width: 1;
  animation: 4s ${MoveToBottom} infinite cubic-bezier(1, 0.06, 0.78, 0);
  animation-delay: ${props => props.delay / 4}s;
`;

export default function HorizontalLine({
  x1, x2, y1, y2, delay,
}) {
  return (
    <StyledLine
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      delay={delay}
    />
  );
}

HorizontalLine.propTypes = {
  x1: PropTypes.string.isRequired,
  y1: PropTypes.string.isRequired,
  x2: PropTypes.string.isRequired,
  y2: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};
