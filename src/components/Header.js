import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { layout, space } from "styled-system";
import { COLORS } from "app-constants";

import { Button } from "components/styled";

import heroImage from "assets/images/hero-image.png";

const HeaderStyle = styled.header`
  min-height: 120vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    width: 70%;
    color: ${COLORS.BLUE};
  }
`;

const Container = styled.div`
  ${layout}
  ${space}
`;

const Header = props => {
  return (
    <HeaderStyle>
      <Container px="12rem" pt="12rem">
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
