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
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Gradient from "../../components/Gradient";
import { GetDefaultWorkoutsByUserId } from "../../infra/services/defaultWorkoutService";


export const TrainingRecordScrenn = ({ navigation }) => {
  const [selectedWorkout, setSelectedWorkout] = useState();
  const [defaultWorkouts, setDefaultWorkouts] = useState();


  async function GetDefaultWorkout() {
    const response = await GetDefaultWorkoutsByUserId("92ef5d63-a75e-432d-aa7a-b3006f246b60")
    setDefaultWorkouts(response.data)
    console.log(response.data);
  }


  useEffect(() => {
    GetDefaultWorkout()
  }, [])

  return (
    <Gradient>
      <Container>
        <IconButton
          gradient={false}
          onPress={() => navigation.goBack()}
          icon={<MaterialIcons name="reply" size={40} color={"#FB6614"}
            onPress={() => navigation.goBack()} />}
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
            data={defaultWorkouts}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {
                setSelectedWorkout({
                  id: item.defaultWorkoutId,
                  trainingName: item.defaultWorkoutName
                })
              }}>
                <CardWorkout
                  trainingName={item.defaultWorkoutName}
                  muscleGroups={item.muscleGroups}
                  marginBottom={"5%"}
                  isSelected={
                    selectedWorkout ? item.defaultWorkoutId == selectedWorkout.id : false
                  }
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
          handleClickFn={() => navigation.navigate("TrainingExercisesScreens", { selectedWorkout: selectedWorkout })}
        />
      </Container>
    </Gradient>
  );
};
