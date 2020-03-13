import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import heroImage from "assets/hero-image.png";

const HeaderStyle = styled.header`
  min-height: 120vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Header = props => {
  return (
    <HeaderStyle>
      <h1>
        Find and co-invest in high return real estate from the comfort of your
        home.
      </h1>
      <button>Get Started</button>
    </HeaderStyle>
  );
};

Header.propTypes = {};

export default Header;
