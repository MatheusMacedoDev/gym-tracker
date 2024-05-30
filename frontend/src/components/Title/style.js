import styled from "styled-components/native";

export const Title = styled.Text`
    font-family: 'Montserrat_700Bold';
    font-size: ${props => `${props.fontSize || '36px'}`};
    color: white;
    align-self: center;
    margin-top: ${props => `${props.marginTop}`};
`;