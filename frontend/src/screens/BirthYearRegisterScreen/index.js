import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import {  Container } from "../../components/Container/style"
import { IconButton } from "../../components/IconButton"
import { Logo } from "../../components/Logo"
import { Title } from "../../components/Title/style"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { createArrayYears } from "../../utils/arraysFactory.js"
import Gradient from "../../components/Gradient/index.js"
import { SelectPicker } from "../../components/SelectPicker/index.js"

export const BirthYearRegisterScreen = ({ navigation, route }) => {
    const [yearBirth, setYearBirth] = useState(2000);



    return (
        <Gradient>
            <Container>
            <IconButton
            handleClickFn={() => navigation.navigate("GenderRegisterScreen")}
                gradient={false}
                icon={
                    <MaterialIcons name="reply" size={40} color={'#FB6614'} />
                }
            />
            <Logo marginTop={'30%'} />
            <Title marginTop={'10%'}>Qual o seu ano de nascimento?</Title>
            <SelectPicker
                onItemPress={setYearBirth}
                valueNow={yearBirth}
                list={createArrayYears()}
            /> 
            <Button
                handleClickFn={() => navigation.navigate("WeightRecordScreen")}
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