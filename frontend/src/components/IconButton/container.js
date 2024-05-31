import styled from "styled-components/native";


export default IconButtonContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 20;
    top: 45;
    height: ${props => `${props.sizeButton}px`};
`;

