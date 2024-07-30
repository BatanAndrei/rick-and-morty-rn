import { SafeAreaView, View, Text } from 'react-native';
import { styles } from './settingPageStyles';
import Footer from '../../components/Footer/Footer';
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme';
import { useGlobalContext  } from '../../Context/Context';


const SettingPage = ({ navigation }) => {

	const { otherTheme } = useGlobalContext();
	
	return (
		<SafeAreaView style={styles.container}>
                <View style={otherTheme ? styles.wrapperPageLight : styles.wrapperPageDark}>
					{otherTheme ? <Text style={styles.textLight}>Light theme</Text> : <Text style={styles.textDark}>Dark theme</Text>}
                    <ToggleTheme/>
                </View>
			<Footer navigation={navigation}/>
		</SafeAreaView>
	);
}

export default SettingPage;