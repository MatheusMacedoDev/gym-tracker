

import Gradient from "../../components/Gradient"
import { Logo } from "../../components/Logo"
import { ScrollContainer } from "../../components/ScrollContainer"
import { Title } from "../../components/Title/style"
import { RankingTitle } from "./Style/RankingTitle"
import { ListContainer } from "../../components/ListContainer/style"
import { ListComponent } from "../../components/List/style"
import { RankingCard } from "../../components/RankingCard"

import photo from "../../assets/joao.jpeg"

const usuarios = [
    { id: 1, nome: "Rubens Moura", curtidas: '2,9' },
    { id: 2, nome: "Matheus Macedo", curtidas: '2,5' },
    { id: 3, nome: "Gabriela Ramos", curtidas: '1,8' },
    { id: 4, nome: "Joao Oliveira", curtidas: '1,4' },
    { id: 5, nome: "Eduardo Pasqualetti", curtidas: '1,1' },
    { id: 5, nome: "Eduardo Pasqualetti", curtidas: '1,1' },
    { id: 5, nome: "Eduardo Pasqualetti", curtidas: '1,1' },
];


export const RankingScreen = () => {
    return (
        <Gradient>
            <ScrollContainer >
                <Logo widthLogo={105} heightLogo={50} marginTop={'30%'} />
                <Title marginTop={'7%'}>Inspiração</Title>
                <RankingTitle>Mais curtidas</RankingTitle>
                <ListContainer>
                    <ListComponent
                    data={usuarios}
                    renderItem={({ item, index }) => (

                     <RankingCard name={item.nome} likes={item.curtidas} sequentialNumber={index + 1}/>
                    
                    )}
                    />
                </ListContainer>
            </ScrollContainer>
        </Gradient>
    )
}