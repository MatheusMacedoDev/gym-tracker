import { Modal } from 'react-native';
import ContentModal from './style/ContentModal';
import { Title } from '../Title/style';
import { Logo } from '../Logo';
import { Input } from '../Input/style';
import { Button } from '../Button';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../colors.config';
import Gradient from '../Gradient';
import { percentage } from '../../utils/percentageFactory';
import { useContext, useState } from 'react';
import AuthContext from '../../global/AuthContext';
import { CreateDefaultWorkout } from '../../infra/services/defaultWorkoutService';
import { IconButton } from '../IconButton';
import { MaterialIcons } from '@expo/vector-icons';
import ModalBackground from '../ModalBackground/ModaBackground';

export const NewWorkoutModal = ({
    navigation,
    visible,
    setShowModalNewWorkout,
    ...rest
}) => {
    const [trainingName, setTrainingName] = useState();
    const user = useContext(AuthContext);

    async function CreateWorkout() {
        const response = await CreateDefaultWorkout(
            user.user.userId,
            trainingName
        );

        const workout = response.data;

        setShowModalNewWorkout(false);

        navigation.navigate('DefaultWorkoutExerciseScreen', {
            defaultWorkoutId: workout.defaultWorkoutId,
            trainingName: trainingName
        });
    }

    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            statusBarTranslucent={false}
            animationType='fade'
        >
            <ModalBackground>
                <ContentModal>
                    <Gradient locationOne={1} roundedBorders={true}>
                        <IconButton
                            gradient={false}
                            top='14px'
                            left='14px'
                            icon={
                                <MaterialIcons
                                    name='reply'
                                    size={40}
                                    color={'#FB6614'}
                                    onPress={() =>
                                        setShowModalNewWorkout(false)
                                    }
                                />
                            }
                        />
                        <Logo
                            widthLogo={'27%'}
                            heightLogo={'12%'}
                            marginTop={percentage(0.08, 'h')}
                        />
                        <Title fontSize={18} marginTop={percentage(0.06, 'h')}>
                            Defina o nome do treino:
                        </Title>
                        <Input
                            placeholder='Nome do treino...'
                            widthInput={'85%'}
                            heightInput={'13%'}
                            marginTop={percentage(0.05, 'h')}
                            onChangeText={setTrainingName}
                        />
                        <Button
                            alignCenter={true}
                            widthButton={'85%'}
                            heightButton={'11%'}
                            marginTop={percentage(0.06, 'h')}
                            handleClickFn={CreateWorkout}
                            title='Criar treino'
                            fontSize={16}
                            icon={() => (
                                <Ionicons
                                    name='send'
                                    size={20}
                                    color={colors.white}
                                />
                            )}
                        />
                    </Gradient>
                </ContentModal>
            </ModalBackground>
        </Modal>
    );
};
