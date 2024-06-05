import React from 'react';
import { ContainerPresentation, ContainerText, TextTitle, RoundImage, TextDescription, TextContainer, Container2 } from "./style";
import { Button } from '../../components/Button';
import Gradient from '../../components/Gradient';

const roundImageSource = require('../../assets/Images/joaocantor.jpg');

export const Presentation = ({navigation}) => {
  return (
    <Gradient>

      <ContainerPresentation>

        <ContainerText>

          <Container2>

            <TextTitle>
              hello,{"\n"}
              Gym bro
            </TextTitle>

            <RoundImage source={roundImageSource} />

          </Container2>

          <TextContainer>

            <TextDescription>
              Bem-vindo ao Gym Tracker! Organize seus treinos, acompanhe seu progresso e alcance suas metas fitness com facilidade. Vamos juntos transformar sua jornada de exercícios!
            </TextDescription>

          </TextContainer>

        </ContainerText>
        <Button
          title="Continuar"
        />
      </ContainerPresentation>

    </Gradient>
  );
};
export default Presentation;