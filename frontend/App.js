import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Eduardo } from './src/teste/eduardo';
import { Joao } from './src/teste/joao';
import { Rubens } from './src/teste/rubens';
import { Navigation } from './src/screens/Navigation';
import { Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    Montserrat_700Bold
  })

  if (!fontsLoaded && !fontsError) {
    return null
  }

  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Navigation" component={Navigation} />

        <Stack.Screen name="Eduardo" component={Eduardo} />

        <Stack.Screen name="Rubens" component={Rubens} />

        <Stack.Screen name="Joao" component={Joao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}