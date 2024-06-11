import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        width: 200
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20
    },
    nome: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 10
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    curtidas: {
        marginLeft: 6,
        fontSize: 16,
        color: '#FF8434'
    }
});

export default estilos;
