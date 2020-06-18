import React, { useState } from 'react';
import styled from 'styled-components';
import Github from 'icons/Github';
import Signature from 'components/Signature';
import StyledLink from 'components/StyledLink';
import { v4 as uuidv4 } from 'uuid';

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
  margin: 5px;
  padding: 5rem;
  position: relative;

  &::before {
    background: ${(props) => props.theme.brandGradient};
    bottom: 0;
    content: '';
    left: 0;
    margin: -5px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
`;

const Home = () => {
  const [elem, setElems] = useState([<Signature key="1" />]);
  const toggleClass = () => {
    setElems([]);
    setElems(<Signature key={uuidv4()} />);
  };
  return (
    <Wrapper>
      <Box>
        Hi, my name is Raigo and I am learning to become a web developer and a
        designer.
        <div
          tabIndex={0}
          role="button"
          onClick={toggleClass}
          onKeyPress={toggleClass}
        >
          {elem}
        </div>
      </Box>
      <Github />
      <StyledLink destination="/">Back to animation</StyledLink>
    </Wrapper>
  );
};

Home.propTypes = {};

export default Home;
