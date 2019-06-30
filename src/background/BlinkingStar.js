import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useInterval from 'hooks/useInterval';
import Star from 'background/Star';

const FlyUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  20% {
    transform: translateY(0);
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateY(-300px);
    opacity: 0;
  }
`;

const FlyRight = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0;
  }

  20% {
    transform: translateX(0);
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateX(300px);
    opacity: 0;
  }
`;

const FlyDown = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  20% {
    transform: translateY(0);
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateY(300px);
    opacity: 0;
  }
`;

const FlyLeft = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0;
  }

  20% {
    transform: translateX(0);
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateX(-300px);
    opacity: 0;
  }
`;

const cubicBez = 'cubic-bezier(0.86, 0.4, 1, 1)';

const Top = styled.div`
  position: absolute;
  width: 2px;
  height: 5px;
  background: white;
  top: calc(${props => props.y}vh - 5px);
  left: calc(${props => props.x}vw - 1px);
  animation: 3s ${props => props.animation} infinite ${cubicBez};
`;

const Bottom = styled.div`
  position: absolute;
  width: 2px;
  height: 5px;
  background: white;
  top: calc(${props => props.y}vh + 2px);
  left: calc(${props => props.x}vw - 1px);
  animation: 3s ${props => props.animation} infinite ${cubicBez};
`;

const Left = styled.div`
  position: absolute;
  width: 5px;
  height: 2px;
  background: white;
  top: calc(${props => props.y}vh - 1px);
  left: calc(${props => props.x}vw - 5px);
  animation: 3s ${props => props.animation} infinite ${cubicBez};
`;

const Right = styled.div`
  position: absolute;
  width: 5px;
  height: 2px;
  background: white;
  top: calc(${props => props.y}vh - 1px);
  left: calc(${props => props.x}vw + 2px);
  animation: 3s ${props => props.animation} infinite ${cubicBez};
`;

const BlinkingStar = () => {
  const [x, setX] = useState(80);
  const [y, setY] = useState(20);
  const changePosition = () => {
    setX(Math.floor(Math.random() * 81) + 10);
    setY(Math.floor(Math.random() * 25) + 10);
  };
  useInterval(() => {
    changePosition();
  }, 3000);

  return (
    <>
      <Star y={y} x={x} />
      <Left animation={FlyLeft} x={x} y={y} />
      <Right animation={FlyRight} x={x} y={y} />
      <Top animation={FlyUp} x={x} y={y} />
      <Bottom animation={FlyDown} x={x} y={y} />
    </>
  );
};

export default BlinkingStar;
