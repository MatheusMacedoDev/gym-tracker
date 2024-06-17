import * as NavigationBar from 'expo-navigation-bar';

export function configureNavigationBar() {
    NavigationBar.setBackgroundColorAsync('#0E0C0F');
    NavigationBar.setBehaviorAsync('inset-swipe');
    NavigationBar.setVisibilityAsync('hidden');
    NavigationBar.addVisibilityListener(event => {
        const timeToHidden = 5000;

        if (event.visibility === 'visible') {
            setTimeout(() => {
                NavigationBar.setVisibilityAsync('hidden');
            }, timeToHidden);
        }
    });
}
