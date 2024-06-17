import { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import CarouselImageContainer from './CarouselImageContainer';
import ViewImage from './ViewImage';

export default function CarouselImage({ index, imageUri, selectedItem }) {
    const maskStyle = useAnimatedStyle(() => {
        const borderWidth = withSpring(selectedItem.value == index ? 3 : 0);

        return {
            borderWidth
        };
    }, [selectedItem]);

    return (
        <CarouselImageContainer>
            <ViewImage style={maskStyle} source={{ uri: imageUri }} />
        </CarouselImageContainer>
    );
}
