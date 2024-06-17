import styled from "styled-components/native";

export const TextTitle = styled.Text`
  font-family: "Montserrat_600Bold";
  font-size: 32px;
  width: 320px;
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
  align-items: center;
  width: 320px;
  align-self: center;
  justify-content: space-between;
  height: 640px;
  margin-top: ${props => props.marginTop? props.marginTop : 0}
`;

export const ContainerText = styled.View`
  flex-direction: column;
  width:320px;
  align-self:flex-start;
  margin-top: -250px;

`;

export const Container2 = styled.View` 
margin-top: 379px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  width: 319px;
  margin-bottom: 20px;
`;

export const RoundImage = styled.Image`
  border-radius: 200px;
  width: 81px;
  height: 81px;
  right: 100px;
  
`;

export const TextContainer = styled.View`
  align-items: center;
`;
