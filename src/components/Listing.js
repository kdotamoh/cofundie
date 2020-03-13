import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import mexicanHouse from "assets/house.png";

const ListingStyle = styled.div`
  width: 30vw;
  /* height: 70vh; */
  border-radius: 6px;
  border: 1px solid black;

  img {
    border-radius: 6px;
    object-fit: contain;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const ListingDetails = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const ListingLabels = styled.div`
  width: 55%;
  border-right: 1px solid black;
`;

const ListingFigures = styled.div`
  text-align: left;
  padding: 20px;
`;

const ListingFigure = styled.div``;

const ListingLabel = styled.span`
  width: fit-content;
  display: block;
  padding: 5px;
  background-color: blue;
`;

const Listing = props => {
  return (
    <ListingStyle>
      <img src={mexicanHouse} alt="" />

      <ListingDetails>
        <ListingLabels>
          <ListingLabel>Hold</ListingLabel>
          <ListingLabel>Projected</ListingLabel>
          <ListingLabel>Structure</ListingLabel>
        </ListingLabels>
        <ListingFigures>
          <ListingFigure>9</ListingFigure>
          <ListingFigure>20</ListingFigure>
          <ListingFigure>Debt</ListingFigure>
        </ListingFigures>
      </ListingDetails>
    </ListingStyle>
  );
};

export const Listings = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

Listing.propTypes = {};

export default Listing;
