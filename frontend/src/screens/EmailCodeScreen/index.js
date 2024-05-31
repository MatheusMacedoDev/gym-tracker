import { useState } from "react"
import { Button } from "../../components/Button"
import CodeInput from "../../components/CodeInput"
import { CommandText } from "../../components/CommandText/style"
import { Container } from "../../components/Container/style"
import { IconButton } from "../../components/IconButton"
import { Title } from "../../components/Title/style"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { Keyboard, TouchableWithoutFeedback } from "react-native"

export const EmailCodeScreen = () => {
    const [code, setCode] = useState('');
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>

                <IconButton
                    gradient={false}
                    icon={
                        <MaterialIcons name="reply" size={40} color={'#FB6614'} />
                    }
                />

                <Title textAli marginTop={250}>Código de verificação</Title>

                <CommandText marginTop={30} marginBottom={70}>Digite o cógido que foi enviado para o seu e-mail para verficarmos o seu pedido.</CommandText>

                <CodeInput code={code} setCode={setCode} />

                <Button
                    marginTop={120}
                    title="Continuar"
                    icon={(size, color) => (
                        <Entypo name="chevron-right" size={28} color={color} />
                    )}
                />

            </Container>
        </TouchableWithoutFeedback>
    )
}