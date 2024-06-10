import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  chartContainer: {
    width: screenWidth * 0.9 + 4, // Adiciona 4 para considerar a largura da borda (2 de cada lado)
    height: 190, // Adiciona 4 para considerar a altura da borda (2 de cada lado)
    borderRadius: 16,
    borderWidth: 2, // Adiciona uma borda
    borderColor: '#C0C0C0', // Define a cor da borda como prata
    backgroundColor: '#000', // Adiciona um fundo preto para o container
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    borderRadius: 14, // Diminui o borderRadius para ficar dentro do container
  },
});

export default styles;
