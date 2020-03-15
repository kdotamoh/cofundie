import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { layout, space } from "styled-system";
import { COLORS, H1_SIZE_SM } from "app-constants";

import { Button } from "components/styled";

import heroImage from "assets/images/hero-image.png";

const HeaderStyle = styled.header`
  min-height: 120vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    color: ${COLORS.BLUE};
  }

  @media (max-width: 768px) {
    h1 {
      font-size: ${H1_SIZE_SM}rem;
    }
  }
`;

const Container = styled.div`
  ${layout}
  ${space}

  width: 70%;
  padding: 12rem;

  @media (max-width: 768px) {
    width: 90%;
    padding: 3rem;
  }
`;

const Header = props => {
  return (
    <HeaderStyle>
      <Container>
        <h1>
          Find and co-invest in high return real estate from the comfort of your
          home.
        </h1>
        <Button mt="7rem" px="6rem" py="1.6rem" bg={COLORS.BLUE} color="white">
          Get Started
        </Button>
      </Container>
    </HeaderStyle>
  );
};

Header.propTypes = {};

export default Header;
