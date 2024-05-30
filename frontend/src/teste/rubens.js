import { SafeAreaView, Text, View } from "react-native";
import {
  ButtonContainer,
  ButtonText,
  Gradient,
} from "../components/Button/style";
import { Button } from "../components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { Title } from "../components/Title/style";
import { useEffect, useState } from "react";
import { Select } from "../components/Select";

export const Rubens = () => {

  const [numberSeries, setNumberSeries] = useState();

  useEffect(() => {
    console.log(numberSeries);
  })

  return (
    <View style={{ backgroundColor: "black", flex: 1}}>
      <Button
        title="Maceta"
        icon={(size, color) => (
          <MaterialIcons name="notifications" size={size} color={color} />
        )}
      />
      <Title fontSize={'32px'} marginTop={"30px"} marginBottom={"30px"}>Quase la rsrs</Title>
      <View style={{ backgroundColor: "black", flexDirection: "row", justifyContent: "space-between"}}>
      <Select
      setSelected={(number) => setNumberSeries(number)}
      label='Series'
      />
      <Select
      setSelected={(number) => setNumberSeries(number)}
      label='Repetições'
      />
    </View>
    </View>
  );
};
