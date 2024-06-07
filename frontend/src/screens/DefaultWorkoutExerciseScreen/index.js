import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { CommandText } from "../../components/CommandText/style";
import { Container } from "../../components/Container/style";
import { ExerciseCard } from "../../components/ExerciseCard";
import Gradient from "../../components/Gradient";
import { IconButton } from "../../components/IconButton";
import { ListComponent } from "../../components/List/style";
import { ListContainer } from "../../components/ListContainer/style";
import { Title } from "../../components/Title/style";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { GetExercisesByDefaultWorkout } from "../../infra/services/defaultWorkoutService";

const exercises = [
  { id: 1, exercise: "Supino com halteres" },
  { id: 2, exercise: "Agachamento" },
  { id: 3, exercise: "Cadeira extensora" },
  { id: 4, exercise: "Abdominal" },
  { id: 5, exercise: "Flexao" },
  { id: 6, exercise: "Abdominal" },
];

export const DefaultWorkoutExerciseScreen = ({ navigation, route }) => {

  const [defaultWorkoutExercises, setDefaultWorkoutExercises] = useState();
  const defaultWorkoutId = route.params.defaultWorkoutId;
  const trainingName = route.params.trainingName;

  useEffect(() => {
    if (route.params.defaultWorkoutId != null && route.params.defaultWorkoutId != undefined) {
      console.log(defaultWorkoutId);
      GetDefaultWorkoutExercise()
    }
    else {
      console.log("erro");
    }
  }, [])

  async function GetDefaultWorkoutExercise() {
    console.log(defaultWorkoutId);
    const response = await GetExercisesByDefaultWorkout(defaultWorkoutId)
    console.log(response.data);
    setDefaultWorkoutExercises(response.data)
  }

  return (
    <Gradient>
      <Container>
        <IconButton
          gradient={false}
          icon={<MaterialIcons name="reply" size={40} color={"#FB6614"} 
          onPress={() => navigation.goBack()}
          />}
        />
        <CommandText textAlign={"center"} marginTop={"15%"}>Treinos predefinidos</CommandText>
        <Title marginTop={"5%"} marginBottom={"10%"}>{trainingName}</Title>
        <ListContainer heightContainer={"50%"}>
          <ListComponent
            data={defaultWorkoutExercises}
            renderItem={({ item }) => (
              <ExerciseCard
                marginBottom={"5%"}
                titleExercise={item.exerciseName}
                icon={(size, color) => (
                  <Fontisto name="trash" size={size} color={color} />
                )}
              />
            )}
          />
        </ListContainer>
        <Button
          handleClickFn={() => navigation.navigate("SelectGroupMuscle", {trainingName: trainingName})}
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
