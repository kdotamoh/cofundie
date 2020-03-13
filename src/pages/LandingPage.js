import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Listing, { Listings } from "components/Listing";
import Tabs from "components/Tabs";

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

const LandingPage = props => {
  const [previousTab, setPreviousTab] = useState(0);

  return (
    <LandingPageStyle>
      <nav>
        <ul>
          <li>About</li>
          <li>FAQ</li>
          <li>Realsights Blog</li>
          <li>Get Started</li>
          <li>Sign In</li>
        </ul>
      </nav>
      <header>
        <h1>
          Find and co-invest in high return real estate from the comfort of your
          home.
        </h1>
        <button>Get Started</button>
      </header>
      <main>
        <section>
          <h3>As Seen In The News</h3>
        </section>
        <section>
          <h3>What We Do</h3>
          <p>
            In 3-clicks you can become a landlord and enjoy returns from sale or
            rent. Co-invest in real estate developments that use alternative
            building materials that have faster build time and are eco-friendly.
            Its never been this easy to invest in real estate
          </p>
          <button>Learn more</button>

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
        </section>
        <section>
          <h3>How It Works</h3>
        </section>
        <section>
          Get unprecedented access
          <p>
            Regardless of your income level, you can now gain access to some of
            the most lucrative deals in the real estate sector with the
            potential to generate consistent cashflow and long-term equity build
            up
          </p>
          <button>Get Started</button>
        </section>
        <section>
          <h2>Why invest with us?</h2>
          <p>
            Every single deal that makes it through to the platform has been put
            through a rigorous due diligence process using the latest cutting
            edge technology. All assets are also insured by our reputable
            insurance partners
          </p>
        </section>
        <section>
          <h2>Testimonials</h2>
        </section>
        <section>
          <p>
            Join thousands of Property Owners, Agents and Individuals that love
            using Cofundie.
          </p>
        </section>
      </main>
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
