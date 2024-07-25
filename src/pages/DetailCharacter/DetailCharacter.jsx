import { SafeAreaView, View, Text } from 'react-native';
import { styles } from './detailCharacterStyles';


const DetailCharacter = ({ route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapperPage}>
                <Text style={styles.text}>DetailCharacter</Text>
                <Text style={styles.text}>{route.params.id}</Text>
            </View>
		</SafeAreaView>
    )
};

export default DetailCharacter;