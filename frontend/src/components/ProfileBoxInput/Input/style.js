import styled from "styled-components/native";
import { colors } from "../../../colors.config";

const ProfileInput = styled.TextInput.attrs({
    placeholderTextColor: colors.orange
})`
    width: 60px;
    border: 1px solid #F9F9F9;
    height: 60px;
    border-radius: 10px;
    color: ${colors.orange};
    font-family: "Montserrat_700Bold";
    padding-left: 20px;
    margin-top: 20px;
`;

export default ProfileInput;