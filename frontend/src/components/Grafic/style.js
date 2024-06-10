import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  chartContainer: {
    width: screenWidth * 0.9 + 4, // Adiciona 4 para considerar a largura da borda (2 de cada lado)
    height: 190, // Adiciona 4 para considerar a altura da borda (2 de cada lado)
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    borderRadius: 14, // Diminui o borderRadius para ficar dentro do container
  },
});

export default styles;
