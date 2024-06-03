import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Gradient = styled(LinearGradient).attrs({
    colors: ["#1C1A1F", "#000000"],
    locations: [0, 1],
})`
  flex: 1;
  height: 100%;
  width: 100%;
`;
export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    padding: 20px;
    width: 90%;
    align-self: center;
`;