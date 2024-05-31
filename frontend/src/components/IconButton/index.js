import { SafeAreaView } from "react-native";
import Gradient from "./gradient";
import IconButtoContainer from './container'



export const IconButton = ({ icon, gradient = true,handleClickFn = null, left, top }) => {

    if (gradient === false) {
        top= 50
    }

    return (
            <IconButtoContainer left={left} top={top} onPress={handleClickFn}>
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