import styled from "styled-components/native";
import { colors } from "../../../colors.config";

export const ContainerExerciseCard = styled.View`
    background-color: ${props => props.disabledTrue ? '#361E0E' :  colors.darkGray};
    border-radius: 10px;
    height: 50px;
    width: 100%;
    flex-direction: row;
    border: red;
    margin-top: ${props => props.marginTop ? `${props.marginTop}` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}` : '0px'};
    border: ${props => props.disabledTrue ? colors.orange : null};
`;

export const ContainerIconTrash = styled.View`
    justify-content: center;
    height: 100%;
    width: 20%;
    align-items: center;
`;
export const ContainerTitleExerciseCard = styled.View`
    justify-content: center;
    width: 80%;
    padding-left: 5%;
`;