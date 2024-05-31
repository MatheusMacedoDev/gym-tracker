import styled from 'styled-components/native';

export const CommandText = styled.Text`
    width: 100%;
    font-size: 16px;
    font-family: 'Montserrat_400Regular';
    color: white;
    margin-top: ${props => `${props.marginTop}` || '0px'};
    margin-bottom: ${props => `${props.marginBottom}` || '0px'};
    text-align: ${props => `${props.textAlign}` || 'left'}
    
`;