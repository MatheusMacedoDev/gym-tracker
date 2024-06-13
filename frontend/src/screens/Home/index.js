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
import ProfileImageContext from '../../global/ProfileImageContext';
import { GetUserProfileImage } from '../../infra/services/userService';

export const Home = ({ navigation }) => {
    const [date, setDate] = useState(null);
    const [diaryWorkout, setDiaryWorkout] = useState(null);

    const { user } = useContext(AuthContext);
    const { profileImage, setProfileImage } = useContext(ProfileImageContext);

    async function GetExercises() {
        const response = await GetExercisesByDiaryWorkout(date, user.userId);
        setDiaryWorkout(response.data);
    }

    async function DeleteWorkout() {
        const response = await DeleteDiaryWorkout(diaryWorkout.diaryWorkoutId);
        GetExercises();

    }

    async function getUserProfileImageData() {
        const response = await GetUserProfileImage(user.userId);

        setProfileImage(response.data);
    }

    useEffect(() => {
        GetExercises();
    }, [date]);

    useEffect(() => {
        getUserProfileImageData();
    }, []);

    return (
        <Gradient>
            <Container>
                <Logo
                    widthLogo={105}
                    heightLogo={50}
                    marginTop={percentage(0.07, 'h')}
                />
                <WelcomeContainer
                    gap={percentage(0.02, 'h')}
                    marginTop={percentage(0.04, 'h')}
                >
                    <ImageWelcome
                        resizeMode='cover'
                        source={{ uri: profileImage }}
                    />
                    <TextWelcome>
                        Bem vindo,<Title fontSize={20}> {user.name}</Title>
                    </TextWelcome>
                </WelcomeContainer>
                <CalendarHome setTrainingDate={setDate} />
                <DiaryWorkoutContainer gap='0px'>
                    <WorkoutContent paddingLeft={percentage(0.01, 'w')}>
                        {diaryWorkout ? (
                            <>
                                <Title
                                    alignSelf='flex-start'
                                    alignLeft={true}
                                    marginTop={percentage(0.05, 'h')}
                                    marginBottom={percentage(0.03, 'h')}
                                    fontSize={24}
                                >
                                    {diaryWorkout.workoutName}
                                </Title>
                                <ListContainer heightContainer='50%'>
                                    <ListComponent
                                        data={diaryWorkout.diaryExercises}
                                        renderItem={({ item }) => (
                                            <ExistWorkoutComponent
                                                nameExercise={
                                                    item
                                                        ? item.exerciseName
                                                        : ''
                                                }
                                                checked={
                                                    item.doneSeriesAmount >=
                                                    item.originalSeriesAmount
                                                }
                                            />
                                        )}
                                    />
                                </ListContainer>
                                <IconButton
                                    left='2%'
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
                                <LabelWorkout marginTop={percentage(0.05, 'h')}>
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
                                        navigation.replace(
                                            'TrainingRecordScreen',
                                            { date: date }
                                        )
                                    }
                                />
                            </>
                        )}
                    </WorkoutContent>
                    <ImageRepresentation
                        marginLeft={percentage(-0.04, 'w')}
                        marginTop={percentage(0.01, 'h')}
                        resizeMode='contain'
                        source={require('../../assets/Images/MenRepresentation.png')}
                    />
                </DiaryWorkoutContainer>
            </Container>
        </Gradient>
    );
};
