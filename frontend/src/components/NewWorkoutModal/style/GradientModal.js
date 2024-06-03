import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export default GradientModal = styled(LinearGradient).attrs({
    colors: ["#1C1A1F", "#000000"],
    locations: [1, 1],
})`
  flex: 1;
  height: 100%;
  width: 100%;
  border-radius: 15px
`;