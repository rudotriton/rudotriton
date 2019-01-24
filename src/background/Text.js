import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
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

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, +40%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  margin-top: 40px;
  top: 30vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;

const TitleWrap = styled.div`
  animation: ${FadeIn} 2s linear;
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
  ${props => media.phone`font-size: ${props.theme.fontMedium};`}

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

const SlideAppear = keyframes`
  0% {
    clip-path:
      polygon(
        0 0,
        0 0,
        0 100%,
        0 100%
      );
  }

  100% {
    clip-path:
      polygon(
        0 0,
        100% 0,
        100% 100%,
        0 100%
      );
  }
`;

const SubTitleWrap = styled.div`
  padding: 30px 75px;
  left: 10%;
  bottom: 35%;
  position: absolute;
  clip-path:
    polygon(
      0 0,
      0 0,
      0 100%,
      0 100%
    );
  animation: ${SlideAppear} 4s 2s linear forwards;
  ${media.phone`left: 3%; bottom: 30%;`}
`;

const SubTitle = styled.h2`
  font-size: ${props => props.theme.fontLarge};
  font-family: ${props => props.theme.fontCursive};
  font-weight: bold;
  color: ${props => props.theme.white};
  animation: ${props => Flicker(props.theme.cyan)} 1.5s 6s infinite alternate;
  ${props => media.phone`font-size: ${props.theme.fontMedium};`}
`;

const StyledLink = styled(Link)`
  font-size: ${props => props.theme.fontSmall};
  font-family: ${props => props.theme.fontMonospace};
  color: white;
  position: absolute;
  top: 90vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  text-decoration: none;
  transition: 0.25s ease;
  z-index: 50;
  background-color: black;
  border-bottom: 2px solid transparent;
  padding: 5px 5px 5px 10px;
  ${media.phone`top: 80vh;`}

  &:hover {
    border-bottom: 2px solid white;
  }
`;

const Text = () => (
  <>
    <Wrapper>
      <SubTitleWrap>
        <SubTitle>Raigo</SubTitle>
      </SubTitleWrap>
      <TitleWrap>
        <Title>JERVA</Title>
      </TitleWrap>
    </Wrapper>
    <StyledLink to="/home">
      <Typed
        strings={['Continue', 'Proceed', 'Carry On', 'Advance', 'Go On']}
        typeSpeed={100}
        backSpeed={100}
        backDelay={8000}
        loop
      />
    </StyledLink>
  </>
);

export default Text;
