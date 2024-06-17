import styled from 'styled-components/native';
import React, { useState } from 'react';

const ButtonContainer2 = styled.TouchableOpacity`
    height: 140px;
    width: 140px;
    background-color: #2f2c32;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin: 12px;
    flex-direction: column;
`;

const ButtonText2 = styled.Text`
    color: white;
    font-size: 16px;
`;

const ButtonImage = styled.Image`
    width: 70px;
    height: 70px;
    margin-bottom: 14px;
`;

const BtnExcercise2 = ({ title, image, onPress }) => {
    const [clicked, setClicked] = useState(false);

    const handlePress = () => {
        setClicked(!clicked);
        onPress();
    };

    return (
        <ButtonContainer2 clicked={clicked} onPress={handlePress}>
            <ButtonImage source={{ uri: image }} resizeMode='contain' />
            <ButtonText2>{title}</ButtonText2>
        </ButtonContainer2>
    );
};

export default BtnExcercise2;
