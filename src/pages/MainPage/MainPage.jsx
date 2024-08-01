import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, FlatList } from 'react-native';
import { useGlobalContext  } from '../../Context/Context';
import ListCharacters from '../../components/ListCharacters/ListCharacters';
import { styles } from './mainStyles';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';
import AlertNotInternet from '../../components/AlertNotInternet/AlertNotInternet';
import DropdownComponent from '../../components/DropdownComponent/DropdownComponent';
import { dataStatusCharacter, dataSpeciesCharacter, labelForDropdownStatus, labelForDropdownSpecies } from '../../datas';


const MainPage = ({ navigation }) => {

	const { listCharactersOnline, listCharactersOffline, isLoading, getDropdownStatus, getDropdownSpecies, loadingMoreCharacters, otherTheme, connectInternet } = useGlobalContext();

	let listCharactersOffOrOnline = (connectInternet === false) ? listCharactersOffline : listCharactersOnline;

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto'/>
			{(isLoading && connectInternet === true) &&
			<Loader/>}
			<View style={otherTheme ? styles.wrapperPageLight : styles.wrapperPageDark}>
			{connectInternet === false && <AlertNotInternet/>}
				<View style={styles.wrapperDropdownInput}>
					<DropdownComponent 
						getDropdownValue={getDropdownStatus} 
						labelForDropdown={labelForDropdownStatus} 
						dataListStatusAndSpecies={dataStatusCharacter}
					/>
					<DropdownComponent 
						getDropdownValue={getDropdownSpecies} 
						labelForDropdown={labelForDropdownSpecies} 
						dataListStatusAndSpecies={dataSpeciesCharacter}
					/>
				</View>
				<FlatList 
					data={listCharactersOffOrOnline}
					onEndReached={connectInternet === true && loadingMoreCharacters}
					onEndReachedThreshold={0}
					keyExtractor={(item, index) => index}
					renderItem={({ item }) => (
					<ListCharacters navigation={navigation} item={item}/>
				)}/>
			</View>
			<Footer navigation={navigation}/>
		</SafeAreaView>
	);
}

export default MainPage;