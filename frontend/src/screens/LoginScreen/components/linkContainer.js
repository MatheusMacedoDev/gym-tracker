import styled from 'styled-components/native';

export const LinkContainer = styled.View`
    flex-direction: row;
    width: 100%;
    gap: 5px;
    margin-top: ${props => (props.marginTop ? `${props.marginTop}` : '0px')};
    margin-bottom: ${props =>
        props.marginBottom ? `${props.marginBottom}` : '0px'};
`;
