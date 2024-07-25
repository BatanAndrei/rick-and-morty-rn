import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, FlatList } from 'react-native';
import { useGlobalContext  } from '../../Context/Context';
import ListCharacters from '../../components/ListCharacters/ListCharacters';
import { styles } from './mainStyles';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';


const MainPage = ({ navigation }) => {

	const { listCharacters } = useGlobalContext();
	
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto'/>
			{!listCharacters.length ? 
			<Loader/> :
			<View style={styles.wrapperPage}>
				<FlatList data={listCharacters} renderItem={({ item }) => (
					<ListCharacters item={item}/>
				)}/>
			</View>}
			<Footer navigation={navigation}/>
		</SafeAreaView>
	);
}

export default MainPage;