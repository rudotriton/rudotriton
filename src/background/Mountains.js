import React from 'react';
import styled, { keyframes } from 'styled-components';

const Flicker = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const CubicBez = (param) => {
  if (param === '1') {
    return 'cubic-bezier(0.89,-0.19, 0, 1.68)';
  } if (param === '2') {
    return 'cubic-bezier(0.06, 1.36, 0.98,-0.47)';
  }
  return 'cubic-bezier(0.18, 1.09, 0.29, 0.43)';
};

const LeftMountain = styled.div`
  position: absolute;
  width: 48vw;
  height: 10vh;
  z-index: ${props => props.zindex};
  top: 60vh;
  background: ${props => props.theme.black};
  background:
    linear-gradient(
      0deg,
      ${props => (props.color === '1' ? props.theme.glitch1 : props.color === '2' ? props.theme.glitch2 : props.theme.black)}
      0%,
      ${props => (props.color === '1' ? props.theme.glitch1 : props.color === '2' ? props.theme.glitch2 : props.theme.darkestPurple)}
      100%
    );
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
  /* animation:
    ${props => (props.color === '2' ? '0.2s' : '0.1s')}
    ${Flicker}
    ${props => CubicBez(props.color)}
    infinite; */
`;

const RightMountain = styled.div`
  position: absolute;
  width: 48vw;
  height: 10vh;
  z-index: ${props => props.zindex};
  top: 60vh;
  right: 0;
  background: ${props => props.theme.black};
  background:
    linear-gradient(
      0deg,
      ${props => (props.color === '1' ? props.theme.glitch1 : props.color === '2' ? props.theme.glitch2 : props.theme.black)}
      0%,
      ${props => (props.color === '1' ? props.theme.glitch1 : props.color === '2' ? props.theme.glitch2 : props.theme.darkestPurple)}
      100%
    );
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
  /* animation:
    ${props => (props.color === '2' ? '0.1s' : '0.2s')}
    ${Flicker}
    ${props => CubicBez(props.color)}
    infinite; */
`;

const Mountains = () => (
  <>
    <LeftMountain zindex="10" />
    {/* <LeftMountain
      color="1"
      zindex="9"
    />
    <LeftMountain
      color="2"
      zindex="9"
    /> */}
    <RightMountain zindex="10" />
    {/* <RightMountain
      color="1"
      zindex="9"
    />
    <RightMountain
      color="2"
      zindex="9"
    /> */}
  </>
);

export default Mountains;
