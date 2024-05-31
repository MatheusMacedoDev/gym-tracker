import { Image } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { SelectContainer } from "./Container/style";
import { LabelSelect } from "./Label/style";

const seriesNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Select = ({ setSelected, label }) => {
  return (
    <SelectContainer>
    <LabelSelect>{label && label}</LabelSelect>
    <SelectList
      boxStyles={{
        width: "100%",
        height: 50,
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "#2F2C32",
      }}
      arrowicon={<Image source={require('../../assets/icons/MaskGroup.png')}/>}
      search={false}
      placeholder="Nº"
      maxHeight={100}
      dropdownStyles={{ width: "100%", height: 120, backgroundColor: "#2F2C32",}}
      dropdownTextStyles={{ fontSize: 18, color: '#DBDADD' }}
      inputStyles={{ fontSize: 18, color: '#DBDADD'}}
      setSelected={setSelected}
      notFoundText=""
      data={seriesNumber}
    />
    </SelectContainer>
  );
};
