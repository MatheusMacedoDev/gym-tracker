import React from "react";
import { useWindowDimensions }  from "react-native";


export function percentage(percentageAmount, axis) {
    const { width, height } = useWindowDimensions();

    axis = axis.toLowerCase();

    if (axis === 'w') {
        return `${Math.round(percentageAmount * width)}px`;
    }

    if (axis === 'h') {
        return `${Math.round(percentageAmount * height)}px`
    }
}