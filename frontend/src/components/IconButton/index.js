import Gradient from '../Gradient'
import IconButtoContainer from './container'



export const IconButton = ({ icon, gradient = true,handleClickFn = null, left, top }) => {

    if (gradient === false) {
        top= 50
    }

    return (
            <IconButtoContainer left={left} top={top} onPress={handleClickFn}>
                {gradient
                    ?
                    <Gradient colorOne={'#FF8434'} colorTwo={'#FB6614'} locationOne={0.39} borderRadius={'20px'}>
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