import React from 'react';
import { FlatList, View } from 'react-native';
import Gradient from '../../components/Gradient';
import LineChartComponent from '../../components/Grafic';
import ProfileBoxInput from '../../components/ProfileBoxInput/Input/style';
import styles from './styles'; 
import ContainerBoxInput from '../../components/ProfileBoxInput/Container/style';

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
      <View style={styles.container}>
        <LineChartComponent data={data} />
        <ContainerBoxInput>
          <FlatList
            data={inputs}
            renderItem={renderItem}
            keyExtractor={item => item.key}
          />
        </ContainerBoxInput>
      </View>
    </Gradient>
  );
};

export default Profile;
