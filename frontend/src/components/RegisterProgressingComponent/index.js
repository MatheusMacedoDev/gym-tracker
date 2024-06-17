import { colors } from '../../colors.config';
import { IconButton } from '../IconButton';
import CameraView from './Style/CameraView';
import ProgressingContainer from './Style/ProgressingContainer';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default RegisterProgressingComponent = ({
    handleClickFn,
    editable = false
}) => {
    return (
        <ProgressingContainer>
            <CameraView>
                <Feather name='camera' size={150} color='#5F6368' />
                {editable && (
                    <IconButton
                        handleClickFn={handleClickFn}
                        right={0}
                        bottom={0}
                        widthButton={50}
                        heightButton={50}
                        icon={
                            <Entypo
                                name='plus'
                                size={42}
                                color={colors.white}
                            />
                        }
                    />
                )}
            </CameraView>
        </ProgressingContainer>
    );
};
