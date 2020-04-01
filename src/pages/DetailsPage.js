import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { space } from "styled-system";
import { isEmpty } from "lodash";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import {
  PageStyle,
  Section,
  Container
  // HorizontalScroll
} from "components/layout";
import DealBreakdown from "components/Listings/DealBreakdown";
import { Button } from "components/styled";
import { COLORS } from "app-constants";

const DetailsPageStyle = styled(PageStyle)`
  background-color: rgba(20, 55, 155, 0.02);
`;

const ListingTitle = styled.h3`
  @media (max-width: 768px) {
    font-size: 120%;
  }
`;

export const Image = styled.img`
  ${space}
  border-radius: 4px;
  width: 33.3%;
  height: 18rem;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 80vw;
    height: 22rem;
  }
`;

const ImageGallery = styled.div`
  /* mobile first */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;

  * {
    flex: 0 0 auto;
  }

  @media (min-width: 768px) {
    width: 60vw;
    margin: 0 auto;
    transform: translateY(-3rem);
  }
`;

const SelectedImage = styled.img`
  display: flex;
  border-radius: 6px;
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DetailsContainer = styled(Container)`
  margin: 0 auto;

  @media (max-width) {
  }
`;

const DetailsSection = styled(Section)`
  align-items: flex-start;
  text-align: left;

  ul {
    list-style: none;

    /* li {
      margin-left: 2rem;

      &::before {
        content: ;
      }
    } */
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const DetailsPage = ({ listings, match }) => {
  const [data, setData] = React.useState("loading");
  const [status, setStatus] = React.useState("loading");
  const [selectedImage, setSelectedImage] = React.useState("");

  let { id } = match.params;

  React.useEffect(() => {
    let listing = listings.find(el => el.id === Number(id));
    console.log(listing);
    setData(listing);
    !isEmpty(listing) ? setStatus("loaded") : setStatus("loading");
    !isEmpty(listing)
      ? setSelectedImage(listing.images[0])
      : setSelectedImage("");
  }, [id, listings]);

  return (
    <DetailsPageStyle>
      <Navbar />
      <main>
        {status === "loading" && "Loading..."}
        {status === "loaded" && (
          <>
            <Section mt="4rem">
              <ListingTitle>
                The Place:{" "}
                <span style={{ color: "black" }}>Single Family Unit</span>
              </ListingTitle>
              <small>Cantonment, Accra - Ghana</small>

              <Button
                my="5rem"
                bg={COLORS.LIME}
                color={COLORS.BLUE}
                borderColor={COLORS.BLUE}
                boxShadow="true"
              >
                Join the Waitlist
              </Button>
            </Section>

            <SelectedImage src={selectedImage} />

            <ImageGallery mt="5rem">
              {data.images.map(image => (
                <Image src={image} />
              ))}
              {/* <Image src={house} />
              <Image src={house} />
              <Image src={house} /> */}
            </ImageGallery>
            <DetailsContainer width="60vw">
              <DetailsSection my="5rem" textAlign="left">
                <h3 style={{ marginBottom: "2rem" }}>Summary</h3>
                <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
              </DetailsSection>
            </DetailsContainer>
            <DetailsContainer width="60vw">
              <DetailsSection my="5rem" textAlign="left">
                <h3 style={{ marginBottom: "2rem" }}>Location Analysis</h3>
                <p dangerouslySetInnerHTML={{ __html: data.location }}></p>
              </DetailsSection>
            </DetailsContainer>
            <DetailsContainer width={{ sm: "85vw", lg: "60vw" }}>
              <DetailsSection my="5rem">
                <h3 style={{ marginBottom: "2rem" }}>Deal Breakdown</h3>
                <DealBreakdown />
              </DetailsSection>
            </DetailsContainer>
            <Section>
              <Button
                bg={COLORS.LIME}
                color={COLORS.BLUE}
                borderColor={COLORS.BLUE}
                boxShadow="true"
              >
                Join the Waitlist
              </Button>
            </Section>
            <Section bg={COLORS.BLUE} mt="15rem" py="5rem" color="white">
              <Container width="90%">
                <h3 style={{ color: "white" }}>
                  Join thousands of Property Owners, Agents and Individuals that
                  love using Cofundie.
                </h3>
                <p style={{ paddingTop: "3rem" }}>
                  Signing up is easy, and our team will get you started in no
                  time.
                </p>
                <Button
                  mt="5rem"
                  bg={COLORS.LIME}
                  color={COLORS.BLUE}
                  borderColor={COLORS.BLUE}
                  boxShadow="true"
                >
                  Get Started
                </Button>
              </Container>
            </Section>
          </>
        )}
      </main>
      <Footer />
    </DetailsPageStyle>
  );
};

export default connect(state => ({
  listings: state.listings.data
}))(DetailsPage);
