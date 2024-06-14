import { View } from 'react-native';
import styled from 'styled-components/native';

const ContainerBoxIput = styled.View`
    height: 90px;
    width: ${props => (props.widhtBoxInput ? props.widhtBoxInput : '20%')};
    align-items: center;
    gap: 10px;
`;

export default ContainerBoxIput;
