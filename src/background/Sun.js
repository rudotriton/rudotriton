import React from 'react';
import styled, { keyframes } from 'styled-components';

const Scan = keyframes`
  0% { background-position: 0 50%; }
`;

const Scanline = keyframes`
  0% { transform: translate3d(0, 200000%, 0); }
`;

const Scanner = styled.div`
  width: 100%;
  height: 100%;

  &::before {
    width: 100%;
    height: 2px;
    z-index: 501;
    background: ${props => props.theme.darkPurple};
    animation: ${Scanline} 6s linear infinite;
  }

  &::before,
  &::after {
    display: block;
    pointer-events: none;
    content: '';
    position: absolute;
  }

  &::after {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 500;
    background:
      linear-gradient(
        to bottom,
        transparent 50%,
        ${props => props.theme.darkPurple} 51%
      );
    background-size: 100% 4px;
    animation: ${Scan} 2s steps(60) infinite;
    will-change: transform;
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
  transform: translate(-50%, -50%);
  background: ${props => props.theme.yellow};
  background: linear-gradient(180deg, ${props => props.theme.yellow} 0%, ${props => props.theme.red} 36%, ${props => props.theme.purple} 77%);
`;

export default () => (
  <>
    <Sun>
      <Scanner />
    </Sun>
  </>
);
