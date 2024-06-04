import { Button } from "../../components/Button"
import {  Container } from "../../components/Container/style"
import { IconButton } from "../../components/IconButton"
import { Logo } from "../../components/Logo"
import { Title } from "../../components/Title/style"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { CardsGender } from "../../components/CardsGender/index.js"
import Gradient from "../../components/Gradient/index.js"

export const GenderRegisterScreen = ({ navigation }) => {

    return (
        <Gradient>
            <Container>
            <IconButton
                gradient={false}
                icon={
                    <MaterialIcons name="reply" size={40} color={'#FB6614'} />
                }
            />
            <Logo marginTop={'17%'} />
            <Title fontSize={35} marginTop={'5%'} marginBottom={'25%'}>Qual o seu sexo?</Title>
            <CardsGender/>
            <Button
            handleClickFn={() => navigation.navigate("BirthYearRegisterScreen")}
                marginTop={'20%'}
                title="Continuar"
                icon={(size, color) => (
                    <Entypo name="chevron-right" size={size} color={color} />
                )}
            />
            </Container>
        </Gradient>
    )
}