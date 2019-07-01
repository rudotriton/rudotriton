import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Github from 'icons/Github';

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
  position: absolute;
  top: 0;
  transition: transform 1000ms linear;

  &.slide-up-enter {
    transform: translateY(100%);
  }

  &.slide-up-enter-active {
    transform: translateY(0);
  }

  &.slide-up-exit {
    transform: translateY(0);
  }

  &.slide-up-exit-active {
    transform: translateY(100%);
  }
`;

const Box = styled.div`
  font-size: ${props => props.theme.fontSmall};
  position: relative;
  padding: 5rem;
  box-sizing: border-box;
  background: #000;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -5px;
    background: ${props => props.theme.brandGradient};
  }
`;

const StyledLink = styled.button`
  color: ${props => props.theme.white};
  background: ${props => props.theme.black};
  outline: none;
  border: none;
  margin-top: 5rem;
  cursor: pointer;
  font-family: ${props => props.theme.fontMonospace};
  font-size: ${props => props.theme.fontTiny};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: 0.25s ease;

  &:hover {
    border-bottom: 2px solid ${props => props.theme.white};
  }
`;

const Home = ({ switchHome }) => (
  <Wrapper>
    <Box>
      Hi, my name is Raigo and I am learning to become a web developer and a designer.
    </Box>
    <Github />
    <StyledLink
      type="button"
      onClick={switchHome}
    >
    Back to animation
    </StyledLink>
  </Wrapper>
);

Home.propTypes = {
  switchHome: PropTypes.func.isRequired,
};

export default Home;
