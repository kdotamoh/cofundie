import React from "react";
import styled from "styled-components";
import { color, layout } from "styled-system";

import { COLORS } from "app-constants";

const ListingInfo = styled.div`
  /* ${layout} */
  text-align: left;
  font-weight: 700;
  padding: 2rem 4rem;
  background-color: white;
  border-radius: 4px;
  width: 100%;

  display: grid;
  align-items: space-between;
  grid-template-columns: 59% 2% 39%;
  grid-template-rows: auto;
  grid-template-areas: "detail divider figure";
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    grid-template-columns: 59% 2% 39%;
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

const Divider = styled.div`
  grid-area: divider;
  border-left: 2px solid ${COLORS.BLUE};
  height: 100%;
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

const DealBreakdown = () => {
  return (
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
      <Divider />
      <div>
        <ListingFigure>9 Months</ListingFigure>

        <ListingFigure>20%</ListingFigure>

        <ListingFigure>Debt</ListingFigure>
      </div>
    </ListingInfo>
  );
};

export default DealBreakdown;
