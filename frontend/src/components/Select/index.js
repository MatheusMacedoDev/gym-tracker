import { Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { SelectContainer } from './Container/style';
import { LabelSelect } from './Label/style';

export const Select = ({ setSelected, label, data }) => {
    return (
        <SelectContainer>
            <LabelSelect>{label && label}</LabelSelect>
            <SelectList
                boxStyles={{
                    width: '100%',
                    height: 45,
                    alignItems: 'center',
                    marginTop: 10,
                    backgroundColor: '#2F2C32',
                    position: 'relative'
                }}
                arrowicon={
                    <Image
                        source={require('../../assets/icons/MaskGroup.png')}
                    />
                }
                search={false}
                placeholder='Nº'
                maxHeight={100}
                dropdownStyles={{
                    width: '100%',
                    height: 120,
                    backgroundColor: '#2F2C32',
                    position: 'absolute',
                    zIndex: 100,
                    top: 48
                }}
                dropdownTextStyles={{ fontSize: 18, color: '#DBDADD' }}
                inputStyles={{ fontSize: 16, color: '#DBDADD' }}
                setSelected={setSelected}
                notFoundText=''
                data={data}
            />
        </SelectContainer>
    );
};
