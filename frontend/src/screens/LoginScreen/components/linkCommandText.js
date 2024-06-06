import styled from "styled-components/native";
import { colors } from "../../../colors.config";

export const LinkCommandText = styled.Text`
  font-family: "Montserrat_400Regular";
  font-size: 18px;
  color: ${props => props.colorText ? props.colorText : colors.white};
  text-align: ${props => `${props.textAlign}` || 'left'};
`;
