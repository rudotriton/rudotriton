import Signature from "components/Signature";
import Github from "icons/Github";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.fontMonospace};
  padding: 5rem;
`;

const Box = styled.div`
  align-items: flex-end;
  background: #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.fontSmall};
  padding: 5rem;
  position: relative;

  &::before {
    background: ${(props) => props.theme.brandGradient};
    box-shadow: 2rem 2rem 2rem #242048;
    bottom: 0;
    content: "";
    left: 0;
    margin: -5px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
`;

const Home = () => (
  <Wrapper>
    <Box>
      Hi, I&apos;m Raigo and I am a web developer and a designer.
      <Signature />
    </Box>
    <Github />
  </Wrapper>
);

Home.propTypes = {};

export default Home;
