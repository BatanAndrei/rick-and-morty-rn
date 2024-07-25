import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from './listCharacterStyles';


const ListCharacters = ({ item }) => {
    return (
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
    )
};

export default ListCharacters;