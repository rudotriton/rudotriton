import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';

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
  background: ${(props) => props.theme.brandGradient};
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
  box-shadow: 1rem 1rem 2rem #553396;
`;

const FourOhFour = () => {
  return (
    <Wrapper>
      <Box>This place is reserved for a future project :)</Box>
      <StyledLink to="/home">Back Home</StyledLink>
    </Wrapper>
  );
};

FourOhFour.defaultProps = {};

FourOhFour.propTypes = {};

export default FourOhFour;
