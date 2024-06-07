
import { Container } from "../../components/Container/style"
import Gradient from "../../components/Gradient"
import { Logo } from "../../components/Logo"
import { CalendarHome } from "../../components/Calendar"
import { Title } from "../../components/Title/style"
import { useEffect, useState } from "react"
import DiaryWorkoutContainer from "./Style/DiaryWorkoutContainer"
import ImageWelcome from "./Style/ImageWelcome"
import TextWelcome from "./Style/TextWelcome"
import WelcomeContainer from "./Style/WelcomeContainer"
import WorkoutContent from "./Style/WorkoutContent"
import ImageRepresentation from "./Style/ImageRepresentation"
import { Button } from "../../components/Button"
import { ListContainer } from "../../components/ListContainer/style"
import { ListComponent } from "../../components/List/style"
import ExistWorkoutComponent from "./ExistWorkoutComponent"
import { IconButton } from "../../components/IconButton"
import { FontAwesome } from '@expo/vector-icons';
import { colors } from "../../colors.config"
import LabelWorkout from "./NotExistWorkout/LabelWorkout"
import { GetExercisesByDiaryWorkout } from "../../infra/services/diaryWorkoutService"



export const Home = ({ navigation }) => {

    const [date, setDate] = useState()
    const [exercises, setExercises] = useState([])
    const [workoutName, setWorkoutName] = useState()

    useEffect(() => {
        GetExercises()
    }, [date])

    async function GetExercises() {
        const response = await GetExercisesByDiaryWorkout(date, 'e27f87e1-3189-4224-a7fc-47ccf9ed61f6')
        setExercises(response.data.diaryExercises)
        setWorkoutName(response.data.workoutName)
        console.log(response);
    }

    return (
        <Gradient>
            <Container>
                <Logo widthLogo={105} heightLogo={50} marginTop={'7%'} />
                <WelcomeContainer>
                    <ImageWelcome resizeMode="cover" source={require("../../assets/joao.jpeg")} />
                    <TextWelcome>Bem vindo,<Title fontSize={24}> Joao</Title></TextWelcome>
                </WelcomeContainer>
                <CalendarHome setTrainingDate={setDate} />
                <DiaryWorkoutContainer>
                    <WorkoutContent>
                        {exercises ?
                            <>

                                <Title alignSelf={"flex-start"} marginBottom={'20%'} fontSize={24} >{workoutName}</Title>
                                <ListContainer heightContainer={'55%'}>
                                    <ListComponent
                                        data={exercises}
                                        renderItem={({ item }) => (
                                            <ExistWorkoutComponent nameExercise={item.exerciseName} />
                                        )}

                                    />
                                </ListContainer>
                                <IconButton left={'5%'} top={'75%'} icon={
                                    <FontAwesome name="trash" size={24} color={colors.white} />
                                }
                                />
                            </>
                            :
                            <>
                                <LabelWorkout>Nenhum treino foi registrado hoje.</LabelWorkout>
                                <Button fontSize={12} title="Registrar treino" heightButon={'13%'} marginTop={'20%'} widthButton={'90%'} handleClickFn={() => navigation.navigate("TrainingRecordScreen")} />
                            </>
                        }
                    </WorkoutContent>
                    <ImageRepresentation resizeMode="contain" source={require("../../assets/Images/MenRepresentation.png")} />
                </DiaryWorkoutContainer>
            </Container>
        </Gradient>
    )
}