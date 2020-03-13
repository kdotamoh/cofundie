import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, space, layout } from "styled-system";

import { COLORS } from "app-constants";
import Listing, { Listings } from "components/Listing";
import Navbar from "components/Navbar";
import Header from "components/Header";
import Tabs from "components/Tabs";

import newsLogos from "assets/news-logos.png";

const Available = () => {
  return (
    <Listings>
      <Listing />
      <Listing />
      <Listing />
    </Listings>
  );
};

const ComingSoon = () => {
  return (
    <Listings>
      <Listing />
      <Listing />
    </Listings>
  );
};

const Closed = () => {
  return (
    <Listings>
      <Listing />
    </Listings>
  );
};

const SoldOut = () => {
  return (
    <Listings>
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
    </Listings>
  );
};

const Section = styled.section`
  ${color}
  ${space}
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

const Container = styled.div`
  ${layout}
`;

const NewsLogos = styled.img`
  width: 70%;
`;

const LandingPage = props => {
  const [previousTab, setPreviousTab] = useState(0);

  const year = new Date().getFullYear();

  return (
    <LandingPageStyle>
      <Navbar />
      <Header />
      <main>
        <Section pt="6rem" pb="2rem">
          <h3>As Seen In The News</h3>
          <NewsLogos src={newsLogos} alt="" />
        </Section>
        <Section bg={COLORS.BACKGROUND_LIGHT_BLUE} py="10rem">
          <h3>What We Do</h3>
          <Container width="70%">
            <p>
              In 3-clicks you can become a landlord and enjoy returns from sale
              or rent. Co-invest in real estate developments that use
              alternative building materials that have faster build time and are
              eco-friendly. Its never been this easy to invest in real estate
            </p>
          </Container>
          <button>Learn more</button>
        </Section>
        <Section bg={COLORS.BACKGROUND_LIGHT_BLUE}>
          <Tabs
            currentTab={previousTab}
            onChange={setPreviousTab}
            items={[
              {
                label: "TAB",
                key: 1,
                component: <ComingSoon />
              },
              {
                label: "TAB",
                key: 2,
                component: <Available />
              },
              {
                label: "TAB",
                key: 3,
                component: <SoldOut />
              }
            ]}
          />
        </Section>
        <Section bg={COLORS.BACKGROUND_LIME} py="10rem">
          <h3>How It Works</h3>
        </Section>
        <Section bg={COLORS.BACKGROUND_MEDIUM_BLUE} py="10rem">
          Get unprecedented access
          <p>
            Regardless of your income level, you can now gain access to some of
            the most lucrative deals in the real estate sector with the
            potential to generate consistent cashflow and long-term equity build
            up
          </p>
          <button>Get Started</button>
        </Section>
        <Section py="10rem">
          <h2>Why invest with us?</h2>
          <p>
            Every single deal that makes it through to the platform has been put
            through a rigorous due diligence process using the latest cutting
            edge technology. All assets are also insured by our reputable
            insurance partners
          </p>
        </Section>
        <Section py="10rem">
          <h2>Testimonials</h2>
        </Section>
        <Section bg={COLORS.BLUE} py="10rem">
          <h3>
            Join thousands of Property Owners, Agents and Individuals that love
            using Cofundie.
          </h3>
          <p>
            Signing up is easy, and our team will get you started in no time.
          </p>
          <button>Get Started</button>
        </Section>
      </main>
      <footer>Cofundie Company Limited, {year}. All rights reserved.</footer>
    </LandingPageStyle>
  );
};

LandingPage.propTypes = {};

const LandingPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* background-color: red; */
`;

export default styled(LandingPage)``;
