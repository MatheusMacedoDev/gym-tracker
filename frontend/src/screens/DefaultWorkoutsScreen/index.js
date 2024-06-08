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

const workouts = [
    {
        id: 1,
        trainingName: 'Treino A',
        muscleGroups: 'Peito - Triceps - costas'
    },
    {
        id: 2,
        trainingName: 'Treino B',
        muscleGroups: 'Peito - Triceps - costas'
    },
    {
        id: 3,
        trainingName: 'Treino C',
        muscleGroups: 'Peito - Triceps - costas'
    },
    {
        id: 4,
        trainingName: 'Treino D',
        muscleGroups: 'Peito - Triceps - costas'
    },
    {
        id: 5,
        trainingName: 'Treino E',
        muscleGroups: 'Peito - Triceps - costas'
    }
];

export const DefaultWorkoutsScreen = ({ navigation }) => {
    const [selectedWorkout, setSelectedWorkout] = useState();
    const [showModalNewWorkout, setShowModalNewWorkout] = useState(false);

    const seeTraining = item => {
        setSelectedWorkout({
            id: item.id
        });

        navigation.navigate('DefaultWorkoutExerciseScreen', {
            trainingName: item.trainingName
        });
    };

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
