import { Image } from "react-native"
import { Button } from "../../components/Button"
import { CommandText } from "../../components/CommandText/style"
import { Container } from "../../components/Container/style"
import { IconButton } from "../../components/IconButton"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo"
import { Title } from "../../components/Title/style"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import Gradient from "../../components/Gradient"

export const RecoverPasswordScreen = ({ navigation }) => {

    async function passToEmailCode() {
        navigation.navigate("EmailCodeScreen")
    }

    return (
        <Gradient>
            <Container>
                <IconButton
                    gradient={false}
                    icon={
                        <MaterialIcons name="reply" size={40} color={'#FB6614'} />
                    }
                />
                <Logo marginTop={'30%'} />
                <Title marginTop={'10%'}>Esqueceu a senha?</Title>
                <CommandText marginTop={'10%'}>Digite o seu e-mail para que possamos enviar um código de recuperação.</CommandText>
                <Input marginTop={'20%'} placeholder="Email de recuperação..." />
                <Button
                    handleClickFn={passToEmailCode}
                    marginTop={'35%'}
                    title="Continuar"
                    icon={(size, color) => (
                        <Entypo name="chevron-right" size={size} color={color} />
                    )}
                />
            </Container>
        </Gradient>
    )
}