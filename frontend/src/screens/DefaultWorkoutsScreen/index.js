import React, { useCallback, useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container } from '../../components/Container/style';
import Gradient from '../../components/Gradient';
import { ListComponent } from '../../components/List/style';
import { ListContainer } from '../../components/ListContainer/style';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title/style';
import { CardWorkout } from '../../components/CardWorkout';
import { Button } from '../../components/Button';
import { NewWorkoutModal } from '../../components/NewWorkoutModal';
import { percentage } from '../../utils/percentageFactory';
import { GetDefaultWorkoutsByUserId } from '../../infra/services/defaultWorkoutService';
import { useFocusEffect } from '@react-navigation/native';
import AuthContext from '../../global/AuthContext';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../../utils/toastConfiguration';
import { MaterialIcons } from '@expo/vector-icons';
import { ListEmptyComponent } from '../../components/ListEmptyComponent';

export const DefaultWorkoutsScreen = ({ navigation }) => {
    const [selectedWorkout, setSelectedWorkout] = useState();
    const [showModalNewWorkout, setShowModalNewWorkout] = useState(false);
    const [defaultWorkouts, setDefaultWorkouts] = useState();
    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);

    useFocusEffect(
        useCallback(() => {
            GetDefaultWorkout();
        }, [])
    );

    const seeTraining = item => {
        setSelectedWorkout({
            id: item.defaultWorkoutId
        });

        navigation.navigate('DefaultWorkoutExerciseScreen', {
            defaultWorkoutId: item.defaultWorkoutId,
            trainingName: item.defaultWorkoutName
        });
    };

    async function GetDefaultWorkout() {
        setLoading(true);
        const response = await GetDefaultWorkoutsByUserId(user.user.userId);
        setDefaultWorkouts(response.data);
        setLoading(false);
    }

    return (
        <>
            <Toast swipeable config={toastConfig} />
            <Gradient>
                <Container>
                    <Logo marginTop={percentage(0.085, 'h')} />
                    <Title
                        marginTop={percentage(0.04, 'h')}
                        marginBottom={percentage(0.05, 'h')}
                    >
                        Treinos predefinidos
                    </Title>
                    <ListContainer heightContainer='43%' loading={loading}>
                        <ListComponent
                            data={defaultWorkouts}
                            contentContainerStyle={{ flex: 1 }}
                            ListEmptyComponent={
                                <ListEmptyComponent
                                    title='Não há nenhum treino'
                                    commandText='Crie um treino e então adicione alguns exercícios nele.'
                                />
                            }
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        seeTraining(item);
                                    }}
                                >
                                    <CardWorkout
                                        trainingName={item.defaultWorkoutName}
                                        muscleGroups={
                                            item.relatedMuscleGroups ||
                                            'Sem exercícios ainda...'
                                        }
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
                            <MaterialIcons
                                name='format-list-bulleted-add'
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
        </>
    );
};
