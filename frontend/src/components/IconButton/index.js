import { SafeAreaView } from "react-native";
import Gradient from "./gradient";
import IconButtoContainer from './container'



export const IconButton = ({ icon, gradient = true, sizeButton=48 }) => {
    return (
            <IconButtoContainer sizeButton={sizeButton}>
                {gradient
                    ?
                    <Gradient>
                        {icon && icon}
                    </Gradient>
                    :
                    <>
                        {icon && icon}
                    </>
                }
            </IconButtoContainer>
    )
}