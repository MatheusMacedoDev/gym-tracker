import { PhotoLogo } from "./style";

export const Logo = ({ heightLogo, widthLogo, marginTop, marginBottom }) => {
  return (
    <PhotoLogo
      heightLogo={heightLogo}
      widthLogo={widthLogo}
      marginTop={marginTop}
      marginBottom={marginBottom}
      source={require("../../Assets/Images/Logo.png")}
    />
  );
};
