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
                    justifyContent: 'space-between',
                    marginTop: 10,
                    backgroundColor: '#2F2C32',
                    position: 'relative'
                }}
                arrowicon={
                    <Image
                        style={{ marginTop: 4 }}
                        source={require('../../assets/icons/MaskGroup.png')}
                    />
                }
                search={false}
                placeholder='Nº'
                maxHeight={140}
                dropdownStyles={{
                    width: '100%',
                    backgroundColor: '#2F2C32',
                    position: 'absolute',
                    zIndex: 100,
                    top: 48
                }}
                dropdownTextStyles={{
                    fontSize: 18,
                    color: '#DBDADD',
                    verticalAlign: 'middle'
                }}
                inputStyles={{
                    fontSize: 16,
                    color: '#DBDADD',
                    verticalAlign: 'middle'
                }}
                setSelected={setSelected}
                notFoundText=''
                data={data}
            />
        </SelectContainer>
    );
};
