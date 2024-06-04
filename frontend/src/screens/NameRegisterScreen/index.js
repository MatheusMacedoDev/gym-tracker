import { Button } from "../../components/Button"
import { Container } from "../../components/Container/style"
import Gradient from "../../components/Gradient"
import { IconButton } from "../../components/IconButton"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo"
import { Title } from "../../components/Title/style"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react"

export const NameRegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("Maceta");

    async function passToAccountData() {
        navigation.navigate("AccountDataRegisterScreen", {name: name})
    }


    return (
        <Gradient>
            <Container>
                <IconButton
                handleClickFn={() => navigation.navigate("LoginScreen")}
                    gradient={false}
                    icon={
                        <MaterialIcons name="reply" size={40} color={'#FB6614'} />
                    }
                />
                <Logo marginTop={'30%'}/>
                <Title fontSize={38} marginTop={'10%'}>Qual o seu nome?</Title>
                <Input value={name} onChangeText={setName} marginTop={'25%'} placeholder="Seu nome..." />
                <Button
                    handleClickFn={passToAccountData}
                    marginTop={'50%'}
                    title="Continuar"
                    icon={(size, color) => (
                        <Entypo name="chevron-right" size={28} color={color} />
                    )}
                />
            </Container>
        </Gradient>
    )
}