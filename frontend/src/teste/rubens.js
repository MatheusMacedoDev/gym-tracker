import { SafeAreaView, View } from "react-native";
import { Button } from "../components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { Title } from "../components/Title/style";
import { useEffect, useState } from "react";
import { Select } from "../components/Select";
import ProfileBoxInput from "../components/ProfileBoxInput/index.js";
import { ConfirmEditModal } from "../components/ConfirmEditModal/index.js";

export const Rubens = ({ navigation }) => {
  const [numberSeries, setNumberSeries] = useState();
  const [yearBirth, setYearBirth] = useState(2000);
  const [showConfirmEditModal, setShowConfirmEditModal] = useState(true);


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

      <ProfileBoxInput
        placeholder={"Kg"}
        labelText={"Peso"}
      />

      <ConfirmEditModal
        visible={showConfirmEditModal}
        setShowConfirmEditModal={setShowConfirmEditModal}
        navigation={navigation}
      />

    </SafeAreaView>
  );
};
