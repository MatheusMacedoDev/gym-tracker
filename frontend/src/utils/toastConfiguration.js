import Toast, { BaseToast } from 'react-native-toast-message';
import { colors } from '../colors.config';

export const toastConfig = {
    success: props => (
        <BaseToast
            {...props}
            style={{
                borderLeftColor: colors.orange,
                borderLeftWidth: 6,
                backgroundColor: colors.darkGray,
                width: '90%',
                height: 70,
                position: 'absolute',
                top: 20,
                zIndex: 1000
            }}
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            text1Style={{
                fontSize: 18,
                fontWeight: '600',
                color: colors.white
            }}
            text2Style={{
                fontSize: 14,
                fontWeight: '300',
                color: colors.white
            }}
        />
    ),

    error: props => (
        <BaseToast
            {...props}
            style={{
                borderLeftColor: '#D90926',
                borderLeftWidth: 6,
                backgroundColor: '#4c030d',
                width: '90%',
                height: 70,
                position: 'absolute',
                top: 20,
                zIndex: 1000
            }}
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            text1Style={{
                fontSize: 18,
                fontWeight: '600',
                color: colors.white
            }}
            text2Style={{
                fontSize: 14,
                fontWeight: '300',
                color: colors.white
            }}
        />
    ),

    tomatoToast: ({ text1, props }) => (
        <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>
    )
};

export const callWelcomeToast = userName =>
    Toast.show({
        type: 'success',
        text1: `Olá, ${userName}, bora treinar?`,
        text2: 'Não se preocupe, vamos acompanhar o seu progresso.'
    });

export const callDefaultWorkoutCreatedToast = workoutName =>
    Toast.show({
        type: 'success',
        text1: `O treino ${workoutName}, foi criado com sucesso!`,
        text2: 'Agora basta adicionar os seus exercícios.'
    });

export const callDefaultWorkoutExerciseCreatedToast = exerciseName =>
    Toast.show({
        type: 'success',
        text1: `O exercício ${exerciseName}, foi adicionado ao seu treino diário com sucesso!`,
        text2: 'Adicione mais exercícios se preferir.'
    });

export const callDefaultWorkoutExerciseDeletedToast = exerciseName =>
    Toast.show({
        type: 'success',
        text1: `O exercício removido com sucesso!`,
        text2: `O exercício ${exerciseName}, foi removido do seu treino!`
    });

export const callDiaryWorkoutDeletedToast = date =>
    Toast.show({
        type: 'success',
        text1: `Registro de treino removido!`,
        text2: `O treino do dia ${date} removido.`
    });

export const callPhotoRegisteredToast = () =>
    Toast.show({
        type: 'success',
        text1: `Foto registrada com sucesso`
    });

export const callProfilePhotoUpdatedToast = () =>
    Toast.show({
        type: 'success',
        text1: `Sua foto de perfil foi atualizada!`
    });

export const callProfileUpdatedToast = () =>
    Toast.show({
        type: 'success',
        text1: `Parabéns pelo progresso!`,
        text2: 'O seus novos dados já foram registrados.'
    });

export const callNetworkErrorOccuredToast = () =>
    Toast.show({
        type: 'error',
        text1: 'Houve um erro!',
        text2: 'Verifique a sua conexão com a internet.'
    });
