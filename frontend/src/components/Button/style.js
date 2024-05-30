
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    width: 80%;
    height: 60px;
    border-radius: 15px;
    justify-content: center;
    align-self: center;
`;

export const Gradient = styled(LinearGradient).attrs({
    colors: ['#FF8434', '#FB6614'],
    locations: [0.39, 1]
  })`
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius:15px;
    display: flex;
    flex-direction: row;
    gap: 10px;
  `;

  export const ButtonText = styled.Text`
    font-size: 20px;
    color: #FFFFFF;
    font-family: 'Montserrat_700Bold'
  `;