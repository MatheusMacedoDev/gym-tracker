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
import { useEffect } from "react"

export const AccountDataRegisterScreen = ({ navigation, route }) => {

    useEffect(() => {
        console.log(route.params);
    },[route])

    return (
        <Gradient>
            <Container>
                <IconButton
                    gradient={false}
                    icon={
                        <MaterialIcons name="reply" size={40} color={'#FB6614'} />
                    }
                />
                <Logo marginTop={'15%'} />
                <Title marginTop={'5%'}>Dados da Conta</Title>
                <CommandText textAlign={'center'} marginTop={'10%'}>{route.params.name} por favor, preencha os seus dados  para criar sua nova conta:</CommandText>
                <Input marginTop={'20%'} placeholder="Nome de usuário..." />
                <Input marginTop={'5%'} placeholder="E-mail..." />
                <Input marginTop={'5%'} placeholder="Senha..." />
                <Input marginTop={'5%'} placeholder="Confirme sua senha..." />
                <Button
                handleClickFn={() => navigation.navigate("GenderRegisterScreen")}
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