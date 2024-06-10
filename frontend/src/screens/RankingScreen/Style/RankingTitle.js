import styled from 'styled-components/native';
import { colors } from '../../../colors.config';

export const RankingTitle = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 20px;
    color: ${colors.white};
    align-self: flex-start;
    margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
    margin-bottom: ${props =>
        props.marginBottom ? props.marginBottom : '0px'};
`;
