import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './footerStyles';


const Footer = ({ navigation }) => {

    const loadMainPage = () => {
        navigation.navigate('MainPage');
    };

    const loadSettingPage = () => {
        navigation.navigate('SettingPage');
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={loadMainPage}>
                <View style={styles.touchArea}>
                    <Text style={styles.text}>Main</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={loadSettingPage}>
                <View style={styles.touchArea}>
                    <Text style={styles.text}>Setting</Text>
                </View>
            </TouchableWithoutFeedback>
		</View>
    )
};

export default Footer;