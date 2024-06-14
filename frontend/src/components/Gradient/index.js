import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

const Gradient = styled(LinearGradient).attrs(props => ({
    colors: [props.colorOne || '#1C1A1F', props.colorTwo || '#000000'],
    locations: [
        props.locationOne !== undefined ? props.locationOne : 0,
        props.locationTwo !== undefined ? props.locationTwo : 1
    ]
}))`
    flex: 1;
    height: 100%;
    width: 100%;
    border-radius: ${props => (props.roundedBorders ? '15px' : '0px')};
    position: relative;
    z-index: -1;
`;

export default Gradient;
