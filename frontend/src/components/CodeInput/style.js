import styled from 'styled-components/native';
import { colors } from '../../colors.config';

export const CellWrapper = styled.View`
`;

export const Cell = styled.Text`
    width: 52px;
    height: 52px;
    line-height: 50px;
    background-color: ${colors.darkGray};
    justify-content: center;
    align-items: center;
    font-size: 34px;
    color: ${colors.orange};
    text-align: center;
`;