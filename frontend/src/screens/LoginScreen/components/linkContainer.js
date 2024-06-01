import styled from "styled-components/native"

export const LinkContainer = styled.View`
    flex-direction: row;
    width: 85%;
    gap:5px;
    margin-top: ${props => props.marginTop ? `${props.marginTop}%`: "0%"};
    margin-bottom: ${props => props.marginBottom  ? `${props.marginBottom}%` : "0%"};
`;