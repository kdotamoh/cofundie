import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "styled-system";

import { COLORS } from "app-constants";

import mexicanHouse from "assets/images/house.png";

const ListingStyle = styled.div`
  /* width: 30vw; */
  /* height: 70vh; */
  border-radius: 6px;
  background-color: white;

  img {
    border-radius: 6px;
    object-fit: contain;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

// const ListingDetails = styled.div`
//   display: flex;
//   flex-direction: row;

//   div {
//     display: flex;
//     flex-direction: column;
//   }
// `;

// const ListingLabels = styled.div`
//   width: 55%;
//   border-right: 1px solid black;
// `;

// const ListingFigures = styled.div`
//   text-align: left;
//   padding: 2rem;
// `;

const ListingInfo = styled.div`
  text-align: left;
  font-weight: 700;
  padding: 2rem 4rem;

  display: grid;
  align-items: space-between;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto;
  grid-template-areas: "detail figure";
  align-items: center;
`;

const ListingFigure = styled.div`
  ${color}

  margin-bottom: 1rem;
  margin-left: 2rem;
  font-size: 2rem;
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

const Listing = props => {
  return (
    <div style={{ marginBottom: "6rem" }}>
      <ListingName>
        <span style={{ color: `${COLORS.BLUE}` }}>The Place:</span> Single
        Family Unit
      </ListingName>
      <ListingLocation style={{ marginBottom: "2rem" }}>
        Cantonment, Accra-Ghana
      </ListingLocation>

      <ListingStyle>
        <img src={mexicanHouse} alt="" />

        <ListingInfo>
          <ListingLabel color={COLORS.BLUE} bg={COLORS.LIME}>
            Hold Period
          </ListingLabel>
          <ListingFigure>9 Months</ListingFigure>

          <ListingLabel color={COLORS.LIME} bg={COLORS.BLUE}>
            Projected Returns
          </ListingLabel>
          <ListingFigure>20%</ListingFigure>

          <ListingLabel color={COLORS.BLUE} bg={COLORS.BACKGROUND_LIGHT_BLUE}>
            Structure
          </ListingLabel>
          <ListingFigure>Debt</ListingFigure>
        </ListingInfo>
      </ListingStyle>
    </div>
  );
};

export const Listings = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 1.5%;
  grid-template-rows: auto;
  grid-template-areas: "feature feature";
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10rem;
`;

Listing.propTypes = {};

export default Listing;
