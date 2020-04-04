import Museo700 from "./Museo 700.woff2";
import Museo500 from "./Museo 500.woff2";
import Museo300 from "./Museo 300.woff2";

export default `
  @font-face {
    font-family: Museo;
    src: local(Museo),
      url(${Museo700}) format('otf');
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: Museo;
    src: local(Museo),
      url(${Museo500}) format('otf');
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: Museo;
    src: local(Museo),
      url(${Museo300}) format('otf');
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }
`;
