import styled from "styled-components/native";
import { colors } from "../../../colors.config";

export const ContainerExerciseCard = styled.View`
    background-color: ${colors.darkGray};
    border-radius: 10px;
    height: 10%;
    width: 100%;
    flex-direction: row;
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