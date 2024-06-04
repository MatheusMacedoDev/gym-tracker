import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Eduardo } from "./src/teste/eduardo";
import { Joao } from "./src/teste/joao";
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
import { Home } from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_400Regular,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
