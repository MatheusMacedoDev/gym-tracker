import styled from "styled-components/native";

export const PhotoLogo = styled.Image`
    height: ${props => props.heightLogo ? `${props.heightLogo}px`: "53px"};
    width: ${props => props.widthLogo ? `${props.widthLogo}px` : "109px"};
    align-self: center;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px`: "0px"};
    margin-bottom: ${props => props.marginBottom  ? `${props.marginBottom}px` : "0px"};
`; 