import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "styled-system";

import { COLORS } from "app-constants";
// import useIntersect from "hooks/useIntersect";

import mexicanHouse from "assets/images/house.png";

const ListingStyle = styled.div.attrs(props => ({
  style: {
    // opacity: props.ratio || 0.75
  }
}))``;

const Card = styled.div`
  border-radius: 6px;
  background-color: white;

  img {
    border-radius: 6px;
    object-fit: contain;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const ListingInfo = styled.div`
  text-align: left;
  font-weight: 700;
  padding: 2rem 4rem;

  display: grid;
  align-items: space-between;
  grid-template-columns: 59% 2% 39%;
  grid-template-rows: auto;
  grid-template-areas: "detail divider figure";
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const ListingFigure = styled.div`
  ${color}

  margin-bottom: 1rem;
  margin-left: 2rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0.5rem;
  }
`;

const ListingLabel = styled.span`
  ${color}

  margin-bottom: 1rem;
  width: fit-content;
  border-radius: 4px;
  display: block;
  padding: 0.5rem 2rem;
  color: ${props => props.color};
  background-color: ${props => props.bg};
`;

const ListingLocation = styled.p`
  text-align: left;
`;

const ListingName = styled.p`
  text-align: left;
  font-weight: 700;
  font-size: 125%;
`;

// const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);
// const thresholds = [];
// for (let i = 75; i < 100; i++) {
//   thresholds.push(Number((i * 0.01).toFixed(2)));
// }
// console.log(thresholds);

const Listing = props => {
  // const [ref, entry] = useIntersect({
  //   threshold: buildThresholdArray()
  //   // threshold: thresholds
  // });
  return (
    <ListingStyle
      style={{ marginBottom: "6rem" }}
      // ref={ref}
      // ratio={entry.intersectionRatio}
    >
      <ListingName>
        <span style={{ color: `${COLORS.BLUE}` }}>The Place:</span> Single
        Family Unit
      </ListingName>
      <ListingLocation style={{ marginBottom: "2rem" }}>
        Cantonment, Accra-Ghana
      </ListingLocation>

      <Card>
        <img src={mexicanHouse} alt="" />

        <ListingInfo>
          <div>
            <ListingLabel color={COLORS.BLUE} bg={COLORS.LIME}>
              Hold Period
            </ListingLabel>
            <ListingLabel color={COLORS.LIME} bg={COLORS.BLUE}>
              Projected Returns
            </ListingLabel>
            <ListingLabel color={COLORS.BLUE} bg={COLORS.BACKGROUND_LIGHT_BLUE}>
              Structure
            </ListingLabel>
          </div>
          <div>
            <ListingFigure>9 Months</ListingFigure>

            <ListingFigure>20%</ListingFigure>

            <ListingFigure>Debt</ListingFigure>
          </div>
        </ListingInfo>
      </Card>
    </ListingStyle>
  );
};

Listing.propTypes = {};

export default Listing;
