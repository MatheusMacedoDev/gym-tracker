import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Eduardo } from "./src/teste/eduardo";
import { Rubens } from "./src/teste/rubens";
import { Navigation } from "./src/screens/Navigation";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { Main } from "./src/screens/Main";




import { RecoverPasswordScreen } from './src/screens/RecoverPasswordScreen';
import { EmailCodeScreen } from './src/screens/EmailCodeScreen';
import { ResetPasswordScreen } from './src/screens/ResetPasswordScreen';
import { BirthYearRegisterScreen } from './src/screens/BirthYearRegisterScreen';
import { NameRegisterScreen } from './src/screens/NameRegisterScreen';
import { LoginScreen } from "./src/screens/LoginScreen";
import { AccountDataRegisterScreen } from "./src/screens/AccountDataRegisterScreen";
import { WeightRecordScreen } from "./src/screens/WeightRecordScreen";
import { GenderRegisterScreen } from "./src/screens/GenderRegisterScreen";
import { HeighRecordScreen } from "./src/screens/HeightRecordScreen";
import { TrainingRecordScrenn } from "./src/screens/TrainingRecordScreen";
import Joao from "./src/teste/joao";
import { SelectExercise } from "./src/screens/SelectExercise";
import { ExerciseRecord } from "./src/screens/ExerciseRecord";
import { Home } from "./src/screens/Home";
import { RankingScreen } from "./src/screens/RankingScreen";
import { DefaultWorkoutExerciseScreen } from "./src/screens/DefaultWorkoutExerciseScreen";
import { DefaultWorkoutsScreen } from "./src/screens/DefaultWorkoutsScreen";
import SelectGroupMuscle from "./src/screens/SelectGroupMuscle";
import { Presentation } from "./src/screens/Presentation";
import PresentationInitial from "./src/screens/PresentationInitial";



const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_400Regular
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Navigation" component={Navigation} />
        
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Eduardo" component={Eduardo} />
        <Stack.Screen name="Rubens" component={Rubens} />
        <Stack.Screen name="Joao" component={Joao} />
        <Stack.Screen name="RecoverPasswordScreen" component={RecoverPasswordScreen}/>
        <Stack.Screen name="EmailCodeScreen" component={EmailCodeScreen} />
        <Stack.Screen name="ResetPasswordScreen"component={ResetPasswordScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BirthYearRegisterScreen" component={BirthYearRegisterScreen} />
        <Stack.Screen name="NameRegisterScreen" component={NameRegisterScreen} />
        <Stack.Screen name="AccountDataRegisterScreen" component={AccountDataRegisterScreen} />
        <Stack.Screen name="WeightRecordScreen" component={WeightRecordScreen}/>
        <Stack.Screen name="GenderRegisterScreen" component={GenderRegisterScreen} />
        <Stack.Screen name="HeighRecordScreen" component={HeighRecordScreen} />
        <Stack.Screen name="TrainingRecordScrenn" component={TrainingRecordScrenn} />
        <Stack.Screen name="SelectExercise" component={SelectExercise} />
        <Stack.Screen name="ExerciseRecord" component={ExerciseRecord} />
        <Stack.Screen name="RankingScreen" component={RankingScreen} />
        <Stack.Screen name="DefaultWorkoutExerciseScreen" component={DefaultWorkoutExerciseScreen} />
        <Stack.Screen name="DefaultWorkoutsScreen" component={DefaultWorkoutsScreen} />
        <Stack.Screen name="SelectGroupMuscle" component={SelectGroupMuscle} />
        <Stack.Screen name="Presentation" component={Presentation} />
        <Stack.Screen name="PresentationInitial" component={PresentationInitial} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}