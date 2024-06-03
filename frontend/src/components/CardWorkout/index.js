import { useState } from "react"
import { ButtonContainer, ContainerCard, ContainerText } from "./Container/style"
import { CardSubtitle, CardTitle } from "./Title/style"
import { TouchableOpacity } from "react-native"

export const CardWorkout = ({ trainingName, muscleGroups }) => {

    const [onSelected, setOnSelected] = useState(false)

    return (
        <ButtonContainer onPress={() => {onSelected ? setOnSelected(false) : setOnSelected(true)}}>
            <ContainerCard onSelected={onSelected}>
                <ContainerText>
                    <CardTitle>{trainingName}</CardTitle>
                    <CardSubtitle>{muscleGroups}</CardSubtitle>
                </ContainerText>
            </ContainerCard>
        </ButtonContainer>
    )
}