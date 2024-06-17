import styled from 'styled-components/native';

export default WelcomeContainer = styled.SafeAreaView`
    flex-direction: row;
    gap: 16px;
    height: 10%;
    width: 95%;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
`;
