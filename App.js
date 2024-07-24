import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native';
import { ContextWrapper } from './src/Context/Context';


export default function App() {

	return (
		<ContextWrapper>
			<SafeAreaView style={styles.container}>
				<Text>Привет Андрей!</Text>
				<StatusBar style='auto'/>
			</SafeAreaView>
		</ContextWrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Platform.OS === 'android' ? 25 : 0,
	},
});
