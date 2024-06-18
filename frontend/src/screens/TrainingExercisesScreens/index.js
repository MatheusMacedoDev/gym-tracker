import React, { useEffect, useState } from 'react';
import { CommandText } from '../../components/CommandText/style';
import { Container } from '../../components/Container/style';
import Gradient from '../../components/Gradient';
import { IconButton } from '../../components/IconButton';
import { MaterialIcons } from '@expo/vector-icons';
import { Title } from '../../components/Title/style';
import { ExerciseCard } from '../../components/ExerciseCard';
import { Button } from '../../components/Button';
import { Entypo } from '@expo/vector-icons';
import { ListContainer } from '../../components/ListContainer/style';
import { ListComponent } from '../../components/List/style';
import { TouchableOpacity, ActivityIndicator, View } from 'react-native'; 
import { percentage } from '../../utils/percentageFactory';
import { GetExercisesByDefaultWorkout } from '../../infra/services/defaultWorkoutService';
import { CreateDiaryExercise } from '../../infra/services/diaryWorkoutService';
import { FontAwesome } from '@expo/vector-icons';

export const TrainingExercisesScreens = ({ navigation, route }) => {
    const [defaultWorkout, setDefaultWorkout] = useState(null);
    const [workoutexercises, setWorkoutExercises] = useState([]);
    const [idDiaryWorkout, setIdDefaultWorkout] = useState();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        if (route.params != null) {
            setDefaultWorkout(route.params.selectedWorkout);
            setIdDefaultWorkout(route.params.idDiaryWorkout);
        }
    }, [route]);

    useEffect(() => {
        if (defaultWorkout) {
            GetDefaultWorkoutExercises();
        }
    }, [defaultWorkout]);

    async function GetDefaultWorkoutExercises() {
        setLoading(true); 
        const response = await GetExercisesByDefaultWorkout(defaultWorkout.id);
        setWorkoutExercises(response.data);
        setLoading(false); 
    }

    function DisableExerciceButton(index) {
        let auxWorkoutExercises = workoutexercises;

        auxWorkoutExercises[index] = {
            ...auxWorkoutExercises[index],
            disabled: true
        };

        setWorkoutExercises(auxWorkoutExercises);
    }

    async function RegisterDiaryExercise(
        defaultExerciseId,
        seriesAmount,
        repetitionsRange,
        index
    ) {
        const promisse = await CreateDiaryExercise(
            defaultExerciseId,
            idDiaryWorkout
        );
        console.log(promisse.data);

        navigation.navigate('ExerciseRecord', {
            seriesAmount: seriesAmount,
            repetitions: repetitionsRange,
            diaryExerciseId: promisse.data.diaryExerciseId,
            disableFn: () => DisableExerciceButton(index)
        });
    }

    return (
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
                    marginTop={percentage(0.12, 'h')}
                >
                    Treinos predefinidos
                </CommandText>
                <Title
                    marginTop={percentage(0.02, 'h')}
                    marginBottom={percentage(0.08, 'h')}
                >
                    {defaultWorkout ? defaultWorkout.trainingName : null}
                </Title>
                <ListContainer heightContainer={'50%'}>
                    {loading ? ( 
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <ActivityIndicator size="large" color="#fb6614" />
                        </View>
                    ) : (
                        <ListComponent
                            data={workoutexercises}
                            contentContainerStyle={{
                                gap: 16
                            }}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    disabled={item.disabled}
                                    onPress={() =>
                                        RegisterDiaryExercise(
                                            item.defaultExerciseId,
                                            item.seriesAmount,
                                            item.repetitionsRange,
                                            index
                                        )
                                    }
                                >
                                    <ExerciseCard
                                        isDiary={true}
                                        disabledTrue={item.disabled}
                                        titleExercise={item.exerciseName}
                                        icon={(size, color) => (
                                            <FontAwesome
                                                name='lock'
                                                size={size}
                                                color={color}
                                            />
                                        )}
                                        onPress={() =>
                                            RegisterDiaryExercise(
                                                item.defaultExerciseId,
                                                item.seriesAmount,
                                                item.repetitionsRange,
                                                index
                                            )
                                        }
                                    />
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </ListContainer>
                <Button
                    handleClickFn={() => navigation.navigate('Main')}
                    marginTop={percentage(0.06, 'h')}
                    title='Finalizar Treino'
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
    );
};
