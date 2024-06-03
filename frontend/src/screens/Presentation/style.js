import styled from "styled-components/native";

export const TextTitle = styled.Text`
  font-family: "Montserrat_600Bold";
  font-size: 32px;
  width: 100%;
  color: #FF8434;
  text-align: left;

`;

export const TextDescription = styled.Text`
  font-family: "Montserrat_400Regular";
  font-size: 16px;
  width: 100%;
  color: #FFF;
  text-align: left;
`;

export const ContainerPresentation = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  width: 85%;
  align-self: center;
  justify-content: space-between;

`;

export const ContainerText = styled.View`
  flex-direction: column;
  width:100%;
  align-self: center;
  justify-content: center;
`;

export const Container2 = styled.View`
margin-top: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  margin-bottom: 20px;
`;

export const RoundImage = styled.Image`
  border-radius: 100%;
  width: 90px;
  height: 90px;
  right: 100px;
  
`;

export const TextContainer = styled.View`
  align-items: center;
`;
