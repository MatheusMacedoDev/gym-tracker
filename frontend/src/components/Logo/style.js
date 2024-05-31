import styled from "styled-components/native";

export const PhotoLogo = styled.Image`
    height: ${props => props.heightLogo || "53px"};
    width: ${props => props.widthLogo || "109px"};
    align-self: center;
    margin-top: ${props => props.marginTop || "0px"};
    margin-bottom: ${props => props.marginBottom || "0px"}
`;