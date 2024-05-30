import { SafeAreaView } from "react-native";
import { ButtonContainer, ButtonText, Gradient } from "./style";

const iconSize = 25;
const iconColor = '#FFFFFF'

export const Button = ({icon, title}) => {
  return (
    <SafeAreaView>
    <ButtonContainer>
      <Gradient>
        {title && <ButtonText>{title}</ButtonText>}
        {icon && icon(iconSize, iconColor)}
      </Gradient>
    </ButtonContainer>
    </SafeAreaView>
  );
};
