import React, { useEffect, useState } from 'react';
import { ButtonContainer, ContainerCards, GenderText, ImagePerson, Overlay, ViewCircle } from './style';
import { FontAwesome } from '@expo/vector-icons';

export const CardsGender = () => {
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
        <ImagePerson source={require('../../Assets/Images/Men.png')}/>
        <GenderText>Masculino</GenderText> 
      </ButtonContainer>

      <ButtonContainer onPress={() => handleSelect('F')} isSelected={selectedGender === 'F'}>
        <ViewCircle isSelected={selectedGender === 'F'}>
          <FontAwesome name="check" size={14} color="white" style={{ top: 3, alignSelf: 'center' }} />
        </ViewCircle>
        <Overlay />
        <ImagePerson source={require('../../Assets/Images/Woman.png')}/>
        <GenderText>Feminino</GenderText>
      </ButtonContainer>
    </ContainerCards>
  );
};
