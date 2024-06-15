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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessageText from '../../components/ErrorMessageText/style';
import { useForm } from 'react-hook-form';
import ContainerModal from './style/ContainerModal';

const schema = yup.object().shape({
    trainingName: yup.string().required("O nome não pode ser vazio").min(4, "Nome inválido")
});

export const NewWorkoutModal = ({
    navigation,
    visible,
    setShowModalNewWorkout,
    ...rest
}) => {
    const user = useContext(AuthContext);
    const { setValue, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    async function CreateWorkout(data) {

        const response = await CreateDefaultWorkout(
            user.user.userId,
            data.trainingName
        );

        const workout = response.data;

        setShowModalNewWorkout(false);

        navigation.navigate('DefaultWorkoutExerciseScreen', {
            defaultWorkoutId: workout.defaultWorkoutId,
            trainingName: data.trainingName
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
                        <ContainerModal>
                            <IconButton
                                gradient={false}
                                top='14px'
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
                                widthLogo={'35%'}
                                heightLogo={'11%'}
                                marginTop={percentage(0.08, 'h')}
                            />
                            <Title fontSize={18} marginTop={percentage(0.06, 'h')}>
                                Defina o nome do treino:
                            </Title>
                            <Input
                                placeholder='Nome do treino...'
                                heightInput={'13%'}
                                marginTop={percentage(0.05, 'h')}
                                onChangeText={text => setValue('trainingName', text)}
                                error={errors.trainingName}
                            />
                            {errors.trainingName && <ErrorMessageText>{errors.trainingName.message}</ErrorMessageText>}
                            <Button
                                alignCenter={true}
                                heightButton={'11%'}
                                marginTop={percentage(0.06, 'h')}
                                handleClickFn={handleSubmit(CreateWorkout)}
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
                        </ContainerModal>
                    </Gradient>
                </ContentModal>
            </ModalBackground>
        </Modal>
    );
};
