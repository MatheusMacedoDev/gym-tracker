import styled from 'styled-components/native';
import { colors } from '../../../colors.config';

export const ContentModal = styled.View`
    border-radius: 15px;
    width: 90%;
    height: 90%;
    margin: auto 0;
    align-items: center;
    align-self: center;
    border: ${colors.white};
`;

export const ContainerBoxInput = styled.View`
    width: 80%;
    justify-content: ${props =>
        props.justifyContent ? props.justifyContent : 'space-evenly'};
    flex-direction: row;
    align-self: center;
    margin-top: ${props => (props.marginTop ? `${props.marginTop}` : '0px')};
    margin-bottom: ${props =>
        props.marginBottom ? `${props.marginBottom}` : '0px'};
`;
