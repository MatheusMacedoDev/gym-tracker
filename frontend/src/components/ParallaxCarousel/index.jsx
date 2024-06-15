import { useState } from 'react';
import { Dimensions, Image, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CarouselContainer from './components/CarouselContainer';
import CarouselImage from './components/CarouselImage';
import CarouselImageBackground from './components/CarouselImageContainer';
import CarouselImageContainer from './components/CarouselImageContainer';

const width = Dimensions.get('window').width;

export default function ParallaxCarousel({
    data,
    marginTop = '20px',
    marginBottom = '20px'
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <CarouselContainer marginTop={marginTop} marginBottom={marginBottom}>
            <Carousel
                loop
                width={width}
                height={200}
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
                onSnapToItem={setCurrentImageIndex}
                mode='parallax'
                modeConfig={{
                    parallaxScrollingScale: 1,
                    parallaxScrollingOffset: 260
                }}
                renderItem={({ index }) => (
                    <CarouselImageContainer>
                        <CarouselImage
                            snapped={index === currentImageIndex}
                            source={{
                                uri: data[index]
                            }}
                        />
                    </CarouselImageContainer>
                )}
            />
        </CarouselContainer>
    );
}
