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
    fontSize
}) => {
    return (
        <ButtonContainer
            widthButton={widthButton}
            heightButton={heightButton}
            marginTop={marginTop}
            marginBottom={marginBottom}
            onPress={handleClickFn}
        >
            <GradientButton>
                {title && <ButtonText fontSize={fontSize}>{title}</ButtonText>}
                {icon && icon(iconSize, iconColor)}
            </GradientButton>
        </ButtonContainer>
    );
};
