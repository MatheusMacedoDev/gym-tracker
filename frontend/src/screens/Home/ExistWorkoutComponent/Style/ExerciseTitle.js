import styled from 'styled-components';
import { colors } from '../../../../colors.config';

export default ExerciseTitle = styled.Text`
    font-size: 13px;
    color: ${colors.white};
    font-family: 'Montserrat_500Medium';
    margin-left: ${props => props.marginLeft};
`;
