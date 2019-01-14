import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.fontMonospace};
  padding: 50px;
  background: ${props => props.theme.textBoxGradient};
`;

const Box = styled.div`
  font-size: ${props => props.theme.fontSmall};
  position: relative;
  padding: 5rem;
  box-sizing: border-box;
  background: #000;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.white};
  margin-top: 5rem;
  font-size: ${props => props.theme.fontTiny};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: 0.25s ease;

  &:hover {
    border-bottom: 2px solid ${props => props.theme.white};
  }
`;

const Home = () => (
  <Wrapper>
    <Box>
      It seems that this page does not exist yet.
    </Box>
    <StyledLink to="/home">Back home</StyledLink>
  </Wrapper>
);

export default Home;
