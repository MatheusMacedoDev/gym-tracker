import styled from 'styled-components/native';
import { colors } from '../../../colors.config';

export default ContainerRankingCard = styled.TouchableOpacity`
    background-color: ${colors.lightBlack};
    border-radius: 16px;
    height: 65px;
    width: 100%;
    flex-direction: row;
    margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
    align-items: center;
    padding: 0px
        ${props => (props.verticalPadding ? props.verticalPadding : '0px')};
`;
