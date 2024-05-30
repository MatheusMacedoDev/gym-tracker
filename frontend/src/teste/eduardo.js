import { Text, View } from "react-native"
import { useEffect, useState } from "react";
import { IconButton } from "../components/IconButton";
import { MaterialIcons } from "@expo/vector-icons";
import CodeInput from "../components/CodeInput";
import { Input } from "../components/Input/style";
import { CalendarHome } from "../components/Calendar";
import { CommandText } from "../components/CommandText/style";
import { Title } from "../components/Title/style";

export const Eduardo = () => {
    const [code, setCode] = useState('');
    const [trainingDate, setTrainingDate] = useState('')

    useEffect(() => {
        console.log(trainingDate);
    })


    return (
        <View style={{ height: 800, width: '90%', alignItems: "center", alignSelf: "center", backgroundColor: '#27242B' }}>
            <Text style={{ marginTop: 100, marginBottom: 50 }}>TESTES</Text>
            <CodeInput
                code={code}
                setCode={setCode}
            />


            <Input
                marginTop={30}
                placeholder="Email ou senha..."
            />


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

             <CalendarHome setTrainingDate={setTrainingDate} />

             <CommandText>Digite o seu e-mail para que possamos enviar um código de recuperação.</CommandText>
        </View>
    )
}