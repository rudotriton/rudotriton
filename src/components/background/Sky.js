import Star from "components/background/BlinkingStar";
import Mountains from "components/background/Mountains";
import Sun from "components/background/Sun";
import React from "react";
import styled, { keyframes } from "styled-components";

const Pulse = keyframes`
  0% { transform: scale(1, 1); }
  50% { transform: scale(1.5, 1.5); }
  100% { transform: scale(1, 1); }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const BackDrop = styled.div`
  width: 100vw;
  height: 140vh;
  overflow: hidden;
  position: relative;
  z-index: -5;
  background: ${(props) => props.theme.darkPink};
  background: radial-gradient(
    circle,
    ${(props) => props.theme.darkPink} 0%,
    ${(props) => props.theme.darkPurple} 40%,
    ${(props) => props.theme.black} 100%
  );
  animation: 10s ${Pulse} linear infinite;
  transform: translate3d(0, 0, 0);
`;

// Mist in front of Sun and Mountains
const Mist = styled.div`
  width: 100vw;
  height: 0;
  z-index: 25;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 65vh;
  left: 50vw;
  box-shadow: 0 0 200px 20px ${(props) => props.theme.pink};
`;

const Sky = () => (
  <Wrapper>
    <BackDrop />
    <Star />
    <Sun />
    <Mountains />
    <Mist />
  </Wrapper>
);

export default Sky;
