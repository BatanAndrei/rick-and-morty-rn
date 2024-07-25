import { SafeAreaView, View, Text, Header } from 'react-native';
import { styles } from './settingPage';
import Footer from '../../components/Footer/Footer';

const SettingPage = ({ navigation }) => {
	
	return (
		<SafeAreaView style={styles.container}>
                <View style={styles.wrapperPage}>

                </View>
			<Footer navigation={navigation}/>
		</SafeAreaView>
	);
}

export default SettingPage;