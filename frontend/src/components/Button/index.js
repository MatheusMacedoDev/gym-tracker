import { SafeAreaView } from "react-native";
import { ButtonContainer, ButtonText, Gradient } from "./style";

const iconSize = 25;
const iconColor = '#FFFFFF'

export const Button = ({icon, title, marginTop, handleClickFn = null, widthButton, heightButon}) => {
  return (

    <ButtonContainer widthButton={widthButton} heightButon={heightButon} marginTop={marginTop} onPress={handleClickFn}>
      <Gradient>
        {title && <ButtonText>{title}</ButtonText>}
        {icon && icon(iconSize, iconColor)}
      </Gradient>
    </ButtonContainer>

  );
};
