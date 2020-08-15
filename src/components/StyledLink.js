import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "util/mediaQueries";

const Wrapper = styled(Link)`
  font-size: ${(props) => props.theme.fontSmall};
  font-family: ${(props) => props.theme.fontMonospace};
  color: white;
  position: absolute;
  border: none;
  cursor: pointer;
  top: 90vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  text-decoration: none;
  transition: 0.25s filter;
  z-index: 50;
  background-color: black;
  border-bottom: 2px solid transparent;
  padding: 5px 5px 5px 10px;
  ${media.phone`top: 80vh;`}
  outline: none;

  &:focus {
    filter: drop-shadow(-0.6rem -0.6rem 0.5rem #ff545c)
            drop-shadow(-0.6rem 0.6rem 0.5rem #bd00ae)
            drop-shadow(0.6rem -0.6rem 0.5rem #ff3f82)
            drop-shadow(0.6rem 0.6rem 0.5rem #6b00c3);
    }
  }
  &:hover {
    filter: drop-shadow(-0.6rem -0.6rem 0.5rem #ff545c)
            drop-shadow(-0.6rem 0.6rem 0.5rem #bd00ae)
            drop-shadow(0.6rem -0.6rem 0.5rem #ff3f82)
            drop-shadow(0.6rem 0.6rem 0.5rem #6b00c3);
    }
  }
`;

const StyledLink = ({ to, children }) => (
  <Wrapper tabIndex="0" to={to}>
    {children}
  </Wrapper>
);

StyledLink.defaultProps = {
  children: [],
};

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default StyledLink;
