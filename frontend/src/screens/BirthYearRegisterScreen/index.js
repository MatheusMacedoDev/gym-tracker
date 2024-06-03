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
import { createArrayYears } from "../../utils/arraysFactory.js"

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
            <Logo marginTop={'30%'} />
            <Title fontSize={35} marginTop={'10%'}>Qual o seu ano de nascimento?</Title>
            <SelectPicker
                onItemPress={setYearBirth}
                valueNow={yearBirth}
                list={createArrayYears()}
            /> 
            <Button
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