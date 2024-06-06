import { useState } from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container/style";
import { IconButton } from "../../components/IconButton";
import { Logo } from "../../components/Logo";
import { SelectPicker } from "../../components/SelectPicker";
import { Title } from "../../components/Title/style";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createWeightArray } from "../../utils/arraysFactory.js";
import Gradient from "../../components/Gradient/index.js";

export const WeightRecordScreen = ({navigation}) => {
  const [weight, setWeight] = useState();

  return (
    <Gradient>
      <Container>
        <IconButton
        handleClickFn={() => navigation.navigate("BirthYearRegisterScreen")}
          gradient={false}
          icon={<MaterialIcons name="reply" size={40} color={"#FB6614"} />}
        />
        <Logo marginTop={"30%"} />
        <Title marginTop={"10%"}>
          Qual o seu peso?
        </Title>
        <SelectPicker
          onItemPress={setWeight}
          valueNow={weight}
          list={createWeightArray()}
        />
        <Button
        handleClickFn={() => {navigation.navigate("HeighRecordScreen")}}
          marginTop={"20%"}
          title="Continuar"
          icon={(size, color) => (
            <Entypo name="chevron-right" size={size} color={color} />
          )}
        />
      </Container>
    </Gradient>
  );
};
