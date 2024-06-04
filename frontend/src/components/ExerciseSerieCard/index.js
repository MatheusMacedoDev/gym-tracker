import { ContainerCard, ContainerInput, ContainerText } from "./Container/style";
import { InputExercise } from "./Input/style";
import { CardSubtitle, CardTitle } from "./Title/style";

export const ExerciseSerieCard = ({serialNumber, reps, marginBottom}) => {
  return (
    <ContainerCard marginBottom={marginBottom}>
      <ContainerText>
        <CardTitle>Serie {serialNumber}</CardTitle>
        <CardSubtitle>({reps} Repetições)</CardSubtitle>
      </ContainerText>
      <ContainerInput>
        <InputExercise 
        placeholder="Kg..."
        />
        <InputExercise 
        placeholder="0..."
        />
      </ContainerInput>
    </ContainerCard>
  );
};
