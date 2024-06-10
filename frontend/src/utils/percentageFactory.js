import { Dimensions } from 'react-native';

export function percentage(percentageAmount, axis) {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    axis = axis.toLowerCase();

    if (axis === 'w') {
        return `${Math.round(percentageAmount * width)}px`;
    }

    if (axis === 'h') {
        return `${Math.round(percentageAmount * height)}px`;
    }
}
