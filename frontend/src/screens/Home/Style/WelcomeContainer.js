import styled from 'styled-components/native';

export default WelcomeContainer = styled.SafeAreaView`
    flex-direction: row;
    gap: ${props => props.gap};
    height: 10%;
    width: 108%;
    justify-content: center;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
`;
