import { Text, View } from "react-native"
import CodeInput from "../components/CodeInput"
import { useState } from "react";

export const Eduardo = () => {
    const [code, setCode] = useState('');

    return(
        <View style={{height:800, width: '90%', alignItems:"center",alignSelf:"center"}}>
            <Text style={{marginTop: 100, marginBottom:50}}>TESTES</Text>
            <CodeInput 
                code={code}
                setCode={setCode}
            />
        </View>
    )
}