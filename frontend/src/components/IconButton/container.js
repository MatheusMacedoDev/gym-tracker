import styled from "styled-components/native";


export default IconButtonContainer = styled.TouchableOpacity`
    justify-content: center;
    align-self: center;
    align-items: center;
    width: ${props => `${props.sizeButton}px`}; 
    height: ${props => `${props.sizeButton}px`};
`;

