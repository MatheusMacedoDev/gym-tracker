import React, { useState, useEffect, useRef } from 'react'; 
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as FileSystem from 'expo-file-system'; 
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker'; 
import { Ionicons } from '@expo/vector-icons';

export default function Camera() {
  const [permission, requestPermission] = useCameraPermissions();
  const [lastImage, setLastImage] = useState(null);
  const cameraRef = useRef(null);
  const [tipoCamera, setTipoCamera] = useState('back');

  useEffect(() => {
    (async () => {
      const { status } = await requestPermission();
      if (status !== 'granted') {
        alert('Desculpe, precisamos de permissões da câmera para usar este recurso.');
      }
    })();

    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === 'granted') {
        const assets = await MediaLibrary.getAssetsAsync({ first: 1, sortBy: [[MediaLibrary.SortBy.creationTime, false]] });
        if (assets.assets.length > 0) {
          setLastImage(assets.assets[0].uri);
        }
      }
    })();
  }, []);
  
  function toggleCameraFacing() {
    setTipoCamera(current => (current === 'back' ? 'front' : 'back'));
  }

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({ quality: 1 });
        await savePhoto(photo.uri); 
        await sendToServer(photo.uri); 
        await saveToGallery(photo.uri);
        setLastImage(photo.uri); 
        alert('A foto foi tirada e enviada para o servidor.');
      } catch (error) {
        console.error('Erro ao tirar e processar a foto:', error);
      }
    }
  };

  const savePhoto = async (uri) => {
    try {
      const fileName = uri.split('/').pop();
      const newUri = FileSystem.documentDirectory + fileName; 
      await FileSystem.copyAsync({ from: uri, to: newUri }); 
      console.log('Foto salva localmente em:', newUri);
    } catch (error) {
      console.error('Erro ao salvar a foto localmente:', error);
    }
  };

  const saveToGallery = async (uri) => {
    try {
      await MediaLibrary.saveToLibraryAsync(uri);
      console.log('Foto salva na galeria com sucesso.');
    } catch (error) {
      console.error('Erro ao salvar a foto na galeria:', error);
    }
  };

  const sendToServer = async (uri) => {
  
  };

  const handleImagePreviewClick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
  
    console.log('Resultado da seleção da imagem:', result); 
  
    if (!result.cancelled) {
      setLastImage(result.uri);
      setUriSelecionada(result.uri);
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Permitir acesso à câmera</Text>
        <Button onPress={requestPermission} title="Confirmar" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={tipoCamera}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.imagePreviewContainer} onPress={handleImagePreviewClick}>
            {lastImage && <Image source={{ uri: lastImage }} style={styles.imagePreview} />}
          </TouchableOpacity>
          <TouchableOpacity style={styles.captureButton} onPress={handleTakePicture}>
            <View style={styles.captureInnerButton} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.captureButton} onPress={toggleCameraFacing}>
            <Ionicons name="camera-reverse" size={30} color="white" /> 
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'black',
  },
  captureButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureInnerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  imagePreviewContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePreview: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
