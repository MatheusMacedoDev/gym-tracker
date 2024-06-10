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

export const NewWorkoutModal = ({
    navigation,
    visible,
    setShowModalNewWorkout,
    ...rest
}) => {
    const [trainingName, setTrainingName] = useState();
    const [workout, setWorkout] = useState();

    async function CreateWorkout() {
        const response = await CreateDefaultWorkout(
            '92ef5d63-a75e-432d-aa7a-b3006f246b60',
            trainingName
        );
        setWorkout(response.data);
        console.log(response.data);
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
            <ContentModal style={{ shadowColor: 'white', shadowOpacity: 0.4 }}>
                <Gradient locationOne={1} roundedBorders={true}>
                    <Logo
                        widthLogo={'27%'}
                        heightLogo={'12%'}
                        marginTop={percentage(0.05, 'h')}
                    />
                    <Title fontSize={18} marginTop={percentage(0.05, 'h')}>
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
                        marginTop={percentage(0.05, 'h')}
                        handleClickFn={CreateWorkout}
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
        </Modal>
    );
};
