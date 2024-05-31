import { SafeAreaView } from "react-native";
import Gradient from "./gradient";
import IconButtoContainer from './container'



export const IconButton = ({ icon, gradient = true, sizeButton=48,handleClickFn = null, left, top }) => {

    if (gradient === false) {
        left= 20,
        top= 45
    }

    return (
            <IconButtoContainer left={left} top={top} sizeButton={sizeButton} onPress={handleClickFn}>
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