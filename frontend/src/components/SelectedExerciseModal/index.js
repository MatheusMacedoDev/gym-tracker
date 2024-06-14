import { Modal } from 'react-native';
import { Title } from '../Title/style';
import ContentModal from './style/ContentModal';
import Gradient from '../Gradient';
import { Select } from '../Select';
import { Button } from '../Button';
import { Link } from '../Link/style';
import ViewSelect from './style/ViewSelect';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../colors.config';
import ExerciseImage from './style/ExerciseImage';
import { useState } from 'react';
import { percentage } from '../../utils/percentageFactory';
import { CreateDefaultExercise } from '../../infra/services/defaultWorkoutService';
import { repetitionsNumber, seriesNumber } from '../../utils/arraysFactory';
import ModalBackground from '../ModalBackground/ModaBackground';

export const SelectedExerciseModal = ({
    nameExercise,
    photoExercise,
    navigation,
    visible,
    setShowModalExercise,
    defaultWorkoutId,
    exerciseId,
    trainingName,
    ...rest
}) => {
    const [seriesAmount, setSeriesAmount] = useState();
    const [repetitionsAmount, setRepetitionsAmount] = useState();

    async function CreateDefaultWorkoutExercise() {
        if (seriesAmount && repetitionsAmount) {
            await CreateDefaultExercise(
                exerciseId,
                defaultWorkoutId,
                repetitionsAmount,
                seriesAmount
            );
            navigation.navigate('DefaultWorkoutExerciseScreen', {
                defaultWorkoutId: defaultWorkoutId,
                trainingName: trainingName
            });
        } else {
            
        }

    }

    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType='fade'
        >
            <ModalBackground>
                <ContentModal
                    style={{
                        borderTopWidth: 2,
                        borderLeftWidth: 2,
                        borderRightWidth: 2,
                        borderColor: colors.white,
                        borderStyle: 'solid',
                        borderTopStartRadius: 20,
                        borderTopEndRadius: 20
                    }}
                >
                    <Gradient locationOne={1} roundedBorders={true}>
                        <Title fontSize={32} marginTop={percentage(0.05, 'h')}>
                            {nameExercise}
                        </Title>
                        <ExerciseImage
                            source={require('../../assets/Images/ExerciseImage.png')}
                        />
                        <ViewSelect marginTop={percentage(0.05, 'h')}>
                            <Select
                                label={'Series'}
                                setSelected={setSeriesAmount}
                                data={seriesNumber}
                            />
                            <Select
                                label={'Repetições'}
                                setSelected={setRepetitionsAmount}
                                data={repetitionsNumber}
                            />
                        </ViewSelect>
                        <Button
                            marginTop={percentage(0.05, 'h')}
                            widthButton={'85%'}
                            heightButon={'9%'}
                            alignCenter={true}
                            title={'Salvar'}
                            icon={(size, color) => (
                                <Ionicons
                                    name='save'
                                    size={22}
                                    color={colors.white}
                                />
                            )}
                            handleClickFn={CreateDefaultWorkoutExercise}
                        />
                        <Link
                            marginTop={percentage(0.02, 'h')}
                            textAlign={'center'}
                            onPress={() => setShowModalExercise(false)}
                        >
                            Cancelar
                        </Link>
                    </Gradient>
                </ContentModal>
            </ModalBackground>
        </Modal>
    );
};
