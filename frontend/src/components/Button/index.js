import { ButtonContainer, ButtonText, GradientButton } from "./style";

const iconSize = 25;
const iconColor = '#FFFFFF'

export const Button = ({icon, title, marginTop, handleClickFn = null, widthButton, heightButon, fontSize}) => {
  return (

    <ButtonContainer widthButton={widthButton} heightButon={heightButon} marginTop={marginTop} onPress={handleClickFn}>
      <GradientButton>
        {title && <ButtonText fontSize={fontSize}>{title}</ButtonText>}
        {icon && icon(iconSize, iconColor)}
      </GradientButton>
    </ButtonContainer>

  );
};
