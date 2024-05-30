import { Text, View } from "react-native"
import { useState } from "react";
import { IconButton } from "../components/IconButton";
import { MaterialIcons } from "@expo/vector-icons";

export const Eduardo = () => {
    const [code, setCode] = useState('');


    return (
        <View style={{ height: 800, width: '90%', alignItems: "center", alignSelf: "center" }}>
            <Text style={{ marginTop: 100, marginBottom: 50 }}>TESTES</Text>
            <IconButton
                icon={
                    <MaterialIcons name="delete" size={26} color={'#F9F9F9'} />
                }
            />
            <IconButton
                gradient={false}
                icon={
                    <MaterialIcons name="reply" size={40} color={'#FB6614'} />
                }
            />
            <IconButton
            sizeButton={32}
                icon={
                    <MaterialIcons name="edit" size={21} color={'#F9F9F9'} />
                }
            />
        </View>
    )
}