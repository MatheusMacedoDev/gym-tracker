import styled from 'styled-components/native';
import { colors } from '../../colors.config';

export const CommandText = styled.Text`
    width: 100%;
    font-size: ${props => props.fontSize ? `${props.fontSize}` : '16px'};
    font-family: 'Montserrat_400Regular';
    color: ${props => props.colorText ? props.colorText : colors.white};
    margin-top: ${props => `${props.marginTop}` || '0px'};
    margin-bottom: ${props => `${props.marginBottom}` || '0px'};
    text-align: ${props => `${props.textAlign}` || 'left'};
`;