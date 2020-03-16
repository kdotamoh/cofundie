import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "components/styled";

import { COLORS } from "app-constants";

import logo from "assets/images/cofundie-logo.png";
import menu from "assets/images/svg/hamburger.svg";

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
    padding: 1rem;
    > * {
      margin-right: unset;
    }

    img {
    }
  }
`;

const NavButton = styled(Button)`
  padding: 1rem 4rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
  }
`;

const Navbar = props => {
  const [width, setWidth] = React.useState(0);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      // Clean up
      window.removeEventListener("resize", updateWindowDimensions);
    };
  });

  return (
    <NavbarStyle>
      {width > 900 ? (
        <>
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
        </>
      ) : (
        <>
          <img style={{ width: "8rem", height: "auto" }} src={logo} alt="" />
          <NavButton bg="white" borderColor={COLORS.BLUE} color={COLORS.BLUE}>
            <a href="#/">Get Started</a>
          </NavButton>
          <img style={{ width: "2.5rem", height: "auto" }} src={menu} alt="" />
        </>
      )}
    </NavbarStyle>
  );
};

Navbar.propTypes = {};

export default Navbar;
