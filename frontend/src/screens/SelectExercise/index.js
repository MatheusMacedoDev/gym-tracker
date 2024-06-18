import React, { useEffect, useState } from 'react';
import { Title } from '../../components/Title/style';
import { IconButton } from '../../components/IconButton';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Gradient from '../../components/Gradient';
import { Container } from '../../components/Container/style';
import { ListContainer } from '../../components/ListContainer/style';
import { SelectedExerciseModal } from '../../components/SelectedExerciseModal';
import { percentage } from '../../utils/percentageFactory';
import { GetExercisesByMuscleGroupId } from '../../infra/services/exerciseService';
import { ExerciseCard } from '../../components/ExerciseCard';

export const SelectExercise = ({ navigation, route }) => {
    const [showModalExercise, setShowModalExercise] = useState(false);
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nameExercise, setNameExercise] = useState();
    const [exerciseId, setExerciseId] = useState();
    const muscleGroupId = route.params.muscleGroupId;
    const trainingName = route.params.trainingName;

    function openModal(nameExercise, exerciseId) {
        setShowModalExercise(true);
        setNameExercise(nameExercise);
        setExerciseId(exerciseId);
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() =>
                openModal(item.exerciseName, item.exerciseId, item.exerciseGif)
            }
        >
            <ExerciseCard
                titleExercise={item.exerciseName}
                marginBottom='15px'
            />
        </TouchableOpacity>
    );

    useEffect(() => {
        GetExercises();
    }, []);

    async function GetExercises() {
        setLoading(true);
        const response = await GetExercisesByMuscleGroupId(muscleGroupId);
        setExercises(response.data);
        setLoading(false);
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
                <Title
                    FontSize={20}
                    marginTop={percentage(0.12, 'h')}
                    marginBottom={percentage(0.05, 'h')}
                >
                    Exercícios
                </Title>
                <ListContainer heightContainer={'65%'} loading={loading}>
                    {loading ? (
                        <ActivityIndicator size="large" color="#FB6614" />
                    ) : (
                        <FlatList
                            data={exercises}
                            renderItem={renderItem}
                            keyExtractor={item => item.exerciseId}
                            contentContainerStyle={{
                                gap: 10
                            }}
                        />
                    )}
                </ListContainer>
                <SelectedExerciseModal
                    visible={showModalExercise}
                    setShowModalExercise={setShowModalExercise}
                    navigation={navigation}
                    defaultWorkoutId={route.params.defaultWorkoutId}
                    nameExercise={nameExercise}
                    exerciseId={exerciseId}
                    photoExercise={exerciseImage}
                    trainingName={trainingName}
                />
            </Container>
        </Gradient>
    );
};
