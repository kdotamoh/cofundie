import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Router } from "@reach/router";
import GlobalStyles from "./GlobalStyles";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";

function App() {
  return (
    <>
      <GlobalStyles />

      <Router>
        <Switch>
          <Route path="/details/:id">
            <DetailsPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
