
import { Container } from "../../components/Container/style"
import Gradient from "../../components/Gradient"
import { Logo } from "../../components/Logo"
import { WelcomeContainer } from "./Style/WelcomeContainer"
import { CalendarHome } from "../../components/Calendar"
import { ImageWelcome } from "./Style/ImageWelcome"
import { TextWelcome } from "./Style/TextWelcome"
import { Title } from "../../components/Title/style"
import { useState } from "react"

export const Home = () => {
    const[date, setDate] = useState()
    return(
        <Gradient>
            <Container>
                <Logo widthLogo={105} heightLogo={50} marginTop={'7%'}/>
                <WelcomeContainer>
                    <ImageWelcome  resizeMode="cover" source={require("../../assets/joao.jpeg")}/>
                    <TextWelcome>Bem vindo,<Title fontSize={24}> Joao</Title></TextWelcome>
                </WelcomeContainer>
                <CalendarHome setTrainingDate={setDate}/>
            </Container>
        </Gradient>
    )
}