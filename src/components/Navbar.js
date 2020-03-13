import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

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

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    > * {
      /* &:not(:last-child) { */
      margin-right: 5rem;
      /* } */
    }
  }
`;

const Navbar = props => {
  return (
    <NavbarStyle>
      <img src={logo} alt="" />
      <ul>
        <li>About</li>
        <li>FAQ</li>
        <li>Realsights Blog</li>
        <li>Get Started</li>
        <li>Sign in</li>
      </ul>
    </NavbarStyle>
  );
};

Navbar.propTypes = {};

export default Navbar;
