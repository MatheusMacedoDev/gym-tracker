import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LineChartComponent from '../components/Grafic/index'; // ajuste o caminho conforme necessário

const data = {
  labels: ["dom", "seg", "ter", "qua", "qui", "sex"],
  datasets: [
    {
      data: [10, 50, 30, 20, 40, 60], // Exemplo de progressão linear
      strokeWidth: 2, // optional
      color: (opacity = 1) => `rgba(255, 152, 0, ${opacity})`, // Laranja para os pontos e linhas
    }
  ],
  legend: ["Progressão ao longo do tempo"]
};

export const Joao = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LineChartComponent data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Mude a cor de fundo conforme necessário
  },
});
