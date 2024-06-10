import { Container } from '../../components/Container/style';
import Gradient from '../../components/Gradient';
import { Logo } from '../../components/Logo';
import { CalendarHome } from '../../components/Calendar';
import { Title } from '../../components/Title/style';
import { useEffect, useState } from 'react';
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
import {
    DeleteDiaryWorkout,
    GetExercisesByDiaryWorkout
} from '../../infra/services/diaryWorkoutService';
import { percentage } from '../../utils/percentageFactory';

export const Home = ({ navigation }) => {
    const [date, setDate] = useState(null);
    const [exercises, setExercises] = useState([]);
    const [workoutName, setWorkoutName] = useState();
    const [workoutId, setWorkoutId] = useState();

    useEffect(() => {
        GetExercises();
    }, [date]);

    async function GetExercises() {
        const response = await GetExercisesByDiaryWorkout(
            date,
            '92ef5d63-a75e-432d-aa7a-b3006f246b60'
        );
        setExercises(response.data.diaryExercises);
        setWorkoutName(response.data.workoutName);
        setWorkoutId(response.data.diaryWorkoutId);
        console.log(response.data);
    }

    async function DeleteWorkout() {
        const response = await DeleteDiaryWorkout(workoutId);
        console.log(response);
        if (response.status === 204) {
            GetExercises();
        } else {
        }
    }

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
                <DiaryWorkoutContainer>
                    <WorkoutContent paddingLeft={percentage(0.01, 'w')}>
                        {exercises ? (
                            <>
                                <Title
                                    alignSelf={'flex-start'}
                                    marginBottom={percentage(0.07, 'h')}
                                    fontSize={24}
                                >
                                    {workoutName}
                                </Title>
                                <ListContainer heightContainer='55%'>
                                    <ListComponent
                                        data={exercises}
                                        renderItem={({ item }) => (
                                            <ExistWorkoutComponent
                                                nameExercise={
                                                    item
                                                        ? item.exerciseName
                                                        : ''
                                                }
                                            />
                                        )}
                                    />
                                </ListContainer>
                                <IconButton
                                    left='5%'
                                    top='75%'
                                    handleClickFn={DeleteWorkout}
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
