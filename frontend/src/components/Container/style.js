import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Gradient = styled(LinearGradient).attrs({
    colors: ["#27242B", "#000000"],
    locations: [0, 1],
})`
  flex: 1;
  height: 100%;
  width: 100%;
`;
export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: 20px;
    width: 90%;
    align-self: center;
`;