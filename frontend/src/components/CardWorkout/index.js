import {
  ContainerCard,
  ContainerText,
} from "./Container/style";
import { CardSubtitle, CardTitle } from "./Title/style";

export const CardWorkout = ({
  trainingName,
  muscleGroups,
  marginTop,
  marginBottom,
  isSelected
}) => {

  return (
      <ContainerCard isSelected={isSelected} marginTop={marginTop} marginBottom={marginBottom}>
        <ContainerText>
          <CardTitle>{trainingName}</CardTitle>
          <CardSubtitle>{muscleGroups}</CardSubtitle>
        </ContainerText>
      </ContainerCard>
  );
};
