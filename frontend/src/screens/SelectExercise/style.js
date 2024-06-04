import styled from 'styled-components/native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const ButtonContainer = styled.TouchableOpacity`
  height: 60px;
  width: 360px;
  background-color: #2F2C32;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-top: 12%;
  align-self: center;
  border-width: 2px;
  border-color: ${props => (props.clicked ? '#FB6614' : 'transparent')};
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px; 
  box-sizing: border-box;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const BtnExcercise = ({ title, onPress }) => {
  const [clicked, setClicked] = useState(false);

  const handlePress = () => {
    setClicked(!clicked);
    onPress();
  };

  return (
    <ButtonContainer clicked={clicked} onPress={handlePress}>
      <ButtonText>{title}</ButtonText>
      {clicked && <MaterialIcons name="check" size={24} color="#FF8434" />}
    </ButtonContainer>
  );
};

export default BtnExcercise;
