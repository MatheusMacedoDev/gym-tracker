import React, { useState, useRef } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './style'; // Importa os estilos atualizados

const screenWidth = Dimensions.get('window').width;

const ITEM_WIDTH = 100; // Largura fixa de cada item
const ITEM_HEIGHT = ITEM_WIDTH * 1.2; // Altura de cada item

const SELECTED_ITEM_WIDTH = 150; // Largura fixa do item selecionado
const SELECTED_ITEM_HEIGHT = SELECTED_ITEM_WIDTH * 1.2; // Altura do item selecionado

const Carousel = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleSlideChange = (index) => {
    const newIndex = Math.max(0, Math.min(index, images.length - 1)); // Limita o índice entre 0 e o número de imagens - 1
    setSelectedImageIndex(newIndex);
    scrollToSelectedImage(newIndex); // Corrigido para mover para a imagem selecionada
  };

  const scrollToSelectedImage = (index) => {
    const offsetX = index * ITEM_WIDTH;
    scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        <TouchableOpacity onPress={() => handleSlideChange(selectedImageIndex - 1)}>
          <MaterialIcons name="chevron-left" size={40} color="white" />
        </TouchableOpacity>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, width: ITEM_WIDTH * images.length }} // Define a largura total do conteúdo
          onScroll={(event) => {
            const slideIndex = Math.round(event.nativeEvent.contentOffset.x / ITEM_WIDTH);
            setSelectedImageIndex(slideIndex); // Atualiza o índice da imagem selecionada ao rolar a lista
          }}
        >
          {images.map((image, index) => {
            const isSelected = selectedImageIndex === index; // Verifica se a imagem está selecionada
            const borderStyle = isSelected ? { borderColor: '#FFF', borderWidth: 2 } : {}; // Estilo da borda
            const containerStyle = isSelected
              ? { width: SELECTED_ITEM_WIDTH, height: SELECTED_ITEM_HEIGHT } // Para trazer a imagem selecionada para a frente
              : { width: ITEM_WIDTH, height: ITEM_HEIGHT, marginHorizontal: 5, opacity: 0.5, marginTop: 25 }; // Adiciona margem horizontal e opacidade às imagens não selecionadas

            return (
              <TouchableOpacity key={index} onPress={() => handleSlideChange(index)}>
                <View style={[styles.slide, borderStyle, containerStyle]}>
                  <Image source={image} style={styles.image} />
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <TouchableOpacity onPress={() => handleSlideChange(selectedImageIndex + 1)}>
          <MaterialIcons name="chevron-right" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Carousel;
