import styled from 'styled-components/native';
import { percentage } from '../../utils/percentageFactory';

const ModalBackground = styled.View`
    position: absolute;
    width: percentage(1, 'w');
    height: percentage(1, 'h');
    background-color: rgba(0, 0, 0, 1);
`;

export default ModalBackground;