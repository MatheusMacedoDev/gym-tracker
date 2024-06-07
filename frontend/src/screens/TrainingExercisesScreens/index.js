import { CommandText } from "../../components/CommandText/style";
import { Container } from "../../components/Container/style";
import Gradient from "../../components/Gradient";
import { IconButton } from "../../components/IconButton";
import { MaterialIcons } from "@expo/vector-icons";
import { Title } from "../../components/Title/style";
import { ExerciseCard } from "../../components/ExerciseCard";
import { Button } from "../../components/Button";
import { Entypo } from "@expo/vector-icons";
import { ListContainer } from "../../components/ListContainer/style";
import { ListComponent } from "../../components/List/style";
import { TouchableOpacity } from "react-native";

const exercises = [
  { id: 1, exercise: "Supino com halteres" },
  { id: 2, exercise: "Agachamento" },
  { id: 3, exercise: "Cadeira extensora" },
  { id: 4, exercise: "Abdominal" },
  { id: 5, exercise: "Flexao" },
  { id: 6, exercise: "Abdominal" },
];

export const TrainingExercisesScreens = ({ navigation, route }) => {
  return (
    <Gradient>
      <Container>
        <IconButton
          gradient={false}
          icon={
            <MaterialIcons
              name="reply"
              size={40}
              color={"#FB6614"}
              onPress={() => navigation.goBack()}
            />
          }
        />
        <CommandText textAlign={"center"} marginTop={"25%"}>
          Treinos predefinidos
        </CommandText>
        <Title marginTop={"5%"} marginBottom={"10%"}>
          {route.params.trainingName}
        </Title>
        <ListContainer heightContainer={"50%"}>
          <ListComponent
            data={exercises}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("ExerciseRecord")}>
                <ExerciseCard
                  marginBottom={"5%"}
                  titleExercise={item.exercise}
                />
              </TouchableOpacity>
            )}
          />
        </ListContainer>

        <Button
          handleClickFn={() => navigation.navigate("Main")}
          marginTop={"10%"}
          title="Finalizar Treino"
          icon={(size, color) => (
            <Entypo name="chevron-right" size={size} color={color} />
          )}
        />
      </Container>
    </Gradient>
  );
};
