import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { ButtonContainer, ButtonText, ContainerCards, ImagePerson, Overlay, ViewCircle } from './style';
import { FontAwesome } from '@expo/vector-icons';

export const CardMan = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSelect = (gender) => {
    setSelectedGender(selectedGender === gender ? null : gender);
  };


  useEffect(() => {
    console.log(selectedGender);
  })

  return (
    <ContainerCards>
      <ButtonContainer onPress={() => handleSelect('M')} isSelected={selectedGender === 'M'}>
        <ViewCircle isSelected={selectedGender === 'M'}>
          <FontAwesome name="check" size={14} color="white" style={{ top: 3, alignSelf: 'center' }} />
        </ViewCircle>
        <Overlay />
        <ImagePerson source={require('../../assets/Images/Men.png')} style={{ width: '100%', height: '100%', alignSelf: 'center' }} />
        <ButtonText>Masculino</ButtonText>
      </ButtonContainer>

      <ButtonContainer onPress={() => handleSelect('F')} isSelected={selectedGender === 'F'}>
        <ViewCircle isSelected={selectedGender === 'F'}>
          <FontAwesome name="check" size={14} color="white" style={{ top: 3, alignSelf: 'center' }} />
        </ViewCircle>
        <Overlay />
        <ImagePerson source={require('../../assets/Images/Woman.png')} style={{ width: '100%', height: '100%', alignSelf: 'center' }} />
        <ButtonText>Feminino</ButtonText>
      </ButtonContainer>
    </ContainerCards>
  );
};
