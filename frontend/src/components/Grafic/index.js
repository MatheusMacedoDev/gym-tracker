import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';
import styles from './style'; 

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: "transparent", // Laranja claro
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "transparent", // Laranja mais escuro
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(255, 132, 52, ${opacity})`, // Laranja para os pontos e linhas
  strokeWidth: 3,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Branco para os labels
  fillShadowGradient:`rgba(255, 132, 52, )`, // Laranja para a sombra abaixo da linha
  fillShadowGradientOpacity: 0.3, // Transparência da sombra
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#FF8434",
    fill: "#FF8434",
  } 
};

const LineChartComponent = ({ data }) => {
  return (
    <View style={styles.chartContainer}>
      <LineChart
        data={data}
        width={screenWidth * 0.9} // Diminui a largura do gráfico
        height={160}
        verticalLabelRotation={0}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

export default LineChartComponent;
