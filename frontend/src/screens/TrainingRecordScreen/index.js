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
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Gradient from '../../components/Gradient';
import { percentage } from '../../utils/percentageFactory';
import { GetDefaultWorkoutsByUserId } from '../../infra/services/defaultWorkoutService';

export const TrainingRecordScrenn = ({ navigation }) => {
    const [selectedWorkout, setSelectedWorkout] = useState();
    const [defaultWorkouts, setDefaultWorkouts] = useState();

    async function GetDefaultWorkout() {
        const response = await GetDefaultWorkoutsByUserId(
            'c603fdc1-003b-410f-b5e5-3663a03e0028'
        );
        setDefaultWorkouts(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        GetDefaultWorkout();
    }, []);

    return (
        <Gradient>
            <Container>
                <IconButton
                    gradient={false}
                    onPress={() => navigation.goBack()}
                    icon={
                        <MaterialIcons
                            name='reply'
                            size={40}
                            color={'#FB6614'}
                            onPress={() => navigation.goBack()}
                        />
                    }
                />
                <Logo marginTop={percentage(0.1, 'h')} />
                <Title marginTop={percentage(0.03, 'h')}>
                    Registro de treino
                </Title>
                <CommandText
                    marginTop={percentage(0.03, 'h')}
                    textAlign={'center'}
                    marginBottom={percentage(0.05, 'h')}
                >
                    Aqui você poderá anotar os principais dados do seu treino
                    para podermos medir a sua progressão. Antes de tudo
                    selecione o seu treino base:
                </CommandText>
                <ListContainer>
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
                            >
                                <CardWorkout
                                    trainingName={item.trainingName}
                                    muscleGroups={item.muscleGroups}
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
                    handleClickFn={() =>
                        navigation.navigate('TrainingExercisesScreens', {
                            selectedWorkout: selectedWorkout
                        })
                    }
                />
            </Container>
        </Gradient>
    );
};
