import styled from "styled-components/native";

export const Title = styled.Text`
    font-family: 'Montserrat_700Bold';
    font-size: ${props => `${props.fontSize || '36px'}`};
    color: #FFFFFF;
    align-self: center;
    margin-top: ${props => `${props.marginTop}px` || '0px'};
    margin-bottom: ${props => `${props.marginBottom}px` || '0px'};
    text-align: center
`;