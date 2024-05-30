import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";


export default Gradient = styled(LinearGradient).attrs({
    colors: ['#FF8434', '#FB6614'],
    locations: [0.39, 1]
  })`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 30px
  `;
