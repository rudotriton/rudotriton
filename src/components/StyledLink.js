import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'util/mediaQueries';
import PropTypes from 'prop-types';

const Wrapper = styled(Link)`
  font-size: ${(props) => props.theme.fontSmall};
  font-family: ${(props) => props.theme.fontMonospace};
  color: white;
  position: absolute;
  border: none;
  outline: none;
  cursor: pointer;
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

const StyledLink = ({ destination, children }) => (
  <Wrapper to={destination}>{children}</Wrapper>
);

StyledLink.defaultProps = {
  children: [],
};

StyledLink.propTypes = {
  destination: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default StyledLink;
