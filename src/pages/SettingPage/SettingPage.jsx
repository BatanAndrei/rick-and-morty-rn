import { SafeAreaView, View, Text } from 'react-native';
import { styles } from './settingPageStyles';
import Footer from '../../components/Footer/Footer';

const SettingPage = ({ navigation }) => {
	
	return (
		<SafeAreaView style={styles.container}>
                <View style={styles.wrapperPage}>
                    <Text style={styles.text}>SettingPage</Text>
                </View>
			<Footer navigation={navigation}/>
		</SafeAreaView>
	);
}

export default SettingPage;