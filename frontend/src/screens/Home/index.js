
import { Container } from "../../components/Container/style"
import Gradient from "../../components/Gradient"
import { Logo } from "../../components/Logo"
import { CalendarHome } from "../../components/Calendar"
import { Title } from "../../components/Title/style"
import { useState } from "react"
import DiaryWorkoutContainer from "./Style/DiaryWorkoutContainer"
import ImageWelcome from "./Style/ImageWelcome"
import TextWelcome from "./Style/TextWelcome"
import WelcomeContainer from "./Style/WelcomeContainer"
import WorkoutContent from "./Style/WorkoutContent"
import ImageRepresentation from "./Style/ImageRepresentation"
import { Button } from "../../components/Button"
import LabelWorkout from "./Style/NotExistWorkout/LabelWorkout"


export const Home = () => {

    const [date, setDate] = useState()
    const [exist, setExists] = useState(false)

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
                        {exist ?
                            <>
                            
                            </>
                            :
                            <>
                            <LabelWorkout>Nenhum treino foi registrado hoje.</LabelWorkout>
                            </>
                            }
                    </WorkoutContent>
                    <ImageRepresentation resizeMode="contain" source={require("../../assets/Images/WomanRepresentation.png")} />
                </DiaryWorkoutContainer>
            </Container>
        </Gradient>
    )
}