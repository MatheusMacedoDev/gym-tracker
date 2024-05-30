import { View } from "react-native";
import { Button } from "../components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { Title } from "../components/Title/style";
import { useEffect, useState } from "react";
import { Select } from "../components/Select";
import { SelectPicker } from "../components/SelectPicker.js";

export const Rubens = () => {
  const [numberSeries, setNumberSeries] = useState();
  const [yearBirth, setYearBirth] = useState(2000);


  useEffect(() => {
    console.log(numberSeries);
    console.log(yearBirth);
  });

  return (
    <View style={{ backgroundColor: "#27242B", flex: 1 }}>
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
      <View style={{ height: 500, alignSelf: "center" }}>
        <SelectPicker
          onItemPress={setYearBirth}
          valueNow={yearBirth}
        />
      </View>
    </View>
  );
};
