import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Eduardo } from './src/teste/eduardo';
import { Rubens } from './src/teste/rubens';
import { Navigation } from './src/screens/Navigation';
import {
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_300Light,
    Montserrat_500Medium,
    useFonts
} from '@expo-google-fonts/montserrat';
import { Main } from './src/screens/Main';

import { RecoverPasswordScreen } from './src/screens/RecoverPasswordScreen';
import { EmailCodeScreen } from './src/screens/EmailCodeScreen';
import { ResetPasswordScreen } from './src/screens/ResetPasswordScreen';
import { BirthYearRegisterScreen } from './src/screens/BirthYearRegisterScreen';
import { NameRegisterScreen } from './src/screens/NameRegisterScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { AccountDataRegisterScreen } from './src/screens/AccountDataRegisterScreen';
import { WeightRecordScreen } from './src/screens/WeightRecordScreen';
import { GenderRegisterScreen } from './src/screens/GenderRegisterScreen';
import { HeighRecordScreen } from './src/screens/HeightRecordScreen';
import { TrainingRecordScreen } from './src/screens/TrainingRecordScreen';
import Joao from './src/teste/joao';
import { SelectExercise } from './src/screens/SelectExercise';
import { ExerciseRecord } from './src/screens/ExerciseRecord';
import { Home } from './src/screens/Home';
import { RankingScreen } from './src/screens/RankingScreen';
import { DefaultWorkoutExerciseScreen } from './src/screens/DefaultWorkoutExerciseScreen';
import { DefaultWorkoutsScreen } from './src/screens/DefaultWorkoutsScreen';
import SelectGroupMuscle from './src/screens/SelectGroupMuscle';
import { Presentation } from './src/screens/Presentation';
import PresentationInitial from './src/screens/PresentationInitial';
import { TrainingExercisesScreens } from './src/screens/TrainingExercisesScreens';
import { useState } from 'react';
import AuthContext from './src/global/AuthContext';
import { getUserToken } from './src/utils/tokenHandler';
import { useEffect } from 'react';
import Profile from './src/screens/Profile';
import Camera from './src/screens/Camera';
import ProfileImageContext from './src/global/ProfileImageContext';

const Stack = createNativeStackNavigator();

export default function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [profileImage, setProfileImage] = useState('');

    const [fontsLoaded, fontsError] = useFonts({
        Montserrat_700Bold,
        Montserrat_600SemiBold,
        Montserrat_400Regular,
        Montserrat_300Light,
        Montserrat_500Medium
    });

    useEffect(() => {
        async function getCurrentUser() {
            setCurrentUser(await getUserToken());
        }

        getCurrentUser();
    }, []);

    if (!fontsLoaded && !fontsError) {
        return null;
    }

    return (
        <AuthContext.Provider
            value={{ user: currentUser, setUser: setCurrentUser }}
        >
            <ProfileImageContext.Provider
                value={{ profileImage, setProfileImage }}
            >
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                            gestureEnabled: false
                        }}
                        initialRouteName={!currentUser ? 'LoginScreen' : 'Main'}
                    >
                        <Stack.Screen
                            name='Navigation'
                            component={Navigation}
                        />
                        <Stack.Screen name='Main' component={Main} />
                        <Stack.Screen name='Home' component={Home} />
                        <Stack.Screen name='Eduardo' component={Eduardo} />
                        <Stack.Screen name='Rubens' component={Rubens} />
                        <Stack.Screen name='Joao' component={Joao} />
                        <Stack.Screen
                            name='RecoverPasswordScreen'
                            component={RecoverPasswordScreen}
                        />
                        <Stack.Screen
                            name='EmailCodeScreen'
                            component={EmailCodeScreen}
                        />
                        <Stack.Screen
                            name='ResetPasswordScreen'
                            component={ResetPasswordScreen}
                        />
                        <Stack.Screen
                            name='LoginScreen'
                            component={LoginScreen}
                        />
                        <Stack.Screen
                            name='BirthYearRegisterScreen'
                            component={BirthYearRegisterScreen}
                        />
                        <Stack.Screen
                            name='NameRegisterScreen'
                            component={NameRegisterScreen}
                        />
                        <Stack.Screen
                            name='AccountDataRegisterScreen'
                            component={AccountDataRegisterScreen}
                        />
                        <Stack.Screen
                            name='WeightRecordScreen'
                            component={WeightRecordScreen}
                        />
                        <Stack.Screen
                            name='GenderRegisterScreen'
                            component={GenderRegisterScreen}
                        />
                        <Stack.Screen
                            name='HeighRecordScreen'
                            component={HeighRecordScreen}
                        />
                        <Stack.Screen
                            name='TrainingRecordScreen'
                            component={TrainingRecordScreen}
                        />
                        <Stack.Screen
                            name='SelectExercise'
                            component={SelectExercise}
                        />
                        <Stack.Screen
                            name='ExerciseRecord'
                            component={ExerciseRecord}
                        />
                        <Stack.Screen
                            name='RankingScreen'
                            component={RankingScreen}
                        />
                        <Stack.Screen
                            name='DefaultWorkoutExerciseScreen'
                            component={DefaultWorkoutExerciseScreen}
                        />
                        <Stack.Screen
                            name='DefaultWorkoutsScreen'
                            component={DefaultWorkoutsScreen}
                        />
                        <Stack.Screen
                            name='SelectGroupMuscle'
                            component={SelectGroupMuscle}
                        />
                        <Stack.Screen
                            name='Presentation'
                            component={Presentation}
                        />
                        <Stack.Screen
                            name='PresentationInitial'
                            component={PresentationInitial}
                        />
                        <Stack.Screen
                            name='TrainingExercisesScreens'
                            component={TrainingExercisesScreens}
                        />
                        <Stack.Screen name='Camera' component={Camera} />
                        <Stack.Screen name='Profile' component={Profile} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ProfileImageContext.Provider>
        </AuthContext.Provider>
    );
}
