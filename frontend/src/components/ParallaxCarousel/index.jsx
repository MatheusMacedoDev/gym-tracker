import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CarouselContainer from './components/CarouselContainer';
import CarouselImage from './components/CarouselImage';
import { useSharedValue } from 'react-native-reanimated';
import { Entypo } from '@expo/vector-icons';
import { IconButton } from '../IconButton';
import { colors } from '../../colors.config';
import { percentage } from '../../utils/percentageFactory';

const width = Dimensions.get('window').width;

export default function ParallaxCarousel({
    data,
    marginTop = '20px',
    marginBottom = '20px',
    editable = false,
    setBackgroundScrollEnabled = () => {},
    handleAddClickFn = () => {}
}) {
    const selectedItem = useSharedValue(1);

    return (
        <CarouselContainer marginTop={marginTop} marginBottom={marginBottom}>
            <Carousel
                loop
                width={width}
                style={{
                    justifyContent: 'center',
                    height: '100%'
                }}
                onScrollBegin={setBackgroundScrollEnabled(false)}
                onScrollEnd={() => {
                    setBackgroundScrollEnabled(true);
                }}
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
            {editable && (
                <IconButton
                    handleClickFn={handleAddClickFn}
                    left={percentage(0.6, 'w')}
                    bottom={10}
                    widthButton={50}
                    heightButton={50}
                    icon={<Entypo name='plus' size={42} color={colors.white} />}
                />
            )}
        </CarouselContainer>
    );
}
