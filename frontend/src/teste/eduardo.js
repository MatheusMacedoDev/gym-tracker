import { Text } from "react-native"
import { useState } from "react";
import { Container } from "../components/Container/style";
import { Button } from "../components/Button";
import { NewWorkoutModal } from "../components/NewWorkoutModal";
import Gradient from "../components/Gradient";
import { SelectedExerciseModal } from "../components/SelectedExerciseModal";
import RegisterProgressingComponent from "../components/RegisterProgressingComponent";

export const Eduardo = ({navigation}) => {
    const [showModalNewWorkout, setShowModalNewWorkout] = useState(false)
    const [showModalExercise, setShowModalExercise] = useState(false)


    return (
        <Gradient>
            <Container>
                <Text style={{ marginTop: 100, marginBottom: 50 }}>TESTES</Text>
                {/* <Button handleClickFn={() => setShowModalExercise(true)} />
                <Button handleClickFn={() => setShowModalNewWorkout(true)} />

                <NewWorkoutModal
                    visible={showModalNewWorkout}
                    setShowModalNewWorkout={setShowModalNewWorkout}
                />

                <SelectedExerciseModal
                    visible={showModalExercise}
                    setShowModalExercise={setShowModalExercise}
                /> */}

                <RegisterProgressingComponent handleClickFn={() => navigation.navigate("Camera")}/>

            </Container>
        </Gradient>
    )
}