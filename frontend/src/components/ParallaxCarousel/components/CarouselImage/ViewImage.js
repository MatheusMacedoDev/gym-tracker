import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const ViewImage = styled(Animated.Image)`
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};

    width: 120px;
    height: 160px;

    border: 0px solid #f9f9f9;
    border-radius: 20px;
`;

export default ViewImage;
