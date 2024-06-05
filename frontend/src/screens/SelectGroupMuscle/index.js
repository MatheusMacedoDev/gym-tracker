import React from 'react';
import { FlatList, Image } from 'react-native';
import Gradient from '../../components/Gradient';
import { ContainerPresentation } from '../../screens/Presentation/style';
import { IconButton } from '../../components/IconButton';
import { MaterialIcons } from '@expo/vector-icons';
import { Title } from '../../components/Title/style';
import { Button } from '../../components/Button';
import BtnExcercise2 from './style';



import Ombro from '../../assets/Images/Ombro.png';
import Posterior from '../../assets/Images/Posterior.png';
import Quadriceps from '../../assets/Images/Quadriceps.png';
import Panturrilha from '../../assets/Images/panturrilha.png';



const data = [
  { id: '1', title: 'Ombro', image: Ombro },
  { id: '2', title: 'Posterior', image: Posterior },
  { id: '3', title: 'Quadriceps', image: Quadriceps },
  { id: '4', title: 'Panturrilha', image: Panturrilha },
  { id: '5', title: 'Posterior', image: Posterior },
  { id: '6', title: 'Posterior', image: Posterior },
  { id: '7', title: 'Ombro', image: Ombro },
  { id: '8', title: 'Posterior', image: Posterior },
  { id: '9', title: 'Quadriceps', image: Quadriceps },
  { id: '10', title: 'Panturrilha', image: Panturrilha },
  { id: '11', title: 'Posterior', image: Posterior },
  { id: '12', title: 'Posterior', image: Posterior },
];

const renderItem = ({ item }) => (
  <BtnExcercise2
    title={item.title}
    image={item.image} 
    onPress={() => console.log(item.title)}
  />
);

const SelectGroupMuscle = ({navigation}) => {
  const numColumns = 2;

  return (
    <Gradient>
      <ContainerPresentation>
        <IconButton
          gradient={false}
          icon={<MaterialIcons name="reply" size={40} color={'#FB6614'} />}
        />

        <Title marginBottom={"10%"} FontSize={20} marginTop={"15%"} >Exercicios</Title>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={numColumns}
          key={numColumns}  
          contentContainerStyle={{ justifyContent: 'center' }}
        />

        <Button
          marginTop={"10%"}  
          title="Salvar treino"
        />
      </ContainerPresentation>
    </Gradient>
  );
};

export default SelectGroupMuscle;
