import styled from "styled-components/native";
import { colors } from "../../colors.config";

export const Link = styled.Text`
  font-family: "Montserrat_400Regular";
  font-size: 18px;
  color: ${colors.orange};
  margin-top: ${props => `${props.marginTop}px` || '0px'};
  margin-bottom: ${props => `${props.marginBottom}px` || '0px'};
  margin-left: ${props => `${props.marginLeft}%` || '0%'};
`;
