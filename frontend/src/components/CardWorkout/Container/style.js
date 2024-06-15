import styled from 'styled-components/native';
import { colors } from '../../../colors.config';

export const ContainerCard = styled.View`
    border-color: ${props => (props.isSelected ? '#FF8434' : 'transparent')};
    border-width: ${props => (props.isSelected ? '2px' : '0px')};
    margin-top: ${props => (props.marginTop ? `${props.marginTop}` : '0px')};
    margin-bottom: ${props =>
        props.marginBottom ? `${props.marginBottom}` : '0px'};
    background-color: ${props =>
        props.isSelected ? '#361E0E' : `${colors.darkGray}`};
    border-radius: 10px;
    width: 100%;
    height: 100px;
    justify-content: center;
`;

export const ContainerText = styled.View`
    gap: 5px;
    margin-left: 5%;
`;
