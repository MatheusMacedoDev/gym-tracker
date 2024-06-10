import { TouchableOpacity } from 'react-native';
import { Container } from '../../components/Container/style';
import Gradient from '../../components/Gradient';
import { ListComponent } from '../../components/List/style';
import { ListContainer } from '../../components/ListContainer/style';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title/style';
import { CardWorkout } from '../../components/CardWorkout';
import { Button } from '../../components/Button';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { NewWorkoutModal } from '../../components/NewWorkoutModal';
import { percentage } from '../../utils/percentageFactory';
import { GetDefaultWorkoutsByUserId } from '../../infra/services/defaultWorkoutService.js';

export const DefaultWorkoutsScreen = ({ navigation }) => {
    const [selectedWorkout, setSelectedWorkout] = useState();
    const [showModalNewWorkout, setShowModalNewWorkout] = useState(false);
    const [defaultWorkouts, setDefaultWorkouts] = useState();

    useFocusEffect(
        useCallback(() => {
            GetDefaultWorkout();
        }, [])
    );

    const seeTraining = item => {
        setSelectedWorkout({
            id: item.defaultWorkoutId
        });
        console.log(item.defaultWorkoutId);
        navigation.navigate('DefaultWorkoutExerciseScreen', {
            defaultWorkoutId: item.defaultWorkoutId,
            trainingName: item.defaultWorkoutName
        });
    };

    async function GetDefaultWorkout() {
        const response = await GetDefaultWorkoutsByUserId(
            '92ef5d63-a75e-432d-aa7a-b3006f246b60'
        );
        setDefaultWorkouts(response.data);
        console.log(response.data);
    }

    return (
        <Gradient>
            <Container>
                <Logo marginTop={percentage(0.1, 'h')} />
                <Title
                    marginTop={percentage(0.05, 'h')}
                    marginBottom={percentage(0.05, 'h')}
                >
                    Treinos predefinidos
                </Title>
                <ListContainer heightContainer='40%'>
                    <ListComponent
                        data={workouts}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    seeTraining(item);
                                }}
                            >
                                <CardWorkout
                                    trainingName={item.trainingName}
                                    muscleGroups={item.muscleGroups}
                                    marginBottom='10px'
                                    isSelected={
                                        selectedWorkout
                                            ? item.id == selectedWorkout.id
                                            : false
                                    }
                                />
                            </TouchableOpacity>
                        )}
                    />
                </ListContainer>

                <Button
                    handleClickFn={() => setShowModalNewWorkout(true)}
                    marginTop={percentage(0.05, 'h')}
                    title='Adicionar treino'
                    icon={(size, color) => (
                        <Entypo
                            name='chevron-right'
                            size={size}
                            color={color}
                        />
                    )}
                />

                <NewWorkoutModal
                    visible={showModalNewWorkout}
                    setShowModalNewWorkout={setShowModalNewWorkout}
                    navigation={navigation}
                />
            </Container>
        </Gradient>
    );
};
