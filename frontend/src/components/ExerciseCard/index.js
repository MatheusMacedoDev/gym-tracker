import { ContainerExerciseCard, ContainerIconTrash, ContainerTitleExerciseCard } from "./Container/style"
import { TitleExerciseCard } from "./Title/style"

const iconSize = 25;
const iconColor = '#FF8434'

export const ExerciseCard = ({ icon }) => {
    return (
        <ContainerExerciseCard>
            <ContainerTitleExerciseCard>
                <TitleExerciseCard>Supino com halteres</TitleExerciseCard>
            </ContainerTitleExerciseCard>
            <ContainerIconTrash>
                {icon && icon(iconSize, iconColor)}
            </ContainerIconTrash>
        </ContainerExerciseCard>
    )
}