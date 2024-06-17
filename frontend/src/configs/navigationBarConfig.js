import * as NavigationBar from 'expo-navigation-bar';
import { Platform } from 'react-native';

export function configureNavigationBar() {
    if (Platform.OS === 'android') {
        NavigationBar.setBackgroundColorAsync('#0E0C0F');
        NavigationBar.setBehaviorAsync('inset-swipe');
        NavigationBar.setVisibilityAsync('hidden');
    } else {
        console.log('nao funciona em ios');
    }
}
