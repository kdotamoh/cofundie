import React, { useState } from "react";
// import PropTypes from "prop-types";
import Headroom from "react-headroom";
import styled from "styled-components";
import { color, space, layout } from "styled-system";

import { COLORS } from "app-constants";
import { Button } from "components/styled";
import Listing, { Listings } from "components/Listing";
import Navbar from "components/Navbar";
import Header from "components/Header";
import Tabs from "components/Tabs";
import Footer from "components/Footer";

import newsLogos from "assets/images/news-logos.png";
import laptop from "assets/images/laptop.png";
import whiteHouse from "assets/images/white-house.png";
import create from "assets/images/create.png";
import earn from "assets/images/earn.png";
import choose from "assets/images/choose.png";
import pay from "assets/images/pay.png";
import tick from "assets/images/tick.png";

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
      <Listing />
    </Listings>
  );
};

// const Closed = () => {
//   return (
//     <Listings>
//       <Listing />
//     </Listings>
//   );
// };

const SoldOut = () => {
  return (
    <Listings>
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
  ${color}
`;

const NewsLogos = styled.img`
  width: 70%;
`;

const FeatureGrid = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-template-areas: "feature feature";
`;

const Feature = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;
  color: ${COLORS.BLUE};
  font-size: 2.2rem;
  margin-bottom: 6rem;

  img {
    max-width: 10rem;
    margin-right: 1.5rem;
  }

  p {
    margin-right: 5rem;
  }
`;

const ReasonGrid = styled(FeatureGrid)`
  ${layout};
  margin-top: 8rem;
  align-items: center;
  width: 75%;
  color: ${COLORS.BLUE};

  img {
    object-fit: cover;
    width: 50rem;
    height: 30rem;
    border-radius: 6px;
  }
`;

const Reasons = styled.div`
  text-align: left;
  align-items: space-around;
`;

const Reason = styled.p`
  font-weight: 700;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  &:before {
    content: "";
    height: 2rem;
    width: 2rem;
    display: block;
    background: url(${tick}) no-repeat;
    background-size: 1.6rem;
    margin-top: 3px;
    /* background-image:  */
    float: left;
  }
`;

const FlexSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const FlexSectionLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  font-size: 120%;
`;

const FlexSectionRight = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
`;

const LandingPage = props => {
  const [previousTab, setPreviousTab] = useState(0);

  return (
    <LandingPageStyle>
      <Headroom>
        <Navbar />
      </Headroom>
      <Header />
      <main>
        <Section pt="6rem" pb="2rem">
          <h3>As Seen In The News</h3>
          <NewsLogos src={newsLogos} alt="" />
        </Section>
        <Section bg={COLORS.BACKGROUND_LIGHT_BLUE} py="10rem">
          <h3 style={{ marginBottom: "2rem" }}>What We Do</h3>
          <Container width="77%">
            <p>
              In 3-clicks you can become a landlord and enjoy returns from sale
              or rent. Co-invest in real estate developments that use
              alternative building materials that have faster build time and are
              eco-friendly. Its never been this easy to invest in real estate
            </p>
          </Container>
          <Button
            mt="5rem"
            px="6rem"
            py="1.6rem"
            bg={COLORS.BLUE}
            color="white"
          >
            Learn more
          </Button>
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
          <h3 style={{ paddingBottom: "10rem" }}>How It Works</h3>
          <FeatureGrid>
            <Feature>
              <img src={create} alt="" />
              <p>
                Create your Cofundie account and complete your profile using
                valid email &amp; phone numbers
              </p>
            </Feature>
            <Feature>
              <img src={choose} alt="" />
              <p>
                Choose a property to Co-fund, you can get multiple slots in one
                property as well as multiple properties
              </p>
            </Feature>
            <Feature>
              <img src={pay} alt="" />
              <p>
                Choose one of the payment methods &amp; complete payment to
                co-own the property(s)
              </p>
            </Feature>
            <Feature>
              <img src={earn} alt="" />
              <p>Start earning annually on the income from your property</p>
            </Feature>
          </FeatureGrid>
        </Section>
        <Section bg={COLORS.BACKGROUND_MEDIUM_BLUE} py="10rem" color="white">
          <h2 style={{ color: "white", paddingBottom: "10rem" }}>
            Get unprecedented access
          </h2>
          <Container width="85%">
            <FlexSection>
              <FlexSectionLeft>
                <h4 style={{ color: `${COLORS.LIME}`, paddingBottom: "3rem" }}>
                  Diversify your portfolio
                </h4>
                <p>
                  Regardless of your income level, you can now gain access to
                  some of the most lucrative deals in the real estate sector
                  with the potential to generate consistent cashflow and
                  long-term equity build up
                </p>
                <Button
                  mt="5rem"
                  px="6rem"
                  py="1.6rem"
                  bg={COLORS.LIME}
                  color={COLORS.BLUE}
                >
                  Get Started
                </Button>
              </FlexSectionLeft>
              <FlexSectionRight>
                <img src={laptop} alt="" />
              </FlexSectionRight>
            </FlexSection>
          </Container>
        </Section>
        <Section py="10rem">
          <Container width="43%" color={COLORS.BLUE}>
            <h2 style={{ marginBottom: "2.5rem" }}>Why invest with us?</h2>
            <p>
              Every single deal that makes it through to the platform has been
              put through a rigorous due diligence process using the latest
              cutting edge technology. All assets are also insured by our
              reputable insurance partners
            </p>
          </Container>
          <ReasonGrid mt="4rem">
            <img src={whiteHouse} alt="" />
            <Reasons>
              <Reason>All partners are vetted intensively</Reason>
              <Reason>
                Only 5% of deals we are pitched make it to the platform
              </Reason>
              <Reason>
                All properties are built using eco-friendly materials
              </Reason>
              <Reason>We provide the fastest time to ROI</Reason>
            </Reasons>
          </ReasonGrid>
        </Section>
        <Section py="10rem">
          <h2>Testimonials</h2>
        </Section>
        <Section bg={COLORS.BLUE} py="10rem" color="white">
          <Container width="70%">
            <h3 style={{ color: "white" }}>
              Join thousands of Property Owners, Agents and Individuals that
              love using Cofundie.
            </h3>
            <p style={{ paddingTop: "3rem" }}>
              Signing up is easy, and our team will get you started in no time.
            </p>
            <Button
              mt="5rem"
              px="6rem"
              py="1.6rem"
              bg={COLORS.LIME}
              color={COLORS.BLUE}
            >
              Get Started
            </Button>
          </Container>
        </Section>
      </main>
      <Footer />
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
