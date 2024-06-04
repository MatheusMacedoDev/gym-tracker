
import { Container } from "../../components/Container/style"
import Gradient from "../../components/Gradient"
import { Logo } from "../../components/Logo"
import { Title } from "../../components/Title/style"

export const RankingScreen = () => {
    return(
        <Gradient>
            <Container>
                <Logo widthLogo={105} heightLogo={50} marginTop={'7%'}/>
                <Title marginTop={'7%'}>Inspiração</Title>
            </Container>
        </Gradient>
    )
}