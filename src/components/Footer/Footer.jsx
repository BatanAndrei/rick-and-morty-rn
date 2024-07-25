import { View, Text, TouchableHighlight } from 'react-native';
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
            <TouchableHighlight onPress={loadMainPage}>
                <View style={styles.touchArea}>
                    <Text style={styles.text}>Main</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={loadSettingPage}>
                <View style={styles.touchArea}>
                    <Text style={styles.text}>Setting</Text>
                </View>
            </TouchableHighlight>
		</View>
    )
};

export default Footer;