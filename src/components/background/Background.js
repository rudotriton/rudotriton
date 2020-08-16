import StyledLink from "components/StyledLink";
import React from "react";
import Typed from "react-typed";
import styled from "styled-components";
import Land from "./Land";
import Sky from "./Sky";
import Text from "./Text";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Background = () => (
  <Wrapper>
    <Sky />
    <Land />
    <Text />
    <StyledLink to="/home">
      <Typed
        strings={["Continue", "Proceed", "Carry On", "Advance", "Go On"]}
        typeSpeed={100}
        backSpeed={100}
        backDelay={8000}
        loop
      />
    </StyledLink>
  </Wrapper>
);

Background.propTypes = {};

export default Background;
