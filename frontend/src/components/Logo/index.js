import { PhotoLogo } from "./style";

export const Logo = ({ heightLogo, widthLogo, marginTop, marginBottom }) => {
  return (
    <PhotoLogo
      source={require("../../Assets/Images/Logo.png")}
      heightLogo={heightLogo}
      widthLogo={widthLogo}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
};
