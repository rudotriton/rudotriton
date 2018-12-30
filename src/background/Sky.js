import React from 'react';
import styled, { keyframes } from 'styled-components';
import Star from './Star';

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
  animation: 20s ${Pulse} linear infinite;
`;

const Sun = styled.div`
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  position: absolute;
  top: 65vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.yellow};
  background: linear-gradient(180deg, ${props => props.theme.yellow} 0%, ${props => props.theme.red} 36%, ${props => props.theme.purple} 77%);
`;

const Mist = styled.div`
  width: 100vw;
  height: 0;
  z-index: 5;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 65vh;
  left: 50vw;
  box-shadow: 0 0 200px 80px ${props => props.theme.pink};
`;

const LeftMountain = styled.div`
  position: absolute;
  width: 48vw;
  height: 10vh;
  top: 60vh;
  background: ${props => props.theme.black};
  background: linear-gradient(0deg, ${props => props.theme.black} 0%, ${props => props.theme.darkestPurple} 100%);
  clip-path:
    polygon(
      0 0%,
      1% 5%,
      3% 11%,
      6% 18%,
      8% 18%,
      11% 15%,
      13% 11%,
      16% 5%,
      18% 11%,
      20% 15%,
      22% 11%,
      25% 7%,
      29% 18%,
      31% 21%,
      33% 25%,
      36% 28%,
      39% 32%,
      41% 34%,
      44% 37%,
      48% 39%,
      50% 43%,
      53% 43%,
      56% 47%,
      60% 51%,
      64% 60%,
      67% 55%,
      71% 60%,
      76% 70%,
      82% 78%,
      89% 89%,
      100% 100%,
      0 100%
    );
`;

const RightMountain = styled.div`
  position: absolute;
  width: 48vw;
  height: 10vh;
  top: 60vh;
  right: 0;
  background: ${props => props.theme.black};
  background: linear-gradient(0deg, ${props => props.theme.black} 0%, ${props => props.theme.darkestPurple} 100%);
  clip-path:
    polygon(
      0 0%,
      1% 5%,
      3% 11%,
      6% 10%,
      8% 10%,
      11% 5%,
      13% 11%,
      16% 15%,
      18% 11%,
      20% 15%,
      22% 11%,
      25% 9%,
      29% 18%,
      31% 21%,
      33% 25%,
      36% 28%,
      39% 32%,
      41% 34%,
      44% 33%,
      48% 30%,
      50% 35%,
      53% 39%,
      56% 46%,
      60% 51%,
      64% 60%,
      67% 65%,
      71% 69%,
      76% 70%,
      82% 78%,
      89% 89%,
      100% 100%,
      0 100%
    );
  transform: rotateY(180deg);
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
        <LeftMountain />
        <RightMountain />
        <Mist />
      </>
    );
  }
}
