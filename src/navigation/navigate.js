import MainPage from '../pages/MainPage/MainPage';
import SettingPage from '../pages/SettingPage/SettingPage';
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
                            title: 'Main',
                            headerStyle: { height: 0 },
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
                </Stack.Navigator>
        </NavigationContainer>
}