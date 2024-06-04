import styled from 'styled-components/native';
import React, { useState } from 'react';

const ButtonContainer2 = styled.TouchableOpacity`
  height: 140px;
  width: 140px;
  background-color: #2F2C32;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin: 12px;
  flex-direction: column;
`;

const ButtonText2 = styled.Text`
  color: white;
  font-size: 16px;
  margin-bottom: 8px; /* Add margin bottom here */
`;

const ButtonImage = styled.Image`
  width: 80px; 
  height: 80px; 
  margin-bottom: 12px; /* Add more margin bottom here */
`;

const BtnExcercise2 = ({ title, image, onPress }) => {
  const [clicked, setClicked] = useState(false);

  const handlePress = () => {
    setClicked(!clicked);
    onPress();
  };

  return (
    <ButtonContainer2 clicked={clicked} onPress={handlePress}>
      <ButtonImage source={image} resizeMode="contain" />
      <ButtonText2>{title}</ButtonText2>
    </ButtonContainer2>
  );
};

export default BtnExcercise2;
