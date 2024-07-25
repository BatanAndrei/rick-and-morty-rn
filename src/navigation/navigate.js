import MainPage from '../pages/MainPage/MainPage';
import SettingPage from '../pages/SettingPage/SettingPage';
import DetailCharacter from '../pages/DetailCharacter/DetailCharacter';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name='MainPage'
                        component={MainPage}
                        options={
                            {
                                headerShown: false
                            }
                        }
                    />
                    <Stack.Screen 
                        name='SettingPage'
                        component={SettingPage}
                        options={
                            {
                                headerShown: false
                            }
                        }
                    />
                    <Stack.Screen
                        name='DetailCharacter'
                        component={DetailCharacter}
                        options={
                            {
                                headerShown: false
                            }
                        }
                    />
                </Stack.Navigator>
        </NavigationContainer>
}