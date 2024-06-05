import { ContainerExerciseCard, ContainerIconTrash, ContainerTitleExerciseCard } from "./Container/style"
import { TitleExerciseCard } from "./Title/style"

const iconSize = 25;
const iconColor = '#FF8434'

export const ExerciseCard = ({ icon, titleExercise, marginTop, marginBottom }) => {
    return (
        <ContainerExerciseCard marginTop={marginTop} marginBottom={marginBottom}>
            <ContainerTitleExerciseCard>
                <TitleExerciseCard>{titleExercise}</TitleExerciseCard>
            </ContainerTitleExerciseCard>
            <ContainerIconTrash>
                {icon && icon(iconSize, iconColor)}
            </ContainerIconTrash>
        </ContainerExerciseCard>
    )
}