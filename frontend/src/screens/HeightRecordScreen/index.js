import { Container } from "../../components/Container/style";
import { IconButton } from "../../components/IconButton";
import { MaterialIcons } from "@expo/vector-icons";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title/style";
import { SelectPicker } from "../../components/SelectPicker";
import { Button } from "../../components/Button";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { createCentimeterArray } from "../../utils/arraysFactory.js";
import Gradient from "../../components/Gradient/index.js";

export const HeighRecordScreen = ({navigation}) => {
  const [height, setHeight] = useState();
  return (
    <Gradient>
      <Container>
        <IconButton
        handleClickFn={() => navigation.navigate("WeightRecordScreen")}
          gradient={false}
          icon={<MaterialIcons name="reply" size={40} color={"#FB6614"} />}
        />
        <Logo marginTop={"30%"} />
        <Title marginTop={"10%"}>
          Qual a sua altura?
        </Title>
        <SelectPicker
          onItemPress={setHeight}
          valueNow={height}
          list={createCentimeterArray()}
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
