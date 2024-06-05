import Gradient from '../Gradient'
import IconButtoContainer from './container'



export const IconButton = ({ icon, gradient = true, handleClickFn = null, left, top, bottom, right, widthButton, heightButon }) => {

    if (gradient === false) {
        top = 50
    }

    return (
        <IconButtoContainer background={gradient} left={left} top={top} bottom={bottom} right={right} onPress={handleClickFn} widthButton={widthButton} heightButon={heightButon}>
            {icon && icon}
        </IconButtoContainer>
    )
}