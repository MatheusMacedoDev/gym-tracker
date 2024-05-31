import { Button } from "../../components/Button"
import { CommandText } from "../../components/CommandText/style"
import { Container, Gradient } from "../../components/Container/style"
import { IconButton } from "../../components/IconButton"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo"
import { Title } from "../../components/Title/style"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

export const ResetPasswordScreen = ({ navigation }) => {

    return (
        <Gradient>
            <Container>
                <IconButton
                    handleClickFn={() => { navigation.navigate("EmailCodeScreen") }}
                    gradient={false}
                    icon={
                        <MaterialIcons name="reply" size={40} color={'#FB6614'} />
                    }
                />
                <Logo marginTop={'30%'} />
                <Title marginTop={'10%'}>Quase lá</Title>
                <CommandText textAlign={'center'} marginTop={'10%'}>Altere sua senha</CommandText>
                <Input marginTop={'18%'} placeholder="Nova senha..." />
                <Input marginTop={'10%'} placeholder="Repita a nova senha..." />
                <Button
                    marginTop={'30%'}
                    title="Continuar"
                    icon={(size, color) => (
                        <Entypo name="chevron-right" size={size} color={color} />
                    )}
                />
            </Container>
        </Gradient>
    )
}