import { View, Text, Pressable } from 'react-native';
import { styles } from './alertNotInternetStyles';
import RNRestart from 'react-native-restart';


const AlertNotInternet = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please check your internet connection and try again!</Text>
            <Pressable style={styles.button} onPress={() => RNRestart.restart()}>
                <Text style={styles.text}>Try again!</Text>
            </Pressable>
        </View>
    )
};

export default AlertNotInternet;