import styled from "styled-components/native";

export const ListContainer = styled.View`
    width: 100%;
    height: ${props => props.heightContainer ? props.heightContainer : "35%"};
`;