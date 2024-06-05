import React from 'react';
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Images/splash.png')}
        style={styles.image}
      />
      <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1A1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  loader: {
    position: 'absolute',
  },
});

export default Loader;
