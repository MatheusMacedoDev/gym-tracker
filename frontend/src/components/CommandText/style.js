import styled from 'styled-components/native';

export const CommandText = styled.Text`
    width: 90%;
    font-size: 16px;
    font-family: 'Montserrat_400Regular';
    text-align: center;
    color: white;
    margin-top: ${props => `${props.marginTop}px` || '0px'};
    margin-bottom: ${props => `${props.marginBottom}px` || '0px'};
    text-align: ${props => `${props.textAlign}` || 'left'}
    
`;