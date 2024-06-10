import styled from 'styled-components/native';
import React, { useState } from 'react';
import { percentage } from '../../utils/percentageFactory';

export const ButtonContainer = styled.TouchableOpacity`
    height: 60px;
    width: 360px;
    background-color: #2f2c32;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-top: ${props => props.marginTop};
    align-self: center;
    flex-direction: row;
    justify-content: center; /* Altera para centralizar o texto */
    padding: 0 10px;
    box-sizing: border-box;
`;

export const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
`;

const BtnExcercise = ({ title, onPress, marginTop }) => {
    const [clicked, setClicked] = useState(false);

    const handlePress = () => {
        setClicked(!clicked);
        onPress();
    };

    return (
        <ButtonContainer
            marginTop={marginTop && percentage(0.12, 'h')}
            clicked={clicked}
            onPress={handlePress}
        >
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    );
};

export default BtnExcercise;
