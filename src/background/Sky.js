import React from 'react';
import styled, { keyframes } from 'styled-components';
import Star from './Star';
import Sun from './Sun';
import Mountains from './Mountains';

const Pulse = keyframes`
  0% { transform: scale(1, 1); }
  50% { transform: scale(1.5, 1.5); }
  100% { transform: scale(1, 1); }
`;

const BackDrop = styled.div`
  width: 100vw;
  height: 140vh;
  background: ${props => props.theme.darkPink};
  background: radial-gradient(circle, ${props => props.theme.darkPink} 0%, ${props => props.theme.darkPurple} 40%, ${props => props.theme.black} 100%);
  animation: 10s ${Pulse} linear infinite;
`;

// Mist in front of Sun and Mountains
const Mist = styled.div`
  width: 100vw;
  height: 0;
  z-index: 15;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 65vh;
  left: 50vw;
  box-shadow: 0 0 200px 20px ${props => props.theme.pink};
`;

export default class Sky extends React.Component {
  generateStars = () => {
    const stars = [];
    for (let i = 0; i < 80; i += 1) {
      stars.push(
        <Star
          key={i}
          delay={i}
          speed={Math.floor(Math.random() * 5 + 4)}
          opacity={Math.random()}
          x={`${Math.floor(Math.random() * 100 + 1)}vw`}
          y={`${Math.floor(Math.random() * 60 + 1)}vh`}
        />,
      );
    }
    return stars;
  }

  render() {
    return (
      <>
        <BackDrop />
        {
          this.generateStars()
        }
        <Sun />
        <Mountains />
        <Mist />
      </>
    );
  }
}
