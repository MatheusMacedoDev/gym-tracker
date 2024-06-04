import { Modal, Text } from "react-native";
import { Title } from "../Title/style";
import ContentModal from "./style/ContentModal";
import Gradient from "../Gradient";
import { Select } from "../Select";
import { Button } from "../Button";
import { Link } from "../Link/style";
import ViewSelect from "./style/ViewSelect";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../colors.config";

export const SelectedExerciseModal = ({ navigation, visible, setShowModalExercise, ...rest }) => {

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ContentModal style={{ shadowColor: 'white', shadowOpacity: 0.4 }}>
                <Gradient locationOne={1} borderRadius={'15px'}>
                    <Title fontSize={32} marginTop={'20%'} marginBottom={'10%'}>Supino com halteres</Title>
                    <ViewSelect>
                        <Select label={"Series"} />
                        <Select label={"Repetições"} />
                    </ViewSelect>
                    <Button
                        marginTop={'15%'}
                        widthButton={'85%'}
                        heightButon={'9%'}
                        title={'Salvar'}
                        icon={(size, color) => (
                            <Ionicons name="save" size={22} color={colors.white} />
                        )}
                    />
                    <Link marginTop={'5%'} textAlign={'center'} onPress={() => setShowModalExercise(false)}>Cancelar</Link>
                </Gradient>
            </ContentModal>
        </Modal>
    )
}
