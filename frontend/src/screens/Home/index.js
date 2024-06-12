import { Container } from '../../components/Container/style';
import { Logo } from '../../components/Logo';
import { CalendarHome } from '../../components/Calendar';
import { Title } from '../../components/Title/style';
import { useContext, useEffect, useState } from 'react';
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
import Gradient from '../../components/Gradient';
import AuthContext from '../../global/AuthContext';


export const Home = ({ navigation }) => {
    const [date, setDate] = useState(null);
    const [diaryWorkout, setDiaryWorkout] = useState(null)
    const user = useContext(AuthContext)

    useEffect(() => {
        GetExercises();
    }, [date]);

    async function GetExercises() {
        const response = await GetExercisesByDiaryWorkout(
            date,
            user.user.userId
        );

        if (response.status == 400) {
            console.log('Deu ruim');
            return;
        }
        setDiaryWorkout(response.data)
    }



    async function DeleteWorkout() {
        const response = await DeleteDiaryWorkout(diaryWorkout.diaryWorkoutId);
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
                    marginTop={percentage(0.1, 'h')}
                />
                <WelcomeContainer
                    gap={percentage(0.02, 'h')}
                    marginTop={percentage(0.03, 'h')}
                >
                    <ImageWelcome
                        resizeMode='cover'
                        source={{uri: user.user.profileImage}}
                    />
                    <TextWelcome>
                        Bem vindo,<Title fontSize={22}> {user.user.name}</Title>
                    </TextWelcome>
                </WelcomeContainer>
                <CalendarHome setTrainingDate={setDate} />
                <DiaryWorkoutContainer gap='0px'>
                    <WorkoutContent paddingLeft={percentage(0.01, 'w')}>
                        {diaryWorkout ? (
                            <>
                                <Title
                                    alignSelf={'flex-start'}
                                    marginBottom={percentage(0.07, 'h')}
                                    fontSize={24}
                                >
                                    {diaryWorkout.workoutName}
                                </Title>
                                <ListContainer heightContainer='55%'>
                                    <ListComponent
                                        data={diaryWorkout.diaryExercises}
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
                                >
                                    Nenhum treino foi registrado hoje.
                                </LabelWorkout>
                                <Button
                                    fontSize={12}
                                    title='Registrar treino'
                                    alignCenter={false}
                                    widthButton='90%'
                                    heightButton='12%'
                                    marginTop={percentage(0.05, 'h')}
                                    handleClickFn={() =>
                                        navigation.replace('TrainingRecordScreen', {date: date})
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
