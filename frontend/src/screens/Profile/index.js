import React from 'react';
import { FlatList, View } from 'react-native';
import Gradient from '../../components/Gradient';
import LineChartComponent from '../../components/Grafic';
import ProfileBoxInput from '../../components/ProfileBoxInput/Input/style';
import styles from './style';
import { Button } from '../../components/Button';
import CartaoPerfil from '../../components/CardProfile';
import ContainerInputsProfile from './style';
import { Container, ScrollContainer } from '../../components/Container/style';
import RegisterProgressingComponent from '../../components/RegisterProgressingComponent';

const Profile = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(251, 102, 20, ${opacity})`,
        strokeWidth: 2
      }
    ],
    legend: ["Progresso"]
  };

  const inputs = [
    { key: '1', placeholder: 'Kg', labelText: 'Peso' },
    { key: '2', placeholder: 'Kg', labelText: 'Peso' },
    { key: '3', placeholder: 'Kg', labelText: 'Peso' },
    { key: '4', placeholder: 'Kg', labelText: 'Peso' },
    { key: '5', placeholder: 'Kg', labelText: 'Peso' },
    { key: '6', placeholder: 'Kg', labelText: 'Peso' },
    { key: '7', placeholder: 'Kg', labelText: 'Peso' },
    { key: '8', placeholder: 'Kg', labelText: 'Peso' },
  ];

  const renderItem = ({ item }) => (
    <ProfileBoxInput placeholder={item.placeholder} labelText={item.labelText} />
  );

  return (
    <Gradient>
      <Container>
        <CartaoPerfil
          nome="João Oliveira"
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMi61i5ieAks081B7kEedNZtMWFpFjYyc79aQgPVuM7MhAW4gVPtvwYhkTjjHea3lG4E&usqp=CAU"
          curtidas="1,2k"
        />

        <ScrollContainer>
          <LineChartComponent data={data} />
          <View style={styles.container}>

            <ContainerInputsProfile>
              <FlatList
                data={inputs}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
              />
            </ContainerInputsProfile>
          </View>


          <RegisterProgressingComponent handleClickFn={() => navigation.navigate("Camera")} />



        </ScrollContainer>
        <Button
          title="Editar"
        />
      </Container>

    </Gradient>
  );
};

export default Profile;
