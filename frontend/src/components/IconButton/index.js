import Gradient from '../Gradient'
import IconButtoContainer from './container'



export const IconButton = ({ icon, gradient = true, handleClickFn = null, left, top }) => {

    if (gradient === false) {
        top = 50
    }

    return (
        <IconButtoContainer background={gradient} left={left} top={top} onPress={handleClickFn}>
            {icon && icon}
        </IconButtoContainer>
    )
}