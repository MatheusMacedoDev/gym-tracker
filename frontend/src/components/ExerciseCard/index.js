import { ContainerExerciseCard, ContainerIconTrash, ContainerTitleExerciseCard } from "./Container/style"
import { TitleExerciseCard } from "./Title/style"

const iconSize = 25;
const iconColor = '#FF8434'

export const ExerciseCard = ({ icon, titleExercise, marginTop, marginBottom, disabledTrue, defaultWorkout }) => {
    return (
        <ContainerExerciseCard disabledTrue={disabledTrue} marginTop={marginTop} marginBottom={marginBottom}>
            <ContainerTitleExerciseCard>
                <TitleExerciseCard>{titleExercise}</TitleExerciseCard>
            </ContainerTitleExerciseCard>
            <ContainerIconTrash>
                {disabledTrue ? icon && icon(iconSize, iconColor) : defaultWorkout  ? icon && icon(iconSize, iconColor) : null}
            </ContainerIconTrash>
        </ContainerExerciseCard>
    )
}