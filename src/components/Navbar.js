import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "components/styled";

import { COLORS } from "app-constants";

import logo from "assets/images/cofundie-logo.png";

const NavbarStyle = styled.nav`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 10rem;

  font-size: 2.2rem;

  img {
    height: 5rem;
  }

  a {
    color: unset;
    text-decoration: none;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;

    > * {
      /* &:not(:last-child) { */
      margin-right: 5rem;
      /* } */
    }
  }

  @media (max-width: 768px) {
    ul {
      display: none;
    }
  }
`;

const NavButton = styled(Button)`
  padding: 1rem 4rem;
`;

const Navbar = props => {
  return (
    <NavbarStyle>
      <img src={logo} alt="" />
      <ul>
        <li>
          <a href="#/">About</a>
        </li>
        <li>
          <a href="#/">FAQ</a>
        </li>
        <li>
          <a href="#/">Realsights Blog</a>
        </li>
        <NavButton bg="white" borderColor={COLORS.BLUE} color={COLORS.BLUE}>
          <a href="#/">Get Started</a>
        </NavButton>
        <li>
          <a href="#/">Sign in</a>
        </li>
      </ul>
    </NavbarStyle>
  );
};

Navbar.propTypes = {};

export default Navbar;
