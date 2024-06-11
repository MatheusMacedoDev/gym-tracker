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
import { TouchableOpacity } from 'react-native';
import { percentage } from '../../utils/percentageFactory';
import { useEffect, useState } from 'react';
import { GetExercisesByDefaultWorkout } from '../../infra/services/defaultWorkoutService';


export const TrainingExercisesScreens = ({ navigation, route }) => {
    const [workout, setWorkout] = useState()
    const [workoutexercises, setWorkoutExercises] = useState()

    useEffect(() => {
        setWorkout(route.params.selectedWorkout)
    },[route])

    useEffect(() => {
        GetDefaultWorkoutExercises()
    },[workout])

    async function GetDefaultWorkoutExercises() {
        const response = await GetExercisesByDefaultWorkout(workout.id)
        console.log(response.data);
        setWorkoutExercises(response.data)
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
                    {workout ? workout.trainingName : null}
                </Title>
                <ListContainer heightContainer={'50%'}>
                    <ListComponent
                        data={workoutexercises}
                        contentContainerStyle={{
                            gap: 16
                        }}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('ExerciseRecord',{ seriesAmount: item.seriesAmount , repetitions: item.repetitionsRange})
                                }
                            >
                                <ExerciseCard titleExercise={item.exerciseName} /> 
                            </TouchableOpacity>
                        )}
                    />
                </ListContainer>
                <Button
                    handleClickFn={() =>
                        navigation.navigate('SelectGroupMuscle')
                    }
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
