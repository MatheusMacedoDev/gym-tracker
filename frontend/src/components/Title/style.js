import styled from 'styled-components/native';

export const Title = styled.Text`
    width: ${props => (props.width ? props.width : '85%')};
    font-family: 'Montserrat_700Bold';
    font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '36px')};
    color: #ffffff;
    align-self: ${props => (props.alignSelf ? `${props.alignSelf}` : 'center')};
    margin-top: ${props => (props.marginTop ? `${props.marginTop}` : '0px')};
    margin-bottom: ${props =>
        props.marginBottom ? `${props.marginBottom}` : '0px'};
    text-align: ${props => (props.alignLeft ? 'left' : 'center')};
`;
