import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './footerStyles';
import { useGlobalContext  } from '../../Context/Context';


const Footer = ({ navigation }) => {

    const { otherTheme } = useGlobalContext();

    const loadMainPage = () => {
        navigation.navigate('MainPage');
    };

    const loadSettingPage = () => {
        navigation.navigate('SettingPage');
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={loadMainPage}>
                <View style={otherTheme ? styles.touchAreaLight : styles.touchAreaDark}>
                    <Text style={otherTheme ? styles.textLight : styles.textDark}>Main</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={loadSettingPage}>
                <View style={otherTheme ? styles.touchAreaLight : styles.touchAreaDark}>
                    <Text style={otherTheme ? styles.textLight : styles.textDark}>Setting</Text>
                </View>
            </TouchableWithoutFeedback>
		</View>
    )
};

export default Footer;