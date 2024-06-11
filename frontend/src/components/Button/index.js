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
    return (
        <ButtonContainer
            alignCenter={alignCenter}
            widthButton={widthButton}
            heightButton={heightButton}
            marginTop={marginTop}
            marginBottom={marginBottom}
            onPress={handleClickFn}
        >
            <GradientButton
                colors={
                    hiddenButton
                        ? ['rgba(48, 47, 50, 1)', 'rgba(69, 68, 72, 1)']
                        : ['rgba(251, 102, 20, 1)', 'rgba(255, 132, 52, 1)']
                }
            >
                {title && <ButtonText fontSize={fontSize}>{title}</ButtonText>}
                {icon && icon(iconSize, iconColor)}
            </GradientButton>
        </ButtonContainer>
    );
};
