import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
    height: ${props => (props.heightButton ? `${props.heightButton}` : '70px')};
    width: ${props => (props.widthButton ? `${props.widthButton}` : '100%')};
    border-radius: 15px;
    justify-content: center;
    ${props => (!props.alignCenter ? '' : 'align-self: center')};
    margin-top: ${props => props.marginTop || '0px'};
    margin-bottom: ${props =>
        props.marginBottom ? props.marginBottom : '0px'};
    align-self: ${props => (props.alignCenter ? 'center' : 'flex-start')};
`;

export const GradientButton = styled(LinearGradient).attrs({
    start: { x: 0, y: 1 },
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
