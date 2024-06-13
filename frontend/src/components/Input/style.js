import styled from 'styled-components/native';
import { colors } from '../../colors.config';

export const Input = styled.TextInput.attrs({
    placeholderTextColor: colors.lightGray
})`
    height: ${props => (props.heightInput ? `${props.heightInput}` : '64px')};
    width: ${props => (props.widthInput ? `${props.widthInput}` : '100%')};
    font-size: 16px;
    background-color: ${colors.darkGray};
    color: ${colors.white};
    border-radius: 10px;
    padding-left: 17px;
    margin-top: ${props => `${props.marginTop}` || '0px'};
    margin-bottom: ${props => `${props.marginBottom}` || '0px'};
    font-family: 'Montserrat_700Bold';
    align-self: center;
`;
