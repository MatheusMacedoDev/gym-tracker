import { Text, View } from "react-native"
import { useEffect, useState } from "react";
import { IconButton } from "../components/IconButton";
import { MaterialIcons } from "@expo/vector-icons";
import CodeInput from "../components/CodeInput";
import { Input } from "../components/Input/style";
import { CalendarHome } from "../components/Calendar";
import { CommandText } from "../components/CommandText/style";
import { Container, Gradient } from "../components/Container/style";
import { Button } from "../components/Button";
import { NewWorkoutModal } from "../components/NewWorkoutModal";

export const Eduardo = () => {
    const [showModalNewWorkout, setShowModalNewWorkout] = useState()


    return (
        <Gradient>
            <Container>
            <Text style={{ marginTop: 100, marginBottom: 50 }}>TESTES</Text>
            <Button handleClickFn={() => setShowModalNewWorkout(true)}/>

            
            <NewWorkoutModal
                    visible={showModalNewWorkout}
                    setShowModalNewWorkout={setShowModalNewWorkout}
            />


             </Container>
        </Gradient>
    )
}