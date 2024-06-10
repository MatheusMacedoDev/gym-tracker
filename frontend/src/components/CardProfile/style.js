import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    width: 200,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nome: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  curtidas: {
    marginLeft: 5,
    fontSize: 18,
    color: '#FF6347',
  },
});

export default estilos;