import React from "react";
import styled from "styled-components";

import { COLORS } from "app-constants";

import logo from "assets/images/cofundie-logo.png";
import facebook from "assets/images/facebook.svg";
import instagram from "assets/images/instagram.svg";
import twitter from "assets/images/twitter.svg";

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15rem;
`;

const FooterGrid = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 30% 20% 20% 30%;
  grid-template-rows: auto;
  grid-template-areas: "col col col col";
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: unset;
    text-decoration: none;
  }

  small {
    font-size: 14px;
    font-weight: 500;
  }
`;

const LinkHead = styled.h4`
  font-size: 120%;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Copyright = styled.p`
  margin-top: 10rem;
  margin-bottom: 7rem;
  font-weight: 500;
  font-size: 130%;
  color: ${COLORS.BLUE};
`;

const Logo = styled.img`
  width: 14rem;
  margin-bottom: 2rem;
`;

const Images = styled.div`
  width: 70%;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterStyle>
      <FooterGrid>
        <Links>
          <Logo src={logo} alt="" />
          <small>19 Banana street, East Legon Accra, Ghana</small>
          <small>info@cofundie.com +233 50 169 3352</small>
          <Images>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </Images>
        </Links>
        <Links>
          <LinkHead>Quick Links</LinkHead>
          <a href="#/">About Us</a>
          <a href="#/">Contact Us</a>
          <a href="#/">FAQs</a>
          <a href="#/">Blog</a>
        </Links>
        <Links>
          <LinkHead>Resources</LinkHead>
          <a href="#/">Privacy policy</a>
          <a href="#/">Terms of services</a>
          <a href="#/">RSS Feeds</a>
          <a href="#/">Legal</a>
        </Links>
        <Links style={{ alignItems: "center" }}>
          <LinkHead>Your wealth building partners</LinkHead>
          <span>Your wealth building partners</span>
          <span>Invest in real estate simply with us</span>

          <span
            style={{
              fontWeight: "700",
              color: `${COLORS.BLUE}`,
              marginTop: "2rem"
            }}
          >
            We are trustworthy
          </span>
          <span>Growing your money is our business</span>
        </Links>
      </FooterGrid>
      <Copyright>
        Cofundie Company Limited, {year}. All rights reserved.
      </Copyright>
    </FooterStyle>
  );
};

export default Footer;
