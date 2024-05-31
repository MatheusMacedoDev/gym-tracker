
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { colors } from "../../colors.config";

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    border-radius: 15px;
    justify-content: center;
    align-self: center;
    margin-top: ${props => `${props.marginTop}px` || '0px'};
`;

export const Gradient = styled(LinearGradient).attrs({
    colors: ['rgba(255, 132, 52, 0.39)', 'rgba(251, 102, 20, 0.9)'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
    locations: [ 0.39, 1]
  })`
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius:15px;
    display: flex;
    flex-direction: row;
  `;

  export const ButtonText = styled.Text`
    font-size: 20px;
    color: #FFFFFF;
    font-family: 'Montserrat_700Bold';
  `;