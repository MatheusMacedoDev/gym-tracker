import styled from 'styled-components/native';

export default ImageRepresentation = styled.Image`
    height: 95%;
    align-self: right;
    margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
    margin-left: ${props => (props.marginLeft ? props.marginLeft : '0px')};
`;
