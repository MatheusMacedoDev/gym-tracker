import { SafeAreaView, Text } from "react-native";
import {
  ButtonContainer,
  ButtonText,
  Gradient,
} from "../components/Button/style";
import { Button } from "../components/Button";
import { MaterialIcons } from "@expo/vector-icons";

export const Rubens = () => {
  return (
    <Button
      title="Maceta"
      icon={(size, color) => (
        <MaterialIcons name="notifications" size={size} color={color} />
      )}
    />
  );
};
