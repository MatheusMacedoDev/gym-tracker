import { SafeAreaView, View } from "react-native";
import { Button } from "../components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { Title } from "../components/Title/style";
import { useEffect, useState } from "react";
import { Select } from "../components/Select";
import { SelectPicker } from "../components/SelectPicker.js";
import { Logo } from "../components/Logo/index.js";
import { createWeightArray } from "../utils/arraysFactory.js";
import { CardWorkout } from "../components/CardWorkout/index.js";


export const Rubens = () => {
  const [numberSeries, setNumberSeries] = useState();
  const [yearBirth, setYearBirth] = useState(2000);


  useEffect(() => {
    console.log(numberSeries);
    console.log(yearBirth);
  });

  return (
    <SafeAreaView style={{ backgroundColor: "#27242B", flex: 1 }}>
      <Button
        title="Maceta"
        icon={(size, color) => (
          <MaterialIcons name="notifications" size={size} color={color} />
        )}
      />
      <Title fontSize={"32px"} marginTop={"30px"} marginBottom={"30px"}>
        Quase la rsrs
      </Title>
      <View
        style={{
          backgroundColor: "black",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Select
          setSelected={(number) => setNumberSeries(number)}
          label="Series"
        />
        <Select
          setSelected={(number) => setNumberSeries(number)}
          label="Repetições"
        />
      </View>

      <Logo/>
      <CardWorkout
        trainingName="Treino A"
        muscleGroups="Triceps - Biceps - Costas"
      />
      <CardWorkout
        trainingName="Treino B"
        muscleGroups="Triceps - Biceps - Costas"
      />
    </SafeAreaView>
  );
};
