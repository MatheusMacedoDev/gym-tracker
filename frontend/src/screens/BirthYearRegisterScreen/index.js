import { useState } from "react"
import { Button } from "../../components/Button"
import { CommandText } from "../../components/CommandText/style"
import {  Container, Gradient } from "../../components/Container/style"
import { IconButton } from "../../components/IconButton"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo"
import { SelectPicker } from "../../components/SelectPicker.js"
import { Title } from "../../components/Title/style"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

export const BirthYearRegisterScreen = ({ navigation }) => {
    const [yearBirth, setYearBirth] = useState(2000);

    return (
        <Gradient>
            <Container>
            <IconButton
                gradient={false}
                icon={
                    <MaterialIcons name="reply" size={40} color={'#FB6614'} />
                }
            />

            <Title fontSize={35} marginTop={180}>Qual o seu ano de nascimento?</Title>

            <SelectPicker
                onItemPress={setYearBirth}
                valueNow={yearBirth}
            /> 

            <Button
                marginTop={90}
                title="Continuar"
                icon={(size, color) => (
                    <Entypo name="chevron-right" size={28} color={color} />
                )}
            />
            </Container>
        </Gradient>
    )
}