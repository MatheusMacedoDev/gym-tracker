import { Container } from "../../components/Container/style";
import { IconButton } from "../../components/IconButton";
import { MaterialIcons } from "@expo/vector-icons";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title/style";
import { CommandText } from "../../components/CommandText/style";
import { CardWorkout } from "../../components/CardWorkout";
import { Button } from "../../components/Button";
import { Entypo } from "@expo/vector-icons";
import { ListComponent } from "../../components/List/style";
import { ListContainer } from "../../components/ListContainer/style";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import Gradient from "../../components/Gradient";

const workouts = [
  { id: 1, trainingName: "Treino A", muscleGroups: "Peito - Triceps - costas" },
  { id: 2, trainingName: "Treino B", muscleGroups: "Peito - Triceps - costas" },
  { id: 3, trainingName: "Treino C", muscleGroups: "Peito - Triceps - costas" },
  { id: 4, trainingName: "Treino D", muscleGroups: "Peito - Triceps - costas" },
  { id: 5, trainingName: "Treino E", muscleGroups: "Peito - Triceps - costas" },
];

export const TrainingRecordScrenn = () => {
  const [selectedWorkout, setSelectedWorkout] = useState();

  return (
    <Gradient>
      <Container>
        <IconButton
          gradient={false}
          icon={<MaterialIcons name="reply" size={40} color={"#FB6614"} />}
        />
        <Logo marginTop={"20%"} />
        <Title marginTop={"10%"}>Registro de treino</Title>
        <CommandText marginTop={"5%"} textAlign={"center"} marginBottom={"10%"}>
          Aqui você poderá anotar os principais dados do seu treino para
          podermos medir a sua progressão. Antes de tudo selecione o seu treino
          base:
        </CommandText>
        <ListContainer>
          <ListComponent
            data={workouts}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {setSelectedWorkout({
                    id: item.id
                })}}>
              <CardWorkout
                trainingName={item.trainingName}
                muscleGroups={item.muscleGroups}
                marginBottom={"5%"}
                isSelected={selectedWorkout ? item.id == selectedWorkout.id : false}
              />
              </TouchableOpacity>
            )}
          />
        </ListContainer>
        <Button
          marginTop={"10%"}
          title="Continuar"
          icon={(size, color) => (
            <Entypo name="chevron-right" size={size} color={color} />
          )}
        />
      </Container>
    </Gradient>
  );
};
