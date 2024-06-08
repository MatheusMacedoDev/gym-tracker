import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
    height: ${props => (props.heightButton ? `${props.heightButton}` : '8%')};
    width: ${props => (props.widthButton ? `${props.widthButton}` : '100%')};
    border-radius: 15px;
    justify-content: center;
    ${props => (!props.alignCenter ? '' : 'align-self: center')};
    margin-top: ${props => props.marginTop || '0px'};
    margin-bottom: ${props =>
        props.marginBottom ? props.marginBottom : '0px'};
`;

export const GradientButton = styled(LinearGradient).attrs({
    colors: ['rgba(255, 132, 52, 0.39)', 'rgba(251, 102, 20, 0.9)'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
    locations: [0.39, 1]
})`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const ButtonText = styled.Text`
    font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '20px')};
    color: #ffffff;
    font-family: 'Montserrat_700Bold';
`;
