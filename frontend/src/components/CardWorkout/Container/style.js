import styled from "styled-components/native";
import { colors } from "../../../colors.config";

export const ContainerCard = styled.View`
    border-color: ${props => (props.onSelected ? '#FF8434' : 'transparent')};
    border-width: ${props => (props.onSelected ? '2px' : '0px')}; 
    background-color: ${colors.darkGray};
    border-radius: 10px;
    width: 100%;
    height: 100%;
    justify-content: center;
`;

export const ContainerText = styled.View`
    gap: 5px;
    margin-left: 5%;
`;

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    height: 13%;
`;