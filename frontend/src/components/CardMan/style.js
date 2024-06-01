import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';


export const ContainerCards = styled.View`
  width: 100%;
  height: 40%;
  flex-direction: row;
  justify-content: space-between;

`;

export const ButtonContainer = styled.TouchableOpacity`
top: 50px;  
width: 40.7%;
height: 320px;
border-radius: 15px;
justify-content: center;
align-items: center;
align-self: center;
border-color: 'black';
background-color: #454448;
border-width: ${props => (props.isSelected ? '2px' : '0px')}; 
border-color: ${props => (props.isSelected ? '#FF8434' : 'transparent')};
box-shadow: ${props => (props.isSelected ? '0 0 10px #FF8434' : 'none')};
position: relative;
`;

export const ViewCircle = styled.View`
  position: absolute;
  top: -8px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: orange;
  align-items: center; /* Centralizar horizontalmente */
  display: ${props => (props.isSelected ? 'block' : 'none')}; /* Exibe quando isSelected é true, caso contrário, oculta */
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  align-self: center;
  margin-top: 250px; 
  font-family: 'Montserrat';
`;

export const ImagePerson = styled.Image`
  position: absolute;
  top: -45px;
  right: 2px;
  width: 60px;
  height: 60px;
  width: 100%; 
  height: 96%;
  align-self: center;
`;

export const Overlay = styled(LinearGradient).attrs({
  colors: ['rgba(0, 0, 0, 0)', 'rgba(69, 68, 72, 0.9)'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  position: absolute;
  width: 100%;
  height: 70%;
  top: 30%;
  border-radius:0 0 15px 15px;
`;
