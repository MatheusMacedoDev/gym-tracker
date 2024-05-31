import styled from "styled-components/native";


export default IconButtonContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    position: absolute;
    left: ${props => `${props.left}`};
    top:  ${props => `${props.top}`};
    height: ${props => `${props.sizeButton}px`};
    width: ${props => `${props.sizeButton}px`};
`;

