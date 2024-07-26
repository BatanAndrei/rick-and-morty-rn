import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, FlatList } from 'react-native';
import { useGlobalContext  } from '../../Context/Context';
import ListCharacters from '../../components/ListCharacters/ListCharacters';
import { styles } from './mainStyles';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';
import DropdownComponent from '../../components/DropdownComponent/DropdownComponent';
import { dataStatusCharacter, dataSpeciesCharacter, lableForDropdownStatus, lableForDropdownSpecies } from '../../datas';


const MainPage = ({ navigation }) => {

	const { listCharacters, getDropdownStatus, getDropdownSpecies, selectedStatusCharacter, selectedSpeciesCharacter } = useGlobalContext();

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto'/>
			{!listCharacters.length ? 
			<Loader/> :
			<View style={styles.wrapperPage}>
				<View style={styles.wrapperDropdownInput}>
					<DropdownComponent 
						value={selectedStatusCharacter} 
						getDropdownValue={getDropdownStatus} 
						lableForDropdown={lableForDropdownStatus} 
						dataListStatusAndSpecies={dataStatusCharacter}
					/>
					<DropdownComponent 
						value={selectedSpeciesCharacter} 
						getDropdownValue={getDropdownSpecies} 
						lableForDropdown={lableForDropdownSpecies} 
						dataListStatusAndSpecies={dataSpeciesCharacter}
					/>
				</View>
				<FlatList 
					data={listCharacters} 
					renderItem={({ item }) => (
					<ListCharacters navigation={navigation} item={item}/>
				)}/>
			</View>}
			<Footer navigation={navigation}/>
		</SafeAreaView>
	);
}

export default MainPage;