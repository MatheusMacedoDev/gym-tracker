import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

const Gradient = styled(LinearGradient).attrs(props => ({
  colors: [props.colorOne || "#1C1A1F", props.colorTwo || "#000000"],
  locations: [props.locationOne !== undefined ? props.locationOne : 0, props.locationTwo !== undefined ? props.locationTwo : 1],
}))`
  flex: 1;
  height: 100%;
  width: 100%;
  border-radius: ${props => props.borderRadius ? `${props.borderRadius}` : 0};
`;

export default Gradient;
 