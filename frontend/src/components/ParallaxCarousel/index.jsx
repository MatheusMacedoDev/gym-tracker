import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CarouselContainer from './components/CarouselContainer';
import CarouselImage from './components/CarouselImage';
import { useSharedValue } from 'react-native-reanimated';

const width = Dimensions.get('window').width;

export default function ParallaxCarousel({
    data,
    marginTop = '20px',
    marginBottom = '20px'
}) {
    const selectedItem = useSharedValue(1);

    return (
        <CarouselContainer marginTop={marginTop} marginBottom={marginBottom}>
            <Carousel
                loop
                width={width}
                height={200}
                pagingEnabled={true}
                snapEnabled={true}
                autoPlay={true}
                data={data}
                autoPlayInterval={3000}
                scrollAnimationDuration={100}
                withAnimation={{
                    type: 'spring',
                    config: {
                        damping: 16
                    }
                }}
                mode='parallax'
                onSnapToItem={index => (selectedItem.value = index)}
                modeConfig={{
                    parallaxScrollingScale: 1.2,
                    parallaxScrollingOffset: 280,
                    parallaxAdjacentItemScale: 0.8
                }}
                renderItem={({ item, index }) => (
                    <CarouselImage
                        key={index}
                        index={index}
                        imageUri={item}
                        selectedItem={selectedItem}
                    />
                )}
            />
        </CarouselContainer>
    );
}
