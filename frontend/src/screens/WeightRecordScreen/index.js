import { useState } from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container/style";
import { IconButton } from "../../components/IconButton";
import { Logo } from "../../components/Logo";
import { SelectPicker } from "../../components/SelectPicker.js";
import { Title } from "../../components/Title/style";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createWeightArray } from "../../utils/arraysFactory.js";
import Gradient from "../../components/Gradient/index.js";

export const WeightRecordScreen = () => {
  const [weight, setWeight] = useState();

  return (
    <Gradient>
      <Container>
        <IconButton
          gradient={false}
          icon={<MaterialIcons name="reply" size={40} color={"#FB6614"} />}
        />
        <Logo marginTop={"30%"} />
        <Title fontSize={35} marginTop={"10%"}>
          Qual o seu peso?
        </Title>
        <SelectPicker
          onItemPress={setWeight}
          valueNow={weight}
          list={createWeightArray()}
        />
        <Button
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
