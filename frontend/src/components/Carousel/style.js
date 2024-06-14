import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width: screenWidth * 0.35,
    height: screenWidth * 0.35,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  activeSlide: {
    borderWidth: 3,
    borderColor: '#fff',
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  navigation: {
    position: 'absolute',
    top: '50%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    transform: [{ translateY: -20 }],
  },
  navButton: {
    padding: 10,
  },
  navText: {
    fontSize: 32,
    color: '#fff',
  },
});

export default styles;