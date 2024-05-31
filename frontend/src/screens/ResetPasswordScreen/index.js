import { Button } from "../../components/Button"
import { CommandText } from "../../components/CommandText/style"
import { Container } from "../../components/Container/style"
import { IconButton } from "../../components/IconButton"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo"
import { Title } from "../../components/Title/style"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

export const ResetPasswordScreen = ({ navigation }) => {

    return (
        <Container>
            <IconButton
                handleClickFn={() => { navigation.navigate("EmailCodeScreen") }}
                gradient={false}
                icon={
                    <MaterialIcons name="reply" size={40} color={'#FB6614'} />
                }
            />

            <Title textAli marginTop={250}>Quase lá</Title>

            <CommandText textAlign={'center'} marginTop={40}>Altere sua senha</CommandText>

            <Input marginTop={60} placeholder="Nova senha..." />
            <Input marginTop={30} placeholder="Repita a nova senha..." />

            <Button
                marginTop={100}
                title="Continuar"
                icon={(size, color) => (
                    <Entypo name="chevron-right" size={28} color={color} />
                )}
            />
        </Container>
    )
}