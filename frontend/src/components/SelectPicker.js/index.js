import { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import ScrollPicker from "./ScrollPicker";
import { colors } from "../../colors.config";


const start = 1900;
const years = new Array(new Date().getFullYear() - start + 1)
  .fill(0)
  .map((_, i) => {
    const value = start + i;
    return { value, label: value };
  })
  .reverse();

export const SelectPicker = ({onItemPress, valueNow}) => {
  const defaultValue = 2010;
  const [currentValue, setCurrentValue] = useState(defaultValue);

  const handelPickerItemChange = (value) => {
    setCurrentValue(value);
  };

  return (
    <ScrollPicker
        list={years}
        onItemPress={onItemPress}
        labelColor="white"
        separatorColor="white"
        selectedColor= {colors.orange}
        currentValue={valueNow}
    />
  );
};


