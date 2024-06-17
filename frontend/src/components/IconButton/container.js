import styled from 'styled-components/native';
import { colors } from '../../colors.config';

export default IconButtonContainer = styled.TouchableOpacity`
    position: absolute;
    align-self: flex-start;
    justify-content: center;
    align-items: center;
    left: ${props => `${props.left}`};
    top: ${props => `${props.top}`};
    right: ${props => `${props.right}`};
    bottom: ${props => `${props.bottom}`};
    height: ${props => (props.heightButon ? `${props.heightButon}` : '45px')};
    width: ${props => (props.widthButton ? `${props.widthButton}` : '45px')};
    border-radius: 50px;
    align-items: center;
    background-color: ${props => (props.background ? colors.orange : null)};
`;
