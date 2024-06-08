import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { CommandText } from '../../components/CommandText/style';
import { Container } from '../../components/Container/style';
import { ExerciseCard } from '../../components/ExerciseCard';
import Gradient from '../../components/Gradient';
import { IconButton } from '../../components/IconButton';
import { ListComponent } from '../../components/List/style';
import { ListContainer } from '../../components/ListContainer/style';
import { Title } from '../../components/Title/style';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { percentage } from '../../utils/percentageFactory';

const exercises = [
    { id: 1, exercise: 'Supino com halteres' },
    { id: 2, exercise: 'Agachamento' },
    { id: 3, exercise: 'Cadeira extensora' },
    { id: 4, exercise: 'Abdominal' },
    { id: 5, exercise: 'Flexao' },
    { id: 6, exercise: 'Abdominal' }
];

export const DefaultWorkoutExerciseScreen = ({ navigation, route }) => {
    const [trainingName, setTrainingName] = useState();

    useEffect(() => {
        if (
            route.params.trainingName != null &&
            route.params.trainingName != undefined
        ) {
            setTrainingName(route.params.trainingName);
        }
    }, [route.params]);

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
                    marginTop={percentage(0.2, 'h')}
                >
                    Treinos predefinidos
                </CommandText>
                <Title
                    marginTop={percentage(0.02, 'h')}
                    marginBottom={percentage(0.05, 'h')}
                >
                    {trainingName}
                </Title>
                <ListContainer heightContainer={'50%'}>
                    <ListComponent
                        data={exercises}
                        renderItem={({ item }) => (
                            <ExerciseCard
                                marginBottom='16px'
                                titleExercise={item.exercise}
                                icon={(size, color) => (
                                    <Fontisto
                                        name='trash'
                                        size={size}
                                        color={color}
                                    />
                                )}
                            />
                        )}
                    />
                </ListContainer>
                <Button
                    handleClickFn={() =>
                        navigation.navigate('SelectGroupMuscle', {
                            trainingName: trainingName
                        })
                    }
                    marginTop={percentage(0.03, 'h')}
                    title='Adicionar exercício'
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
