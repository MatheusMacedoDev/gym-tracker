import { colors } from "../../colors.config";
import ContainerBoxIput from "./Container/style"
import ProfileInput from "./Input/style";
import LabelInput from "./Label/style"

const ProfileBoxInput = ({placeholder, labelText}) => {
    return (
        <ContainerBoxIput>
            <LabelInput>{labelText}</LabelInput>
            <ProfileInput placeholder={placeholder}/>
        </ContainerBoxIput>
    )
}

export default ProfileBoxInput;