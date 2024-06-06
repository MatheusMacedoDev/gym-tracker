import { Modal } from "react-native";
import  ContentModal  from "./style/ContentModal";
import { Title } from "../Title/style";
import { Logo } from "../Logo";
import { Input } from "../Input/style";
import { Button } from "../Button";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../colors.config";
import Gradient from "../Gradient";


export const NewWorkoutModal = ({ navigation, visible, setShowModalNewWorkout, ...rest }) => {

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ContentModal style={{shadowColor: 'white', shadowOpacity: 0.4}}>
                <Gradient locationOne={1} borderRadius={'15px'}>
                    <Logo widthLogo={'27%'} heightLogo={'12%'} marginTop={'15%'}/>
                    <Title fontSize={18} marginTop={'8%'}>Defina o nome do treino:</Title>
                    <Input placeholder="Nome do treino..." widthInput={'85%'} heightInput={'13%'} marginTop={'12%'}/>
                    <Button widthButton={'85%'} heightButon={'12%'} marginTop={'10%'} handleClickFn={() => setShowModalNewWorkout(false)}
                    icon={(size, color) => (
                        <Ionicons name="send" size={20} color={colors.white}/>
                    )}
                    />
                </Gradient>
            </ContentModal>
        </Modal>
    )
}
