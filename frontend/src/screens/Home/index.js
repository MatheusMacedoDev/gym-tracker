import { Container } from '../../components/Container/style';
import Gradient from '../../components/Gradient';
import { Logo } from '../../components/Logo';
import { CalendarHome } from '../../components/Calendar';
import { Title } from '../../components/Title/style';
import { useState } from 'react';
import DiaryWorkoutContainer from './Style/DiaryWorkoutContainer';
import ImageWelcome from './Style/ImageWelcome';
import TextWelcome from './Style/TextWelcome';
import WelcomeContainer from './Style/WelcomeContainer';
import WorkoutContent from './Style/WorkoutContent';
import ImageRepresentation from './Style/ImageRepresentation';
import { Button } from '../../components/Button';
import { ListContainer } from '../../components/ListContainer/style';
import { ListComponent } from '../../components/List/style';
import ExistWorkoutComponent from './ExistWorkoutComponent';
import { IconButton } from '../../components/IconButton';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../colors.config';
import LabelWorkout from './NotExistWorkout/LabelWorkout';
import { percentage } from '../../utils/percentageFactory';

const exercises = [
    { id: 1, exercise: 'Flexao' },
    { id: 2, exercise: 'Supino com halteres' },
    { id: 3, exercise: 'Crucifixo' },
    { id: 4, exercise: 'Fly inclinado' }
];

export const Home = ({ navigation }) => {
    const [date, setDate] = useState();
    const [exist, setExists] = useState(false);

    return (
        <Gradient>
            <Container>
                <Logo
                    widthLogo={105}
                    heightLogo={50}
                    marginTop={percentage(0.05, 'h')}
                />
                <WelcomeContainer
                    gap={percentage(0.05, 'h')}
                    marginTop={percentage(0.05, 'h')}
                    marginBottom={percentage(0.01, 'h')}
                >
                    <ImageWelcome
                        resizeMode='cover'
                        source={require('../../assets/joao.jpeg')}
                    />
                    <TextWelcome>
                        Bem vindo,<Title fontSize={24}> Joao</Title>
                    </TextWelcome>
                </WelcomeContainer>
                <CalendarHome setTrainingDate={setDate} />
                <DiaryWorkoutContainer
                    marginTop={percentage(0.05, 'h')}
                    gap={percentage(0.2, 'w')}
                >
                    <WorkoutContent paddingLeft={percentage(0.01, 'w')}>
                        {exist ? (
                            <>
                                <Title
                                    alignSelf={'flex-start'}
                                    marginBottom={percentage(0.07, 'h')}
                                    fontSize={24}
                                >
                                    Treino A
                                </Title>
                                <ListContainer heightContainer='55%'>
                                    <ListComponent
                                        data={exercises}
                                        renderItem={({ item }) => (
                                            <ExistWorkoutComponent
                                                nameExercise={item.exercise}
                                            />
                                        )}
                                    />
                                </ListContainer>
                                <IconButton
                                    left='5%'
                                    top='75%'
                                    icon={
                                        <FontAwesome
                                            name='trash'
                                            size={24}
                                            color={colors.white}
                                        />
                                    }
                                />
                            </>
                        ) : (
                            <>
                                <LabelWorkout
                                    marginTop={percentage(0.05, 'h')}
                                    marginLeft={percentage(0, 'w')}
                                >
                                    Nenhum treino foi registrado hoje.
                                </LabelWorkout>
                                <Button
                                    fontSize={12}
                                    title='Registrar treino'
                                    alignCenter={false}
                                    widthButton='90%'
                                    heightButon='13%'
                                    marginTop={percentage(0.05, 'h')}
                                    handleClickFn={() =>
                                        navigation.navigate(
                                            'TrainingRecordScreen'
                                        )
                                    }
                                />
                            </>
                        )}
                    </WorkoutContent>
                    <ImageRepresentation
                        resizeMode='contain'
                        source={require('../../assets/Images/MenRepresentation.png')}
                    />
                </DiaryWorkoutContainer>
            </Container>
        </Gradient>
    );
};
