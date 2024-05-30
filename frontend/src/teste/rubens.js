import { SafeAreaView, Text, View } from "react-native";
import {
  ButtonContainer,
  ButtonText,
  Gradient,
} from "../components/Button/style";
import { Button } from "../components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { Title } from "../components/Title/style";

export const Rubens = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Button
        title="Maceta"
        icon={(size, color) => (
          <MaterialIcons name="notifications" size={size} color={color} />
        )}
      />
      <Title fontSize={'32px'} marginTop={"30px"}>Quase la rsrs</Title>
    </View>
  );
};
