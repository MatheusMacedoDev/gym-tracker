import { Button } from "../../components/Button";
import { CommandText } from "../../components/CommandText/style";
import { Container } from "../../components/Container/style";
import { ExerciseCard } from "../../components/ExerciseCard";
import Gradient from "../../components/Gradient";
import { ListComponent } from "../../components/List/style";
import { ListContainer } from "../../components/ListContainer/style";
import { Title } from "../../components/Title/style";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

const exercises = [
  { id: 1, exercise: "Supino com halteres" },
  { id: 2, exercise: "Agachamento" },
  { id: 3, exercise: "Cadeira extensora" },
  { id: 4, exercise: "Abdominal" },
  { id: 5, exercise: "Abdominal" },
  { id: 6, exercise: "Abdominal" },
];

export const DefaultWorkoutExerciseScreen = () => {
  return (
    <Gradient>
      <Container>
        <CommandText textAlign={"center"} marginTop={"15%"}>Treinos predefinidos</CommandText>
        <Title marginTop={"5%"} marginBottom={"10%"}>Treino A</Title>
        <ListContainer heightContainer={"50%"}>
          <ListComponent
            data={exercises}
            renderItem={({ item }) => (
              <ExerciseCard
                marginBottom={"5%"}
                titleExercise={item.exercise}
                icon={(size, color) => (
                  <Fontisto name="trash" size={size} color={color} />
                )}
              />
            )}
          />
        </ListContainer>
          <Button
            marginTop={"20%"}
            title="Adicionar exercício"
            icon={(size, color) => (
              <Entypo name="chevron-right" size={size} color={color} />
            )}
          />
      </Container>
    </Gradient>
  );
};
