import styled from "styled-components";
import { space, color, layout } from "styled-system";

import { COLORS } from "app-constants";

export const Button = styled.button`
  ${layout}
  ${space}
  ${color}

  background-color: ${props => props.bg};
  border-color: ${props => props.bg};
  border-radius: 2px;
  color: ${props => props.color};
  font-size: 2.4rem;
`;
