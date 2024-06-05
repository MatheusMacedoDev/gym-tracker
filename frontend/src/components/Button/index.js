import { ButtonContainer, ButtonText, GradientButton } from "./style";

const iconSize = 25;
const iconColor = '#FFFFFF'

export const Button = ({icon,marginBotton, title, marginTop, handleClickFn = null, widthButton, heightButon}) => {
  return (

    <ButtonContainer marginBotton={marginBotton} widthButton={widthButton} heightButon={heightButon} marginTop={marginTop} onPress={handleClickFn}>
      <GradientButton>
        {title && <ButtonText>{title}</ButtonText>}
        {icon && icon(iconSize, iconColor)}
      </GradientButton>
    </ButtonContainer>

  );
};
