import { colors } from "../../colors.config";
import { IconButton } from "../IconButton";
import { Title } from "../Title/style"
import CameraView from "./Style/CameraView";
import ProgressingContainer from "./Style/ProgressingContainer"
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default RegisterProgressingComponent = () => {
    return (
        <ProgressingContainer>
            <Title fontSize={20} alignSelf={'flex-start'}>Evolução</Title>
            <CameraView>
                <Feather name="camera" size={150} color="#5F6368" />
                <IconButton
                right={0}
                bottom={0}
                widthButton={50}
                heightButon={50}
                icon={<Entypo name="plus" size={42} color={colors.white} />}
                />
            </CameraView>

        </ProgressingContainer>
    )
}