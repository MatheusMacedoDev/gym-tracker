import styled from 'styled-components/native';
import { colors } from '../../../colors.config';

export default NamePersonRanking = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 16px;
    color: ${colors.white};
    margin-left: ${props => (props.marginLeft ? props.marginLeft : '0px')};
    width: 60%;
`;
