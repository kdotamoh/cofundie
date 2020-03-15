import React from "react";

import Listings from "./Listings";

const SoldOut = () => {
  const listings = [1, 3];
  return <Listings listings={listings} />;
};

export default SoldOut;
