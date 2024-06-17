import { Container } from '../../components/Container/style';
import { IconButton } from '../../components/IconButton';
import { MaterialIcons } from '@expo/vector-icons';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title/style';
import { CommandText } from '../../components/CommandText/style';
import { CardWorkout } from '../../components/CardWorkout';
import { Button } from '../../components/Button';
import { Entypo } from '@expo/vector-icons';
import { ListComponent } from '../../components/List/style';
import { ListContainer } from '../../components/ListContainer/style';
import { useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Gradient from '../../components/Gradient';
import { percentage } from '../../utils/percentageFactory';
import { GetDefaultWorkoutsByUserId } from '../../infra/services/defaultWorkoutService';
import AuthContext from '../../global/AuthContext';
import { CreateDiaryWorkout } from '../../infra/services/diaryWorkoutService';

export const TrainingRecordScreen = ({ navigation, route }) => {
    const [selectedWorkout, setSelectedWorkout] = useState();
    const [defaultWorkouts, setDefaultWorkouts] = useState();
    const [dateDiaryWorkout, setDiaryWorkout] = useState();
    const user = useContext(AuthContext);

    async function GetDefaultWorkouts() {
        const response = await GetDefaultWorkoutsByUserId(user.user.userId);
        setDefaultWorkouts(response.data);
    }

    useEffect(() => {
        GetDefaultWorkouts();
        setDiaryWorkout(route.params.date);
    }, []);

    async function RegisterDiaryWorkout() {
        console.log(selectedWorkout);
        console.log(dateDiaryWorkout);
        if (selectedWorkout && dateDiaryWorkout) {
            const promisse = await CreateDiaryWorkout(
                selectedWorkout.id,
                dateDiaryWorkout
            );

            navigation.navigate('TrainingExercisesScreens', {
                selectedWorkout: selectedWorkout,
                idDiaryWorkout: promisse.data.diaryWorkoutId
            });
        } else {
        }
    }

    return (
        <Gradient>
            <Container>
                <IconButton
                    gradient={false}
                    handleClickFn={() => navigation.goBack()}
                    icon={
                        <MaterialIcons
                            name='reply'
                            size={40}
                            color={'#FB6614'}
                        />
                    }
                />
                <Logo marginTop={percentage(0.1, 'h')} />
                <Title marginTop={percentage(0.03, 'h')}>
                    Registro de treino
                </Title>
                <CommandText
                    marginTop={percentage(0.03, 'h')}
                    marginBottom={percentage(0.05, 'h')}
                >
                    Aqui você poderá anotar os principais dados do seu treino
                    para podermos medir a sua progressão. Antes de tudo
                    selecione o seu treino base:
                </CommandText>
                <ListContainer heightContainer='34%'>
                    <ListComponent
                        data={defaultWorkouts}
                        contentContainerStyle={{
                            gap: 12
                        }}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setSelectedWorkout({
                                        id: item.defaultWorkoutId,
                                        trainingName: item.defaultWorkoutName
                                    });
                                }}
                                disabled={!item.relatedMuscleGroups}
                            >
                                <CardWorkout
                                    trainingName={item.defaultWorkoutName}
                                    muscleGroups={
                                        item.relatedMuscleGroups ||
                                        'Sem exercícios ainda...'
                                    }
                                    isSelected={
                                        selectedWorkout
                                            ? item.defaultWorkoutId ==
                                              selectedWorkout.id
                                            : false
                                    }
                                />
                            </TouchableOpacity>
                        )}
                    />
                </ListContainer>
                <Button
                    marginTop={percentage(0.05, 'h')}
                    title='Continuar'
                    icon={(size, color) => (
                        <Entypo
                            name='chevron-right'
                            size={size}
                            color={color}
                        />
                    )}
                    handleClickFn={RegisterDiaryWorkout}
                />
            </Container>
        </Gradient>
    );
};
