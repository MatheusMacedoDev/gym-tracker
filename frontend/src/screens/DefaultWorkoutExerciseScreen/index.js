import { useCallback, useState } from 'react';
import { Button } from '../../components/Button';
import { CommandText } from '../../components/CommandText/style';
import { Container } from '../../components/Container/style';
import { ExerciseCard } from '../../components/ExerciseCard';
import Gradient from '../../components/Gradient';
import { IconButton } from '../../components/IconButton';
import { ListComponent } from '../../components/List/style';
import { ListContainer } from '../../components/ListContainer/style';
import { Title } from '../../components/Title/style';
import { Fontisto, Entypo, MaterialIcons } from '@expo/vector-icons';
import {
    DeleteDefaultExerciseWorkout,
    GetExercisesByDefaultWorkout
} from '../../infra/services/defaultWorkoutService';
import { percentage } from '../../utils/percentageFactory';
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {
    callDefaultWorkoutExerciseDeletedToast,
    callNetworkErrorOccuredToast,
    toastConfig
} from '../../utils/toastConfiguration';

export const DefaultWorkoutExerciseScreen = ({ navigation, route }) => {
    const [defaultWorkoutExercises, setDefaultWorkoutExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const defaultWorkoutId = route.params.defaultWorkoutId;
    const trainingName = route.params.trainingName;

    useFocusEffect(
        useCallback(() => {
            if (defaultWorkoutId != null && defaultWorkoutId != undefined) {
                GetDefaultWorkoutExercise();
            } else {
                console.log('erro');
            }
        }, [])
    );

    async function GetDefaultWorkoutExercise() {
        setLoading(true);
        const response = await GetExercisesByDefaultWorkout(defaultWorkoutId);
        setDefaultWorkoutExercises(response.data);
        setLoading(false);
    }

    async function DeleteDefaultWorkoutExercise(defaultExerciseId, exerciseName) {
        const response = await DeleteDefaultExerciseWorkout(defaultExerciseId);

        if (response.status === 204) {
            callDefaultWorkoutExerciseDeletedToast(exerciseName);
        } else {
            callNetworkErrorOccuredToast();
        }

        GetDefaultWorkoutExercise();
    }

    return (
        <>
            <Toast config={toastConfig} />
            <Gradient>
                <Container>
                    <IconButton
                        gradient={false}
                        icon={
                            <MaterialIcons
                                name='reply'
                                size={40}
                                color={'#FB6614'}
                                onPress={() => navigation.goBack()}
                            />
                        }
                    />
                    <CommandText
                        textAlign={'center'}
                        marginTop={percentage(0.16, 'h')}
                    >
                        Treinos predefinidos
                    </CommandText>
                    <Title
                        marginTop={percentage(0.02, 'h')}
                        marginBottom={percentage(0.08, 'h')}
                    >
                        {trainingName}
                    </Title>
                    <ListContainer heightContainer='50%' loading={loading}>
                        <ListComponent
                            data={defaultWorkoutExercises}
                            renderItem={({ item }) => (
                                <ExerciseCard
                                    defaultWorkout={true}
                                    marginBottom='16px'
                                    titleExercise={item.exerciseName}
                                    icon={(size, color) => (
                                        <Fontisto
                                            name='trash'
                                            size={size}
                                            color={color}
                                            onPress={() =>
                                                DeleteDefaultWorkoutExercise(
                                                    item.defaultExerciseId,
                                                    item.exerciseName
                                                )
                                            }
                                        />
                                    )}
                                />
                            )}
                        />
                    </ListContainer>
                    <Button
                        handleClickFn={() =>
                            navigation.navigate('SelectGroupMuscle', {
                                trainingName: trainingName,
                                defaultWorkoutId: defaultWorkoutId
                            })
                        }
                        marginTop={percentage(0.05, 'h')}
                        title='Adicionar exercício'
                        icon={(size, color) => (
                            <Entypo
                                name='chevron-right'
                                size={size}
                                color={color}
                            />
                        )}
                    />
                </Container>
            </Gradient>
        </>
    );
};
