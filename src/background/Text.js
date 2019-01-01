import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from '../util/mediaQueries';

const Flicker = color => keyframes`
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    text-shadow:
      0 0 40px ${color},
      0 0 40px ${color},
      0 0 40px ${color},
      0 0 10px ${color};
  }

  20%,
  24%,
  55% { text-shadow: none; }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 30vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontLarge};
  font-family: ${props => props.theme.fontBoldItalic}, sans-serif;
  font-style: italic;
  background: ${props => props.theme.darkPink};
  background: ${props => props.theme.reflectiveChrome};
  -webkit-background-clip: text;
  letter-spacing: -1px;
  color: transparent;
  -webkit-text-stroke: 2px white;
  ${props => media.phone`font-size: ${props.theme.fontMedium}`}

  &::after {
    background: none;
    content: 'JERVA';
    left: 0;
    top: 0;
    z-index: -1;
    position: absolute;
    text-shadow: 0 0 40px ${props => props.theme.pink};
  }
`;

const SubTitle = styled.h2`
  left: 25%;
  bottom: 50%;
  position: absolute;
  font-size: ${props => props.theme.fontLarge};
  font-family: ${props => props.theme.fontCursive};
  color: ${props => props.theme.white};
  text-shadow:
    0 0 40px ${props => props.theme.cyan},
    0 0 40px ${props => props.theme.cyan},
    0 0 40px ${props => props.theme.cyan},
    0 0 10px ${props => props.theme.cyan};
  animation: ${props => Flicker(props.theme.cyan)} 1.5s infinite alternate;
  ${props => media.phone`font-size: ${props.theme.fontMedium}`}
`;

const Text = () => (
  <Wrapper>
    <SubTitle>Raigo</SubTitle>
    <Title>JERVA</Title>
  </Wrapper>
);

export default Text;
