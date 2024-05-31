import styled from "styled-components/native";


export default IconButtonContainer = styled.TouchableOpacity`
    position: absolute;
    align-self: flex-start;
    left: ${props => `${props.left}`};
    top:  ${props => `${props.top}`};
`;
