import { createGlobalStyle } from "styled-components";
import fonts from "assets/fonts";

import {
  H1_SIZE,
  H2_SIZE,
  H2_SIZE_SM,
  H3_SIZE,
  H3_SIZE_SM,
  COLORS
} from "app-constants";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Museo";
  }

  html {
    font-size: 62.5%;
    height: 100vh;
  }

  h1 {
    font-size: ${H1_SIZE}rem;
    color: ${COLORS.BLUE}
  }

  h2 {
    font-size: ${H2_SIZE}rem;
    color: ${COLORS.BLUE}
  }

  /* @media (max-width: 768px) {
    h2 {
      font-size: ${H2_SIZE_SM}rem;
    }
  } */
  
  h3 {
    font-size: ${H3_SIZE}rem;
    color: ${COLORS.BLUE}
  }

  @media (max-width: 768px) {
    h2 {
      font-size: ${H2_SIZE_SM}rem;
    }

    h3 {
      font-size: ${H3_SIZE_SM}rem;
    }
  }

  ${fonts}

  body {
     /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
       "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
       sans-serif; */
    font-family: "Museo";
    color: #3d3d3d;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
    font-size: 1.8rem;
    line-height: 1.3;;
    min-height: 100vh;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

/* 
  a {
    color:;
    text-decoration: underline;
  }

  import fonts */

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    text-align: center;
  }




  // #root {
    //   height: 100vh;
    // }

    // .App {
    //   min-height: 100vh;
    // }
`;
