import styled from "styled-components/native";

export default TextNumbersRanking = styled.Text`
    color: ${props => props.colorText ? props.colorText : 'white'};
    flex-direction: row;
    font-size: 16;
    font-family: 'Montserrat_600SemiBold';
`;