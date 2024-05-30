import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const BottomTab = createBottomTabNavigator()

import { ContentIcon } from "./style"
import { colors } from "../../colors.config"
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native"

export const Main = () => {
    const Home = () => {
        return(
            <>
            <Text>Home</Text>
            </>
        )
    }
    const Ranking = () => {
        return(
            <>
            <Text>Ranking</Text>
            </>
        )
    }
    const Profile = () => {
        return(
            <>
            <Text>Profile</Text>
            </>
        )
    }
    const Workouts = () => {
        return(
            <>
            <Text>Workouts</Text>
            </>
        )
    }

    return (
        <BottomTab.Navigator
            initialRouteName="Home"

            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: '#27242B',
                    height: '10%',
                    paddingTop: 10,
                    paddingLeft: 40,
                    paddingRight: 40,
                    borderRadius: 20,
           
                },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Workouts':
                            iconName = 'fitness-center';
                            break;
                        case 'Ranking':
                            iconName = 'star';
                            break;
                        case 'Profile':
                            iconName = 'person';
                            break;
                        default:
                            iconName = 'home';
                            break;
                    }
                    return (
                        <ContentIcon>
                            <MaterialIcons name={iconName} size={34} color={focused ? colors.orange : colors.white} />
                        </ContentIcon>
                    )
                }
            })}
        >




            <BottomTab.Screen
                name="Home"
                component={Home}
            />
            <BottomTab.Screen
                name="Workouts"
                component={Workouts}
            />
            <BottomTab.Screen
                name="Ranking"
                component={Ranking}
            />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
            />
        </BottomTab.Navigator>
    )
}