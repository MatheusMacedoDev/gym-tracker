import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { ButtonContainer, ButtonText, ImagePerson, Overlay, ViewCircle } from './style';
import { FontAwesome } from '@expo/vector-icons'; 
export const CardMan = ({ title }) => {
  const [isSelected, setIsSelected] = useState(false);
  const menImage = require('../../Assets/Men.png');

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handlePress}>
        <ButtonContainer isSelected={isSelected}>
          <ViewCircle isSelected={isSelected}>
          <FontAwesome name="check" size={14} color="white" style={{ top:3,alignSelf: 'center' }} /> 
          </ViewCircle>
          <Overlay />
          <ImagePerson source={menImage} style={{ width: '100%', height: '100%', alignSelf: 'center' }} />
          {title && <ButtonText>{title}</ButtonText>}
        </ButtonContainer>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
