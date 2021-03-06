import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  height: 30vh;
  width: 100vw;
  z-index: 20;
  position: absolute;
  top: 70vh;
  overflow: hidden;
  background: ${(p) => p.theme.darkBlue};
  background: linear-gradient(
    180deg,
    ${(p) => p.theme.darkBlue} 0%,
    ${(p) => p.theme.darkPurple} 30%,
    ${(p) => p.theme.black} 100%
  );
`;

const MergedHorizon = styled.div`
  width: 100vw;
  height: 20px;
  position: absolute;
  background-color: ${(p) => p.theme.cyan};
  clip-path: polygon(0 0, 100vw 0, 100vw 100%, 50vw 0, 0 100%);
`;

const SVG = styled.svg`
  width: 100vw;
  height: 40vh;
  filter: drop-shadow(0 0 1rem ${(p) => p.theme.blue})
    drop-shadow(0 0 0.5rem ${(p) => p.theme.blue});
`;

const Line = styled.line`
  stroke: ${(p) => p.theme.cyan};
  stroke-width: 2;
`;

const MoveToBottom = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, 30vh, 0); }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  position: absolute;
  top: 0;

  box-shadow: 0 0 2rem ${(p) => p.theme.blue}, 0 0 1rem ${(p) => p.theme.blue},
    0 0 0.5rem ${(p) => p.theme.blue};
  background-color: ${(p) => p.theme.cyan};
  animation: ${MoveToBottom} 4s infinite ${(props) => -props.delay / 4}s
    cubic-bezier(1, 0.06, 0.78, 0);
  transform: translate3d(0, 0, 0);
  @media (prefers-reduced-motion) {
    animation: none;
    transform: translate3d(0, ${(p) => (p.delay ** 1.9 / 30) * 7.5}vh, 0);
  }
`;

const Land = () => {
  const generateVerticals = () => {
    const verticals = [];

    for (let i = -30; i <= 30; i += 1) {
      verticals.push(
        <Line key={i} x1="50%" y1="0" x2={`${i * 1500}`} y2="1000" />
      );
    }
    return verticals;
  };

  const generateHorizontals = () => {
    const horizontals = [];

    for (let i = 0; i <= 15; i += 1) {
      horizontals.push(<HorizontalLine key={i} delay={i} />);
    }

    return horizontals;
  };

  return (
    <Wrapper>
      <MergedHorizon />
      <SVG>{generateVerticals()}</SVG>
      {generateHorizontals()}
    </Wrapper>
  );
};

export default Land;
