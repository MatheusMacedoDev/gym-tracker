import React from 'react';
import { Gradient } from "../components/Container/style";
import { Title } from '../components/Title/style';
import { ContainerPresentation } from '../screens/Presentation/style';
import { Button } from '../components/Button';
import { Subtitulo } from '../screens/PresentationInitial/style';
import { IconButton } from '../components/IconButton';
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, View } from 'react-native';
import BtnExcercise from '../teste/style';  

const data = [
  { id: '1', title: 'Peito' },
  { id: '2', title: 'Biceps' },
  { id: '3', title: 'Triceps' },
  { id: '3', title: 'Bundinha' },
  
];

const renderItem = ({ item }) => (
  <BtnExcercise title={item.title} onPress={() => console.log(item.title)} />
);

export const Joao = () => {
  return (
    <Gradient>
      <ContainerPresentation>
        <IconButton
          gradient={false}
          icon={<MaterialIcons name="reply" size={40} color={'#FB6614'} />}
        />

        <Subtitulo FontSize={12} marginTop={"20%"}>Treinos predefinidos</Subtitulo>

        <Title FontSize={20} marginTop={"3%"}>Exercicios</Title>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ marginTop: '40%' }}
        />

        <Button
          marginTop={"10%"}  
          title="Adicionar exerxicios"
        />
      </ContainerPresentation>
    </Gradient>
  );
};
