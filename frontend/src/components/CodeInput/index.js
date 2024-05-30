import React from 'react'

import { Cell, CellWrapper } from './style';
import { StyleSheet } from 'react-native';
import { CodeField,  useBlurOnFulfill, useClearByFocusCell, Cursor } from 'react-native-confirmation-code-field';

const CELL_COUNT = 5;

export default function CodeInput({ code, setCode }) {
    const ref = useBlurOnFulfill({code, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value: code,
        setValue: setCode
    });

    return (
        <CellWrapper>
            <CodeField
                ref={ref}
                {...props}
                value={code}
                autoFocus={true}
                onChangeText={setCode}
                cellCount={CELL_COUNT}
                rootStyle={codeFieldStyle}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                    <Cell
                        key={index}
                        onLayout={getCellOnLayoutHandler(index)}
                    >
                        {symbol || (isFocused ? <Cursor/> : null)}
                    </Cell>
                )}
            />
        </CellWrapper>
    )
}

const codeFieldStyle = StyleSheet.create({
    gap: 15
});