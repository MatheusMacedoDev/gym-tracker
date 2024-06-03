import React from 'react';
import { Gradient } from "../components/Container/style";
import { Title } from '../components/Title/style';
import { ContainerPresentation } from '../screens/Presentation/style';
import { Button } from '../components/Button';
import { Subtitulo } from '../screens/PresentationInitial/style';
import { IconButton } from '../components/IconButton';
import { MaterialIcons } from "@expo/vector-icons";


export const Joao = () => {
  return (
    <Gradient>
      <ContainerPresentation>

        <IconButton
          gradient={false}
          icon={
            <MaterialIcons name="reply" size={40} color={'#FB6614'} />
          }
        />

        <Subtitulo FontSize={12} marginTop={"20%"}>Treinos predefinidos</Subtitulo>

        <Title FontSize={20} marginTop={"3%"}>Exercicios</Title>
        

        <Button
          marginTop={"170%"}
          title="Adicionar exerxicios"
        />
      </ContainerPresentation>

    </Gradient>
  );
};
