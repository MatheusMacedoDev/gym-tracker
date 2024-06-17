import { TouchableOpacity } from 'react-native';
import { Container } from '../../components/Container/style';
import Gradient from '../../components/Gradient';
import { ListComponent } from '../../components/List/style';
import ListContainer from '../../components/ListContainer';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title/style';
import { CardWorkout } from '../../components/CardWorkout';
import { Button } from '../../components/Button';
import { useCallback, useContext, useState } from 'react';
import { NewWorkoutModal } from '../../components/NewWorkoutModal';
import { percentage } from '../../utils/percentageFactory';
import { GetDefaultWorkoutsByUserId } from '../../infra/services/defaultWorkoutService.js';
import { useFocusEffect } from '@react-navigation/native';
import AuthContext from '../../global/AuthContext.js';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../../utils/toastConfiguration.js';
import { MaterialIcons } from '@expo/vector-icons';

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
                        marginTop={percentage(0.06, 'h')}
                        marginBottom={percentage(0.05, 'h')}
                    >
                        Treinos predefinidos
                    </Title>
                    <ListContainer heightContainer='43%' loading={loading}>
                        <ListComponent
                            data={defaultWorkouts}
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
