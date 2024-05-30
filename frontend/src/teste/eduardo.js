import {  Text, View } from "react-native"
import { useState } from "react";
import { Input } from "../components/Input/style";

export const Eduardo = () => {
    const [code, setCode] = useState('');


    return (
        <View style={{ height: 800, width: '90%', alignItems: "center", alignSelf: "center" }}>
            <Text style={{ marginTop: 100, marginBottom: 50 }}>TESTES</Text>
            <Input placeholder="E-mail ou usuário..."/>
        </View>
    )
}