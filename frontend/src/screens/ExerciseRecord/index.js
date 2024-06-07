import { Button } from "../../components/Button"
import { CommandText } from "../../components/CommandText/style"
import { Container } from "../../components/Container/style"
import { ExerciseSerieCard } from "../../components/ExerciseSerieCard"
import Gradient from "../../components/Gradient"
import { ListComponent } from "../../components/List/style"
import { ListContainer } from "../../components/ListContainer/style"
import { Logo } from "../../components/Logo"
import { Title } from "../../components/Title/style"
import { Entypo } from '@expo/vector-icons';
import { ExerciseSerieLabel } from "./Container/style"
import { Label } from "./Label/style"

const series = [
    { id: 1, serialNumber: 1, reps: 12 },
    { id: 2, serialNumber: 2, reps: 12 },
    { id: 3, serialNumber: 3, reps: 12 },
    { id: 4, serialNumber: 4, reps: 12 },
    { id: 5, serialNumber: 5, reps: 12 },
];

export const ExerciseRecord = ({ navigation }) => {
    return (
        <Gradient>
            <Container>
                <Logo marginTop={"20%"}/>
                <Title marginTop={"10%"}>Registro de exercício</Title>
                <CommandText  marginTop={"5%"} marginBottom={"10%"} textAlign={"center"}>Preencha os dados da série a seguir:</CommandText>
                <ExerciseSerieLabel>
                    <Label>Carga</Label>
                    <Label>Repetições</Label>
                </ExerciseSerieLabel>
                <ListContainer>
                    <ListComponent
                        data={series}
                        renderItem={({ item }) => (
                            <ExerciseSerieCard
                            marginBottom={"5%"}
                                serialNumber={item.serialNumber}
                                reps={item.reps}
                            />
                        )}
                    />
                </ListContainer>
                <Button
                    marginTop={'15%'}
                    handleClickFn={() => {navigation.navigate("Main")}}
                    title="Finalizar exercício"
                    icon={(size, color) => (
                        <Entypo name="chevron-right" size={size} color={color}/>
                    )}
                />
            </Container>
        </Gradient>
    )
}