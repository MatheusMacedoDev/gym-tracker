import styled from "styled-components/native";
import { colors } from "../../../colors.config";

const ProfileInput = styled.TextInput.attrs({
    placeholderTextColor: colors.orange
})`
    width: 100%;
    border: 1px solid #F9F9F9;
    height: 75%;
    border-radius: 10px;
    color: ${colors.orange};
    font-family: "Montserrat_700Bold";
    padding-left: 25%;
`;

export default ProfileInput;