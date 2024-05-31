import { SafeAreaView } from "react-native";
import { ButtonContainer, ButtonText, Gradient } from "./style";

const iconSize = 25;
const iconColor = '#FFFFFF'

export const Button = ({icon, title, marginTop}) => {
  return (

    <ButtonContainer marginTop={marginTop}>
      <Gradient>
        {title && <ButtonText>{title}</ButtonText>}
        {icon && icon(iconSize, iconColor)}
      </Gradient>
    </ButtonContainer>

  );
};
