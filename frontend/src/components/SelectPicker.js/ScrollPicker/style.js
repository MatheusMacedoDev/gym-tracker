import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Gradient = styled(LinearGradient).attrs({
  colors: ["#27242B", "#000000"],
  locations: [1, 1],
})`
  height: 90%;
  width: 90%;
  margin-top: 30px;
`;

export const YearButton = styled.TouchableOpacity`
    height: 70;
    width: "100%";
    padding-top:"6px";
    padding-bottom: "8px";
    align-items: center;
    justify-content: center;
    
`;
