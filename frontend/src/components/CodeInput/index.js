import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CodeField, useBlurOnFulfill, useClearByFocusCell, Cursor } from 'react-native-confirmation-code-field';
import { colors } from '../../colors.config';

const CELL_COUNT = 5;

export default function CodeInput({ code, setCode }) {
    const ref = useBlurOnFulfill({ code, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value: code,
        setValue: setCode
    });

    return (
        <View>
            <CodeField
                ref={ref}
                {...props}
                value={code}
                autoFocus={true}
                onChangeText={setCode}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <View
                        key={index}
                        onLayout={getCellOnLayoutHandler(index)}
                        style={[styles.cell, isFocused && styles.focusCell]}
                    >
                        <Text style={styles.cellText}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cell: {
        width: 52,
        height: 52,
        backgroundColor: colors.darkGray,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 34,
        borderRadius: 10, 
        margin: 5
    },
    cellText: {
        fontSize: 30,
        color: colors.white,
    },
    focusCell: {
        borderColor: colors.orange,
        borderWidth: 2
    },
});
