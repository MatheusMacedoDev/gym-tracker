import { CommandText } from "../../components/CommandText/style";
import { Container } from "../../components/Container/style"
import Gradient from "../../components/Gradient"
import { IconButton } from "../../components/IconButton"
import { MaterialIcons } from "@expo/vector-icons";
import { Title } from "../../components/Title/style";
import { ExerciseCard } from "../../components/ExerciseCard";
import { Button } from "../../components/Button";
import { Entypo } from '@expo/vector-icons';

export const TrainingExercisesScreens = ({ navigation }) => {
    return (
        <Gradient>
            <Container>
                <IconButton
                    gradient={false}
                    icon={<MaterialIcons name="reply" size={40} color={"#FB6614"} />}
                />
                <CommandText textAlign={"center"} marginTop={"25%"} >Treinos predefinidos</CommandText>
                <Title marginTop={"5%"} marginBottom={"10%"}>{"Treino A"}</Title>
                <ExerciseCard titleExercise={"Supino reto"} marginBottom={"5%"} />
                <ExerciseCard titleExercise={"Supino reto"} marginBottom={"5%"} />
                <ExerciseCard titleExercise={"Supino reto"} marginBottom={"5%"} />
                <ExerciseCard titleExercise={"Supino reto"} marginBottom={"5%"} />
                <ExerciseCard titleExercise={"Supino reto"} marginBottom={"5%"} />
                <ExerciseCard titleExercise={"Supino reto"} marginBottom={"5%"} />
                <Button
                    handleClickFn={() => navigation.navigate("SelectGroupMuscle")}
                    marginTop={"10%"}
                    title="Adicionar exercício"
                    icon={(size, color) => (
                        <Entypo name="chevron-right" size={size} color={color} />
                    )}
                />

            </Container>
        </Gradient>
    )
}