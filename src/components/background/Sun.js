import React from "react";
import styled, { keyframes } from "styled-components";

// based on parent height
const scan = keyframes`
  0% { transform: translate3d(0, 80000%, 0); }
`;

const spanFromTop = (from, to) => keyframes`
  from {
    transform: translate3d(0, ${from}%, 0);
  }
  to {
    transform: translate3d(0, ${to}%, 0);
  }
`;

const Scanner = styled.div`
  width: 100%;
  height: 100%;

  &::before {
    display: block;
    pointer-events: none;
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    z-index: 501;
    background: ${(p) => p.theme.scanline};
    animation: ${scan} 6s linear infinite;
    transform: translate3d(0, 0, 0);
    @media (prefers-reduced-motion) {
      animation: none;
    }
  }
`;

const Sun = styled.div`
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  position: absolute;
  overflow: hidden;
  top: 65vh;
  left: 50vw;
  box-shadow: 0 0 14rem ${(p) => p.theme.lightPink},
    0 0 5rem ${(p) => p.theme.lightPink}, 0 0 2rem ${(p) => p.theme.lightPink},
    0 0 1rem ${(p) => p.theme.lightPink};
  transform: translate3d(-50%, -50%, 0);
  background: ${(p) => p.theme.yellow};
  background: linear-gradient(
    180deg,
    ${(p) => p.theme.yellow} 0%,
    ${(p) => p.theme.red} 36%,
    ${(p) => p.theme.purple} 77%
  );
`;

const Scanlines = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    ${(p) => p.theme.scanline} 50%,
    ${(p) => p.theme.scanline} 100%
  );
  background-size: 100% 1%;
  animation: ${(p) => spanFromTop(p.from, p.to)} 8s linear infinite;
  transform: translate3d(0, 0, 0);
  @media (prefers-reduced-motion) {
    animation: none;
    transform: translate3d(0, ${(p) => p.from}%, 0);
  }
`;

// scanlines - two elements the height of the sun that alternate moving over it

export default () => (
  <Sun>
    <Scanner />
    <Scanlines from={-200} to={-100} />
    <Scanlines from={-100} to={0} />
  </Sun>
);
