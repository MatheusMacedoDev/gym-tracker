import styled from "styled-components/native";

export const ScrollContainer = styled.ScrollView`
flex: 1;
    align-self: center;
    width: ${props => props.widthScroll ? `${props.widthScroll}` : "90%"};
`;
