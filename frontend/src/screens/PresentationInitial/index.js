import React from 'react';
import { Gradient } from "../../components/Container/style";
import { ImageFIsic, Subtitulo } from './style';
import { Logo } from '../../components/Logo/index';
import { Title } from '../../components/Title/style';
import { Button } from '../../components/Button';
import { ContainerPresentation } from '../Presentation/style';


// const Fisic = require('../../assets/Images/background.png');

export const PresentationInitial = ({ navigation }) => {

  return (
    <Gradient>
      <ImageFIsic source={Fisic} />
      <Logo marginTop={"-44"} heightLogo={40} widthLogo={80} />
      <Title FontSize={20} marginTop={"3%"}>Bem Vindo ao{"\n"} Gym Tracker</Title>
      <Subtitulo FontSize={12} marginTop={"2%"}>Seu app de treinos diarios</Subtitulo>
      <ContainerPresentation>
        <Button
          marginTop={"10%"}
          title="Continuar"
        />
      </ContainerPresentation>
    </Gradient>
  );
};
