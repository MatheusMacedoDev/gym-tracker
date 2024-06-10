import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import estilos from './style';

const CartaoPerfil = ({ nome, imagem, curtidas }) => {
  return (
    <View style={estilos.container}>
    <Image source={{ uri: imagem }} style={estilos.image} />
    <Text style={estilos.nome}>{nome}</Text>
    <View style={estilos.likesContainer}>
      <Icon name="heart" type="font-awesome" color="#FF6347" />
      <Text style={estilos.curtidas}>{curtidas}</Text>
    </View>
  </View>
  );
};

export default CartaoPerfil;
