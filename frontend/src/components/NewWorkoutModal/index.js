import { Modal } from "react-native";
import  ContentModal  from "./style/ContentModal";
import { Title } from "../Title/style";
import { Logo } from "../Logo";
import { Input } from "../Input/style";
import { Button } from "../Button";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../colors.config";
import Gradient from "../Gradient";
import { CreateDefaultWorkout } from "../../infra/services/defaultWorkoutService";
import { useState } from "react";


export const NewWorkoutModal = ({ navigation, visible, setShowModalNewWorkout, ...rest }) => {

    const [trainingName, setTrainingName] = useState()

    async function CreateWorkout() {
        const response = await CreateDefaultWorkout("92ef5d63-a75e-432d-aa7a-b3006f246b60", trainingName)
        console.log(response);
        setShowModalNewWorkout(false)
    }

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ContentModal style={{shadowColor: 'white', shadowOpacity: 0.4}}>
                <Gradient locationOne={1} borderRadius={'15px'}>
                    <Logo widthLogo={'27%'} heightLogo={'12%'} marginTop={'15%'}/>
                    <Title fontSize={18} marginTop={'8%'}>Defina o nome do treino:</Title>
                    <Input placeholder="Nome do treino..." widthInput={'85%'} heightInput={'13%'} marginTop={'12%'} onChangeText={setTrainingName} value={trainingName}/>
                    <Button widthButton={'85%'} heightButon={'12%'} marginTop={'10%'} handleClickFn={CreateWorkout}
                    icon={(size, color) => (
                        <Ionicons name="send" size={20} color={colors.white}/>
                    )}
                    />
                </Gradient>
            </ContentModal>
        </Modal>
    )
}
