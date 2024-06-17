import styled from 'styled-components/native';

export const ImageFisic = styled.ImageBackground`
    flex: 1;
    justify-context: center;
    height: 80%;
`;

export const Safezinha = styled.SafeAreaView``;

export const Subtitulo = styled.Text`
    font-family: 'Montserrat_400Regular';
    font-size: ${props => `${props.fontSize || '14px'}`};
    color: #ffffff;
    align-self: center;
    margin-top: ${props => `${props.marginTop}` || '0px'};
    margin-bottom: ${props => `${props.marginBottom}` || '0px'};
    text-align: center;
`;
