import { Image } from "react-native"
import { Button } from "../../components/Button"
import { CommandText } from "../../components/CommandText/style"
import { Container, Gradient } from "../../components/Container/style"
import { IconButton } from "../../components/IconButton"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo"
import { Title } from "../../components/Title/style"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

export const NameRegisterScreen = ({ navigation }) => {


    return (
        <Gradient>
            <Container>
                <IconButton
                    gradient={false}
                    icon={
                        <MaterialIcons name="reply" size={40} color={'#FB6614'} />
                    }
                />

                <Logo />

                <Title marginTop={220}>Qual o seu nome?</Title>

                <Input marginTop={'20%'} placeholder="Seu nome..." />

                <Button
                    marginTop={'60%'}
                    title="Continuar"
                    icon={(size, color) => (
                        <Entypo name="chevron-right" size={28} color={color} />
                    )}
                />
            </Container>
        </Gradient>
    )
}