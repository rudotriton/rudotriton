import React from 'react';
import styled from 'styled-components';
import HorizontalLine from './HorizontalLine';

const Wrapper = styled.div`
  height: 30vh;
  width: 100vw;
  position: absolute;
  top: 70vh;
  overflow: hidden;
  background: ${props => props.theme.darkBlue};
  background:
    linear-gradient(
      180deg,
      ${props => props.theme.darkBlue}
      0%,
      ${props => props.theme.darkPurple}
      30%,
      ${props => props.theme.black}
      100%
    );
`;

const Mist = styled.div`
  width: 100vw;
  height: 3vh;
  position: absolute;
  background-color: ${props => props.theme.cyan};
  clip-path: polygon(0 0, 100vw 0, 100vw 100%, 50vw 0, 0 100%);
`;

const SVG = styled.svg`
  width: 100vw;
  height: 40vh;
`;

const Line = styled.line`
  stroke: ${props => props.theme.cyan};
  stroke-width: 1;
`;


export default class Land extends React.Component {
  generateVerticals = () => {
    const verticals = [];

    for (let i = -20; i <= 20; i += 1) {
      verticals.push(
        <Line
          key={i}
          x1="50vw"
          y1="0vh"
          x2={`${i * 100}vw`}
          y2="100vh"
        />,
      );
    }
    return verticals;
  }

  generateHorizontals = () => {
    const horizontals = [];

    for (let i = 1; i <= 16; i += 1) {
      horizontals.push(
        <HorizontalLine
          key={i}
          x1="0vw"
          y1="0vh"
          x2="100vw"
          y2="0vh"
          delay={i}
        />,
      );
    }

    return horizontals;
  }

  render() {
    return (
      <Wrapper>
        <Mist />
        <SVG>
          {
            this.generateVerticals()
          }
          {
            this.generateHorizontals()
          }
        </SVG>
      </Wrapper>
    );
  }
}
