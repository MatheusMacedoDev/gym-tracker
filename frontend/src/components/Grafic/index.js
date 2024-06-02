import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';
import styles from './style'; 

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: "#FFA726", // Laranja claro ein 
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FB8C00", // Laranja mais um poucoescuro 
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(255, 152, 0, ${opacity})`, // Laranja para os pontos e linhas
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Branco para os labels
  fillShadowGradient: '#FF9800', // Laranja para a sombraza abaixo da linha
  fillShadowGradientOpacity: 0.3, // Transparência da sombra
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726"
  } 
};

const LineChartComponent = ({ data }) => {
  return (
    <View style={styles.container}>
     <LineChart
  data={data}
  width={screenWidth}
  height={150}
  verticalLabelRotation={0}
  chartConfig={chartConfig}
  bezier
/>
    </View>
  );
};

export default LineChartComponent;
