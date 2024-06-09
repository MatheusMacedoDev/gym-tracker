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

export const SelectedExerciseModal = ({
    nameExercise = 'Supino com halteres',
    photoExercise,
    navigation,
    visible,
    setShowModalExercise,
    ...rest
}) => {
    const [seriesAmount, setSeriesAmount] = useState();
    const [repetitionsAmount, setRepetitionsAmount] = useState();

    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType='fade'
        >
            <ContentModal style={{ shadowColor: 'white', shadowOpacity: 0.8 }}>
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
                        />
                        <Select
                            label={'Repetições'}
                            setSelected={setRepetitionsAmount}
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
                        handleClickFn={() => setShowModalExercise(false)}
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
        </Modal>
    );
};
