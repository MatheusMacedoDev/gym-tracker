import { Modal } from "react-native"
import { ContainerBoxInput, ContentModal } from "./Container/style"
import Gradient from "../Gradient"
import { Logo } from "../Logo"
import { Title } from "../Title/style"
import { CommandText } from "../CommandText/style"
import { colors } from "../../colors.config"
import ProfileBoxInput from "../ProfileBoxInput"
import { LinkCommandText } from "../../screens/LoginScreen/components/linkCommandText"
import { Button } from "../Button"

export const ConfirmEditModal = ({ navigation, visible, setShowConfirmEditModal, ...rest }) => {
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ContentModal>
                <Gradient borderRadius={'15px'}>
                    <Logo widthLogo={"78px"} heightLogo={"39px"} marginTop={"10%"}/>
                    <Title fontSize={"18px"} marginTop={"5%"}>Você confirma seus dados?</Title>
                    <CommandText fontSize={"14px"} textAlign={"center"} marginTop={"5%"}>Após a confirmação você somente poderá alterar novamente os seus dados </CommandText>
                    <CommandText fontSize={"14px"} colorText={colors.orange} textAlign={"center"} marginBottom={"5%"}>daqui uma semana.</CommandText>
                    <ContainerBoxInput marginBottom={"5%"}>
                        <ProfileBoxInput widhtBoxInput={"25%"} labelText={"Peso"} placeholder={"KG..."}/>
                        <ProfileBoxInput widhtBoxInput={"25%"} labelText={"Altura"} placeholder={"CM..."}/>
                        <ProfileBoxInput widhtBoxInput={"25%"} labelText={"BF"} placeholder={"%..."}/>
                    </ContainerBoxInput>
                    <ContainerBoxInput marginBottom={"5%"}>
                        <ProfileBoxInput widhtBoxInput={"25%"} labelText={"Ombros"} placeholder={"CM..."}/>
                        <ProfileBoxInput widhtBoxInput={"25%"} labelText={"Cintura"} placeholder={"CM..."}/>
                        <ProfileBoxInput widhtBoxInput={"25%"} labelText={"Quadril"} placeholder={"CM..."}/>
                    </ContainerBoxInput>
                    <ContainerBoxInput>
                        <ProfileBoxInput widhtBoxInput={"25%"} labelText={"Braço"} placeholder={"CM..."}/>
                        <ProfileBoxInput widhtBoxInput={"25%"} labelText={"Perna"} placeholder={"CM..."}/>
                    </ContainerBoxInput>
                    <Button title={"Eu tenho certeza!"} widthButton={"80%"} heightButon={"7%"} marginTop={'10%'} marginBottom={"5%"}/>
                    <LinkCommandText onPress={() => setShowConfirmEditModal(false)} colorText={colors.orange} textAlign={"center"}>Não tenho certeza</LinkCommandText>
                </Gradient>
            </ContentModal>
        </Modal>
    )
}