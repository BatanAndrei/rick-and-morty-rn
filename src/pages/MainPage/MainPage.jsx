import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Platform, Text, View, Image, TouchableWithoutFeedback, ActivityIndicator, FlatList } from 'react-native';
import { useGlobalContext  } from '../../Context/Context';


const MainPage = () => {

	const { listCharacters } = useGlobalContext();
	
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto'/>
			{!listCharacters.length ? 
			<View style={styles.loader}>
				<ActivityIndicator size='large' color='grey'/>
			</View> :
			<View style={styles.wrapperPage}>
				<FlatList data={listCharacters} renderItem={({ item }) => (
					<TouchableWithoutFeedback>
						<View style={styles.wrapperCard}>
							<View style={styles.wrapperAvatar}>
								<Image 
								style={styles.avatar} 
								source={{uri: item.image}}/>
							</View>
							<View style={styles.wrapperInfoCharacter}>
								<Text style={[styles.nameCharacter, styles.styleTextWhite]}>{item.name}</Text>
								<View style={styles.wrapperDotAndStatusText}>
									<Text style={(item.status === 'Dead' && styles.dotRed) || 
										(item.status === 'Alive' && styles.dotGreen) || 
										(item.status === 'unknown' && styles.dotGrey)}>
										&#8226;</Text>
									<Text style={[styles.statusLives, styles.styleTextWhite]}>{item.status} - {item.species}</Text>
								</View>
								<Text style={[styles.titleLocationAndSeen, styles.styleTextGrey]}>Last known location:</Text>
								<Text style={[styles.statusLives, styles.styleTextWhite]}>{item.location.name}</Text>
								<Text style={[styles.titleLocationAndSeen, styles.styleTextGrey]}>First seen in:</Text>
								<Text style={[styles.statusLives, styles.styleTextWhite]}>{item.origin.name}</Text>
							</View>
						</View>
					</TouchableWithoutFeedback>
				)}/>
			</View>
			}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	loader: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? 25 : 0,
	},
	wrapperPage: {
		flex: 1,
		alignItems: 'center',
		padding: 15,
		backgroundColor: 'black'
	},
	wrapperCard: {
		flexDirection: 'row',
		backgroundColor: '#434B4D',
		borderRadius: 10,
		marginBottom: 15
	},
	wrapperAvatar: {
		width: '40%',
	},
	wrapperInfoCharacter: {
		width: '60%',
	},
	avatar: {
		width: 150,
		height: 150,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
	styleTextWhite: {
		color: 'white',
		marginLeft: 5
	},
	styleTextGrey: {
		color: '#A5A5A5',
		marginLeft: 5
	},
	nameCharacter: {
		marginTop: 10,
		fontSize: 17,
		fontWeight: 'bold',
	},
	wrapperDotAndStatusText: {
		flexDirection: 'row',
		marginLeft: 5,
		height: 25
	},
	dotRed: {
		top: -11,
		color:'red',
		fontSize: 30
	},
	dotGreen: {
		top: -11,
		color:'green',
		fontSize: 30
	},
	dotGrey: {
		top: -11,
		color:'#A5A5A5',
		fontSize: 30
	},
	statusLives: {
		fontSize: 12
	},
	titleLocationAndSeen: {
		marginTop: 10,
		fontSize: 10
	}
});

export default MainPage;