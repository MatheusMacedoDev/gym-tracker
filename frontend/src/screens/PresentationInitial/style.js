import styled from "styled-components/native";

export const ImageFIsic = styled.Image`
    /* top: 45px;
    position: absolute; */
    margin-top: -8px;
`;
export const Safezinha = styled.SafeAreaView`

`;

export const Subtitulo = styled.Text`
    font-family: 'Montserrat_400Regular';
    font-size: ${props => `${props.fontSize || '14px'}`};
    color: #FFFFFF;
    align-self: center;
    margin-top: ${props => `${props.marginTop}` || '0px'};
    margin-bottom: ${props => `${props.marginBottom}` || '0px'};
    text-align: center
`;