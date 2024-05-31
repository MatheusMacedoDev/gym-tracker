import styled from "styled-components/native";

export const PhotoLogo = styled.Image`
    height: ${props => `${props.heightLogo}px` || "53px"};
    width: ${props => `${props.widthLogo}px` || '109px'};
    align-self: center;
    margin-top: ${props => `${props.marginTop}px` || '0px'};
    margin-bottom: ${props => `${props.marginBottom}px` || '0px'};
`;