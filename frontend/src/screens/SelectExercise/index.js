import React from 'react';
import { Title } from '../../components/Title/style';
import { Button } from '../../components/Button';
import { Subtitulo } from '../../screens/PresentationInitial/style';
import { IconButton } from '../../components/IconButton';
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from 'react-native';
import BtnExercise from './style'; // Certifique-se de que o caminho está correto
import Gradient from '../../components/Gradient';
import { Container } from '../../components/Container/style';

const data = [
  { id: '1', title: 'Peito' },
  { id: '2', title: 'Bíceps' },
  { id: '3', title: 'Tríceps' },
  { id: '4', title: 'Bundinha' },
];

const renderItem = ({ item }) => (
  <BtnExercise title={item.title} onPress={() => console.log(item.title)} />
);

export const SelectExercise = () => {
  return (
    <Gradient>
      <Container>
        <IconButton
          gradient={false}
          icon={<MaterialIcons name="reply" size={40} color={'#FB6614'} />}
        />
        
        <Title FontSize={20} marginTop={"15%"}>Exercícios</Title>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ marginTop: '20%' }}
        />

        <Button
          marginTop={"10%"}  
          title="Adicionar exercícios"
        />
      </Container>
    </Gradient>
  );
};
