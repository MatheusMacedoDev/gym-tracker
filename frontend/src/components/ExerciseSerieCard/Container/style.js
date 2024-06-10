import styled from 'styled-components/native';
import { colors } from '../../../colors.config';

export const ContainerCard = styled.View`
    border-color: ${props => (props.isSelected ? '#FF8434' : 'transparent')};
    border-width: ${props => (props.isSelected ? '2px' : '0px')};
    margin-top: ${props => (props.marginTop ? `${props.marginTop}` : '0px')};
    margin-bottom: ${props =>
        props.marginBottom ? `${props.marginBottom}` : '0px'};
    background-color: ${colors.darkGray};
    border-radius: 10px;
    width: 100%;
    height: 100px;
    justify-content: center;
    flex-direction: row;
`;

export const ContainerText = styled.View`
    padding-left: 20px;
    gap: 5px;
    width: 50%;
    justify-content: center;
    box-sizing: border-box;
`;

export const ContainerInput = styled.View`
    padding: 18px;
    width: 50%;
    justify-content: space-between;
    flex-direction: row;
`;
