import Star from "components/background/Star";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const FlyUp = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }

  10% {
    transform: translate3d(0, 0, 0);
  }

  25% {
    opacity: 1;
  }

  50% {
    transform: translate3d(0, -300px, 0);
    opacity: 0;
  }
`;

const FlyRight = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }

  10% {
    transform: translate3d(0, 0, 0);
  }

  25% {
    opacity: 1;
  }

  50% {
    transform: translate3d(300px, 0, 0);
    opacity: 0;
  }
`;

const FlyDown = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }

  10% {
    transform: translate3d(0, 0, 0);
  }

  25% {
    opacity: 1;
  }

  50% {
    transform: translate3d(0, 300px, 0);
    opacity: 0;
  }
`;

const FlyLeft = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }

  10% {
    transform: translate3d(0, 0, 0);
  }

  25% {
    opacity: 1;
  }

  50% {
    transform: translate3d(-300px, 0, 0);
    opacity: 0;
  }
`;

const cubicBez = "cubic-bezier(0.86, 0.4, 1, 1)";

const Top = styled.div`
  position: absolute;
  width: 2px;
  height: 5px;
  background: white;
  opacity: 0;
  top: calc(${(props) => props.y}vh - 5px);
  left: calc(${(props) => props.x}vw - 1px);
  animation: 6s ${(props) => props.animation} 6s infinite ${cubicBez};
  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

const Bottom = styled.div`
  position: absolute;
  width: 2px;
  height: 5px;
  background: white;
  opacity: 0;
  top: calc(${(props) => props.y}vh + 2px);
  left: calc(${(props) => props.x}vw - 1px);
  animation: 6s ${(props) => props.animation} 6s infinite ${cubicBez};
  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

const Left = styled.div`
  position: absolute;
  width: 5px;
  height: 2px;
  background: white;
  opacity: 0;
  top: calc(${(props) => props.y}vh - 1px);
  left: calc(${(props) => props.x}vw - 5px);
  animation: 6s ${(props) => props.animation} 6s infinite ${cubicBez};
  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

const Right = styled.div`
  position: absolute;
  width: 5px;
  height: 2px;
  background: white;
  opacity: 0;
  top: calc(${(props) => props.y}vh - 1px);
  left: calc(${(props) => props.x}vw + 2px);
  animation: 6s ${(props) => props.animation} 6s infinite ${cubicBez};
  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

const BlinkingStar = () => {
  const [x] = useState(80);
  const [y] = useState(20);

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
