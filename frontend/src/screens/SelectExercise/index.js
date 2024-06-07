import React, { useState } from 'react';
import { Title } from '../../components/Title/style';
import { Button } from '../../components/Button';
import { Subtitulo } from '../../screens/PresentationInitial/style';
import { IconButton } from '../../components/IconButton';
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from 'react-native';
import BtnExercise from './style'; // Certifique-se de que o caminho está correto
import Gradient from '../../components/Gradient';
import { Container } from '../../components/Container/style';
import { ListContainer } from '../../components/ListContainer/style';
import { SelectedExerciseModal } from '../../components/SelectedExerciseModal';

const data = [
  { id: '1', title: 'Peito' },
  { id: '2', title: 'Bíceps' },
  { id: '3', title: 'Tríceps' },
  { id: '4', title: 'Bundinha' },
];


export const SelectExercise = ({navigation}) => {
  const [showModalExercise, setShowModalExercise] = useState(false)
  
  const renderItem = ({ item }) => (
    <BtnExercise title={item.title} onPress={() => setShowModalExercise(true)} />
  );


  return (
    <Gradient>
      <Container>
        <IconButton
          gradient={false}
          icon={<MaterialIcons name="reply" size={40} color={'#FB6614'} 
          onPress={() => navigation.goBack()}
          />}
        />
        
        <Title FontSize={20} marginTop={"15%"}>Exercícios</Title>
        
        <ListContainer heightContainer={"65%"}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ marginTop: '20%' }}
        />
        </ListContainer>

        <Button
          marginTop={"10%"}  
          title="Adicionar exercícios"
          handleClickFn={() => navigation.navigate("SelectGroupMuscle")}
        />
        <SelectedExerciseModal
          visible={showModalExercise}
          setShowModalExercise={setShowModalExercise}
          navigation={navigation}
        />
      </Container>
    </Gradient>
  );
};
