import { ButtonContainer, ButtonText, GradientButton } from "./style";

const iconSize = 25;
const iconColor = '#FFFFFF'

export const Button = ({icon, title, marginTop, marginBottom, handleClickFn = null, widthButton, heightButon, fontSize}) => {
  return (
    <ButtonContainer widthButton={widthButton} heightButon={heightButon} marginTop={marginTop} marginBottom={marginBottom} onPress={handleClickFn}>
      <GradientButton>
        {title && <ButtonText fontSize={fontSize}>{title}</ButtonText>}
        {icon && icon(iconSize, iconColor)}
      </GradientButton>
    </ButtonContainer>
  );
};
