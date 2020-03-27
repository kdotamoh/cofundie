import React from "react";
// import PropTypes from "prop-types";
// import Headroom from "react-headroom";
import styled from "styled-components";
import { color, space, layout } from "styled-system";
import lazysizes from "lazysizes"; // eslint-disable-line

import { COLORS } from "app-constants";
import { Button } from "components/styled";

import Available from "components/Listings/Available";
import Closed from "components/Listings/Closed";
import ComingSoon from "components/Listings/ComingSoon";
import SoldOut from "components/Listings/SoldOut";

import Navbar from "components/Navbar";
import Header from "components/Header";
import Tabs from "components/Tabs";
import Footer from "components/Footer";

import newsLogos from "assets/images/news-logos.png";
import laptop from "assets/images/macbook.png";
import laptopM from "assets/images/macbook-mobile.png";
import laptopT from "assets/images/macbook-tablet.png";
import whiteHouse from "assets/images/white-house.png";
import whiteHouseM from "assets/images/white-house-mobile.png";
import whiteHouseT from "assets/images/white-house-tablet.png";
import create from "assets/images/create.png";
import earn from "assets/images/earn.png";
import choose from "assets/images/choose.png";
import pay from "assets/images/pay.png";
import tick from "assets/images/tick.png";
import placeholder from "assets/images/placeholder.png";

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

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-template-areas: "feature feature";

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-areas: "feature";
  }
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

  @media (max-width: 768px) {
    font-size: 1.6rem;
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

  @media (max-width: 768px) {
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

const Reasons = styled.div`
  text-align: left;
  width: 75%;

  @media (max-width: 768px) {
    margin: 5rem auto;
  }
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

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: auto;
  grid-template-areas:
    "heading image"
    "paragraph image"
    "button image";
  align-items: center;
  text-align: left;

  p {
    grid-area: paragragh;
  }

  img {
    grid-area: picture;
    width: 100%;
  }

  h4 {
    grid-area: heading;
    font-size: 125%;
  }

  button {
    grid-area: button;
  }

  @media (max-width: 900px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "heading"
      "paragraph"
      "button"
      "image";

    text-align: center;

    img {
      margin-top: 5rem;
    }
  }
`;

const Testimonials = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Testimonial = styled.div`
  display: flex;
  color: ${COLORS.BLUE};
  flex-direction: row;
  border-radius: 6px;
  align-items: flex-start;
  padding: 2rem 4rem;
  box-shadow: 0 0.6px 2.1px rgba(0, 0, 0, 0.017),
    0 1.4px 5px rgba(0, 0, 0, 0.024), 0 2.6px 9.4px rgba(0, 0, 0, 0.03),
    0 4.7px 16.8px rgba(0, 0, 0, 0.036), 0 8.8px 31.3px rgba(0, 0, 0, 0.043),
    0 21px 75px rgba(0, 0, 0, 0.06);
  width: 35vw;
  margin: 1.5rem;

  img {
    border-radius: 50%;
    width: 10rem;
    margin-right: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    img {
      width: 7.5rem;
    }
    width: 85vw;
  }
`;

const TestimonialName = styled.span`
  font-weight: 700;
  display: block;
`;

const TestimonialPosition = styled.span`
  display: block;
  text-align: left;
  margin-bottom: 1.5rem;
`;

const TestimonialQuote = styled.p`
  text-align: left;
`;

const LandingPage = props => {
  const [previousTab, setPreviousTab] = React.useState(0);

  return (
    <LandingPageStyle>
      {/* <Headroom> */}
      <Navbar />
      {/* </Headroom> */}
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
          <Button mt="5rem" bg={COLORS.BLUE} color="white">
            Learn more
          </Button>
        </Section>
        <Section bg={COLORS.BACKGROUND_LIGHT_BLUE}>
          <Tabs
            currentTab={previousTab}
            onChange={setPreviousTab}
            items={[
              {
                label: "Available",
                key: 1,
                component: <Available />
              },
              {
                label: "Coming Soon",
                key: 2,
                component: <ComingSoon />
              },
              {
                label: "Closed",
                key: 3,
                component: <Closed />
              },
              {
                label: "Sold Out",
                key: 4,
                component: <SoldOut />
              }
            ]}
          />
        </Section>
        <Section bg={COLORS.BACKGROUND_LIME} py="10rem">
          <h3 style={{ paddingBottom: "10rem" }}>How It Works</h3>
          <FeatureGrid>
            <Feature>
              <img data-src={create} className="lazyload" alt="" />
              <p>
                Create your Cofundie account and complete your profile using
                valid email &amp; phone numbers
              </p>
            </Feature>
            <Feature>
              <img data-src={choose} className="lazyload" alt="" />
              <p>
                Choose a property to Co-fund, you can get multiple slots in one
                property as well as multiple properties
              </p>
            </Feature>
            <Feature>
              <img data-src={pay} className="lazyload" alt="" />
              <p>
                Choose one of the payment methods &amp; complete payment to
                co-own the property(s)
              </p>
            </Feature>
            <Feature>
              <img data-src={earn} className="lazyload" alt="" />
              <p>Start earning annually on the income from your property</p>
            </Feature>
          </FeatureGrid>
        </Section>
        <Section bg={COLORS.BACKGROUND_MEDIUM_BLUE} py="10rem" color="white">
          <h2 style={{ color: "white", paddingBottom: "10rem" }}>
            Get unprecedented access
          </h2>
          <Container width="85%">
            <GridSection>
              <div>
                <h4 style={{ color: `${COLORS.LIME}`, paddingBottom: "3rem" }}>
                  Diversify your portfolio
                </h4>
                <p>
                  Regardless of your income level, you can now gain access to
                  some of the most lucrative deals in the real estate sector
                  with the potential to generate consistent cashflow and
                  long-term equity build up
                </p>
                <Button mt="5rem" bg={COLORS.LIME} color={COLORS.BLUE}>
                  Get Started
                </Button>
              </div>
              <div>
                <img
                  data-src={laptop}
                  data-srcset={`${laptopM} 200w, ${laptopT} 484w, ${laptop} 900w`}
                  className="lazyload"
                  alt=""
                />
              </div>
            </GridSection>
          </Container>
        </Section>
        <Section py="10rem">
          <Container width="80%" color={COLORS.BLUE}>
            <h2 style={{ marginBottom: "2.5rem" }}>Why invest with us?</h2>
            <p>
              Every single deal that makes it through to the platform has been
              put through a rigorous due diligence process using the latest
              cutting edge technology. All assets are also insured by our
              reputable insurance partners
            </p>
          </Container>
          <ReasonGrid mt="4rem">
            <img
              data-src={whiteHouse}
              data-srcset={`${whiteHouseM} 200w, ${whiteHouseT} 484w, ${whiteHouse} 900w`}
              className="lazyload"
              alt=""
            />
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
        <Section pb="10rem">
          <h2 style={{ marginBottom: "3rem" }}>Testimonials</h2>

          <Testimonials>
            <Testimonial>
              <img data-src={placeholder} className="lazyload" alt="" />
              <div>
                <TestimonialName>Kelvin Nyame</TestimonialName>
                <TestimonialPosition>CEO - MeQasa</TestimonialPosition>
                <TestimonialQuote>
                  "This company is going to change the way the real estate
                  industry operates."
                </TestimonialQuote>
              </div>
            </Testimonial>
            <Testimonial>
              <img data-src={placeholder} className="lazyload" alt="" />
              <div>
                <TestimonialName>Kelvin Nyame</TestimonialName>
                <TestimonialPosition>CEO - MeQasa</TestimonialPosition>
                <TestimonialQuote>
                  "This company is going to change the way the real estate
                  industry operates."
                </TestimonialQuote>
              </div>
            </Testimonial>
            <Testimonial>
              <img data-src={placeholder} className="lazyload" alt="" />
              <div>
                <TestimonialName>Kelvin Nyame</TestimonialName>
                <TestimonialPosition>CEO - MeQasa</TestimonialPosition>
                <TestimonialQuote>
                  "This company is going to change the way the real estate
                  industry operates."
                </TestimonialQuote>
              </div>
            </Testimonial>
          </Testimonials>
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
            <Button mt="5rem" bg={COLORS.LIME} color={COLORS.BLUE}>
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
