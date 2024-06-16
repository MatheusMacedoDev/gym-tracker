import styled from 'styled-components/native';

export const TextTitle = styled.Text`
    font-family: 'Montserrat_600Bold';
    font-size: 36px;
    width: 100%;
    color: #ff8434;
    text-align: left;
`;

export const TextDescription = styled.Text`
    font-family: 'Montserrat_300Light';
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    color: #fff;
    text-align: left;
`;

export const ContainerPresentation = styled.SafeAreaView`
    align-items: center;
    width: 80%;
    align-self: center;
    justify-content: space-between;
    height: 640px;
    margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
`;

export const ContainerText = styled.View`
    flex-direction: column;
    width: 100%;
    align-self: flex-start;
`;

export const Container2 = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 32px;
`;

export const RoundImage = styled.Image`
    border-radius: 200px;
    width: 81px;
    height: 81px;
    right: 81px;
`;

export const TextContainer = styled.View`
    align-items: center;
`;
