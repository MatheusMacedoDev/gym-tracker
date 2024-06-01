import styled from "styled-components/native";
import { colors } from "../../colors.config";

export const Link = styled.Text`
  font-family: "Montserrat_400Regular";
  font-size: 18px;
  width: 100%;
  text-align: ${props => `${props.textAlign}`};
  color: ${colors.orange};
  margin-top: ${props => `${props.marginTop}` || '0px'};
`;
