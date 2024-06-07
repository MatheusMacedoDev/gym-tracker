import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../colors.config';

export const ContainerCards = styled.View`
    width: 100%;
    height: 40%;
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonContainer = styled.TouchableOpacity`
    width: 45%;
    height: 100%;
    border-radius: 15px;
    justify-content: center;
    background-color: #454448;
    border-width: ${props => (props.isSelected ? '2px' : '0px')};
    border-color: ${props => (props.isSelected ? '#FF8434' : 'transparent')};
    box-shadow: ${props => (props.isSelected ? '0 0 10px #FF8434' : 'none')};
`;

export const ViewCircle = styled.View`
    position: absolute;
    top: -8px;
    right: -5px;
    width: 20px;
    height: 20px;
    border-radius: 15px;
    background-color: orange;
    align-items: center;
    display: ${props => (props.isSelected ? 'block' : 'none')};
`;

export const GenderText = styled.Text`
    color: ${colors.white};
    font-size: 18px;
    font-family: 'Montserrat_700Bold';
    position: absolute;
    bottom: 10%;
    left: 15%;
`;

export const ImagePerson = styled.Image`
    align-self: center;
    height: 100%;
    margin-bottom: 40%;
    margin-right: 5%;
`;

export const Overlay = styled(LinearGradient).attrs({
    colors: ['rgba(0, 0, 0, 0)', 'rgba(69, 68, 72, 0.9)'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
})`
    position: absolute;
    width: 100%;
    height: 70%;
    top: 30%;
    border-radius: 0 0 15px 15px;
`;
