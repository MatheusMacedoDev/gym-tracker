import styled from 'styled-components/native';

export const ExerciseSerieLabel = styled.View`
    flex-direction: row;
    gap: 16px;
    margin-bottom: ${props =>
        props.marginBottom ? props.marginBottom : '0px'};
    align-self: flex-end;
`;
