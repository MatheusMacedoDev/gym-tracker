import { Button } from "../../components/Button"
import { CommandText } from "../../components/CommandText/style"
import { Container } from "../../components/Container/style"
import Gradient from "../../components/Gradient"
import { IconButton } from "../../components/IconButton"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo"
import { Title } from "../../components/Title/style"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react"

export const AccountDataRegisterScreen = ({ navigation, route }) => {
    const [email, setEmail] = useState("eduardopasqualetti9@gmail.com")
    const [password, setPassword] = useState("12345")
    const [confirmPassword, setConfirmPassword] = useState("12345")

    async function handleContinue(){
        if (password === confirmPassword) {
            navigation.navigate("GenderRegisterScreen",{email: email, password: password, name: route.params.name})
        }
    }

    return (
        <Gradient>
            <Container>
                <IconButton
                handleClickFn={() => navigation.navigate("NameRegisterScreen")}
                    gradient={false}
                    icon={
                        <MaterialIcons name="reply" size={40} color={'#FB6614'} />
                    }
                />
                <Logo marginTop={'25%'} />
                <Title marginTop={'5%'}>Dados da Conta</Title>
                <CommandText textAlign={'center'} marginTop={'10%'}>{ route.params != null ? route.params.name : null} por favor, preencha os seus dados  para criar sua nova conta:</CommandText>
                <Input marginTop={'20%'} placeholder="E-mail..." value={email} onChangeText={setEmail}/>
                <Input marginTop={'5%'} placeholder="Senha..."  value={password} onChangeText={setPassword}/>
                <Input marginTop={'5%'} placeholder="Confirme sua senha..."  value={confirmPassword} onChangeText={setConfirmPassword}/>
                <Button
                    handleClickFn={handleContinue}
                    marginTop={'15%'}
                    title="Continuar"
                    icon={(size, color) => (
                        <Entypo name="chevron-right" size={size} color={color} />
                    )}
                />
            </Container>
        </Gradient>
    )
}