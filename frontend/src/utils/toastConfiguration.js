import { BaseToast } from "react-native-toast-message";
import { colors } from "../colors.config";

export const toastConfig = {
    success: props => (
        <BaseToast
            {...props}
            style={{
                borderLeftColor: colors.orange,
                borderLeftWidth: 6,
                backgroundColor: colors.darkGray,
                height: 70,
                position: 'absolute',
                top: 20,
                zIndex: 1000,
            }}
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            text1Style={{
                fontSize: 18,
                fontWeight: '600',
                color: colors.white
            }}
            text2Style={{
                fontSize: 14,
                fontWeight: '300',
                color: colors.white
            }}
        />
    ),

    error: props => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 17
            }}
            text2Style={{
                fontSize: 15
            }}
        />
    ),

    tomatoToast: ({ text1, props }) => (
        <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>
    )
};