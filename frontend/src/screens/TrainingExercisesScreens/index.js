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
import { CreateDiaryExercise } from '../../infra/services/diaryWorkoutService';


export const TrainingExercisesScreens = ({ navigation, route }) => {
    const [defaultWorkout, setDefaultWorkout] = useState()
    const [workoutexercises, setWorkoutExercises] = useState()
    const [idDiaryWorkout, setIdDefaultWorkout] = useState()

    useEffect(() => {
        if (route.params != null) {
            setDefaultWorkout(route.params.selectedWorkout)
            setIdDefaultWorkout(route.params.idDiaryWorkout)
        }

    }, [route])

    useEffect(() => {
        GetDefaultWorkoutExercises()
    }, [defaultWorkout])

    async function GetDefaultWorkoutExercises() {
        const response = await GetExercisesByDefaultWorkout(defaultWorkout.id)
        setWorkoutExercises(response.data)
    }

    async function RegisterDiaryExercise(defaultExerciseId, seriesAmount, repetitionsRange) {
        const promisse = await CreateDiaryExercise(defaultExerciseId, idDiaryWorkout)
        console.log(promisse.data);
        navigation.navigate('ExerciseRecord', {
            seriesAmount: seriesAmount, repetitions: repetitionsRange, diaryExerciseId: promisse.data.diaryExerciseId
        })
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
                    <ListComponent
                        data={workoutexercises}
                        contentContainerStyle={{
                            gap: 16
                        }}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => RegisterDiaryExercise(item.defaultExerciseId, item.seriesAmount, item.repetitionsRange)}
                            >
                                <ExerciseCard titleExercise={item.exerciseName} />
                            </TouchableOpacity>
                        )}
                    />
                </ListContainer>
                <Button
                    handleClickFn={() =>
                        navigation.navigate('Home')
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
