import React from "react";
import { useWindowDimensions }  from "react-native";


export function percentage(percentageAmount, axis) {
    const { width, height } = useWindowDimensions();

    axis = axis.toLowerCase();

    if (axis === 'w') {
        return percentageAmount * width;
    }

    if (axis === 'h') {
        return percentageAmount * height
    }
}