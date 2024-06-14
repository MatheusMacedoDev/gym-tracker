import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { ButtonContainer, ButtonText, GradientButton } from './style';

const iconSize = 30;
const iconColor = '#FFFFFF';

export const Button = ({
    icon,
    title,
    marginTop,
    marginBottom,
    handleClickFn = null,
    widthButton,
    heightButton,
    alignCenter,
    fontSize,
    hiddenButton = false
}) => {
    const [loading, setLoading] = useState(false);

    const handlePress = async () => {
        if (handleClickFn) {
            setLoading(true);
            try {
                await handleClickFn();
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <ButtonContainer
            alignCenter={alignCenter}
            widthButton={widthButton}
            heightButton={heightButton}
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            <TouchableOpacity 
                onPress={handlePress} 
                disabled={loading}
            >
                <GradientButton
                    colors={
                        hiddenButton
                            ? ['rgba(48, 47, 50, 1)', 'rgba(69, 68, 72, 1)']
                            : ['rgba(251, 102, 20, 1)', 'rgba(255, 132, 52, 1)']
                    }
                >
                    {loading ? (
                        <ActivityIndicator size='small' color='#FFFFFF' />
                    ) : (
                        <>
                            {title && (
                                <ButtonText fontSize={fontSize}>
                                    {title}
                                </ButtonText>
                            )}
                            {icon && icon(iconSize, iconColor)}
                        </>
                    )}
                </GradientButton>
            </TouchableOpacity>
        </ButtonContainer>
    );
};
