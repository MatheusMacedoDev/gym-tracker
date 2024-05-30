import styled from 'styled-components/native';
import { colors } from '../../colors.config';


export const Input = styled.TextInput.attrs({
    placeholderTextColor: colors.lightGray
})`
    width: 320px;
    height: 60px;
    font-size: 16px;
    background-color: ${colors.darkGray};
    border-radius: 10px;
    padding-left: 17px;
    margin-top: ${props => `${props.margintTop}px`};
`;