import { ContainerCard, ContainerInput, ContainerText } from "./Container/style";
import { InputCharge, InputRepetitions } from "./Input/style";
import { CardSubtitle, CardTitle } from "./Title/style";

export const ExerciseSerieCard = () => {
  return (
    <ContainerCard>
      <ContainerText>
        <CardTitle>Serie 1</CardTitle>
        <CardSubtitle>(10 Repetições)</CardSubtitle>
      </ContainerText>
      <ContainerInput>
        <InputCharge 
        placeholder="Kg..."
        />
        <InputRepetitions 
        placeholder="0..."
        />
      </ContainerInput>
    </ContainerCard>
  );
};
