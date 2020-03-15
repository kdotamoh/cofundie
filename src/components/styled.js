import styled from "styled-components";
import { space, color, layout } from "styled-system";

// import { COLORS } from "app-constants";

export const Button = styled.button`
  ${layout}
  ${space}
  ${color}

  background-color: ${props => props.bg};
  border-color: ${props => (props.borderColor ? props.borderColor : props.bg)};
  border-radius: 2px;
  color: ${props => props.color};
  font-size: 2.4rem;
  padding: 1.6rem 6rem;

  @media (max-width: 768px) {
  padding: 1.2rem 3rem;
    font-size: 1.6rem
  }
`;
