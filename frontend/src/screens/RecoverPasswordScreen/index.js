import { Button } from "../../components/Button"
import { CommandText } from "../../components/CommandText/style"
import { Container } from "../../components/Container/style"
import { IconButton } from "../../components/IconButton"
import { Input } from "../../components/Input/style"
import { Title } from "../../components/Title/style"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

export const RecoverPasswordScreen = () => {
    return (
        <Container>
            <IconButton
                gradient={false}
                icon={
                    <MaterialIcons name="reply" size={40} color={'#FB6614'} />
                }
            />

            <Title textAli marginTop={250}>Esqueceu a senha?</Title>

            <CommandText marginTop={30}>Digite o seu e-mail para que possamos enviar um código de recuperação.</CommandText>

            <Input marginTop={60} placeholder="Email de recuperação..." />

            <Button
            marginTop={140}
                title="Continuar"
                icon={(size, color) => (
                    <Entypo name="chevron-right" size={28} color={color} />
                )}
            />
        </Container>
    )
}