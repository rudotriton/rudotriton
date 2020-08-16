import React from "react";
import styled, { keyframes } from "styled-components";
import media from "util/mediaQueries";

const Flicker = keyframes`
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    opacity: 1
  }

  20%,
  24%,
  55% { opacity: 0; }
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
  z-index: 1000;
`;

const LastNameWrap = styled.div`
  animation: ${FadeIn} 2s linear;
  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

const LastName = styled.span`
  font-size: ${(p) => p.theme.fontLarge};
  font-family: ${(p) => p.theme.fontBoldItalic}, sans-serif;
  font-style: italic;
  background: ${(props) => props.theme.reflectiveChrome};
  background-clip: text;
  letter-spacing: -1px;
  color: transparent;
  ${(props) => media.phone`font-size: ${props.theme.fontMedium};`}
  text-transform: uppercase;

  &::after {
    background: none;
    content: "jerva";
    left: 0;
    top: 0;
    z-index: -1;
    position: absolute;
    text-shadow: 0 0 40px ${(props) => props.theme.pink}, -1px 1px white,
      1px 1px white, 1px -1px white, -1px -1px white;
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

const FirstNameWrap = styled.div`
  padding: 30px 75px;
  left: 10%;
  bottom: 35%;
  position: absolute;
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  animation: ${SlideAppear} 4s 2s linear forwards;
  @media (prefers-reduced-motion) {
    animation: none;
    clip-path: none;
  }
  ${media.phone`
    left: 3%;
    bottom: 30%;
  `}
`;

const FirstName = styled.span`
  font-size: ${(p) => p.theme.fontLarge};
  font-family: ${(p) => p.theme.fontCursive};
  font-weight: 1000;
  color: ${(p) => p.theme.white};
  ${media.phone`
    font-size: ${(p) => p.theme.fontMedium};
  `}
  text-transform: capitalize;
  &:after {
    content: "Raigo";
    top: 50%;
    left: 50%;
    position: absolute;
    z-index: -1;
    text-shadow: 0 0 40px #00fff0, 0 0 30px #00fff0, 0 0 20px #00fff0,
      0 0 10px #00fff0;
    animation: ${Flicker} 3s alternate 6s infinite;
    transform: translate3d(-50%, -50%, 0);
    @media (prefers-reduced-motion) {
      animation: none;
    }
`;

const Text = () => (
  <Wrapper>
    <FirstNameWrap>
      <FirstName>raigo</FirstName>
    </FirstNameWrap>
    <LastNameWrap>
      <LastName>jerva</LastName>
    </LastNameWrap>
  </Wrapper>
);

Text.propTypes = {};

export default Text;
