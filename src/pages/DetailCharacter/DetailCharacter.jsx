import { SafeAreaView, View, Text, Image } from 'react-native';
import { styles } from './detailCharacterStyles';
import HeaderDetailPage from '../../components/HeaderDetailPage/HeaderDetailPage';


const DetailCharacter = ({ route, navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderDetailPage navigation={navigation} nameCharacter={route.params.name}/>
            <View style={styles.wrapperPage}>
            <Image style={styles.avatar} source={{uri: route.params.image}}/>
            <Text style={styles.text}>Species: {route.params.species}</Text>
            <Text style={styles.text}>Gender: {route.params.gender}</Text>
            <Text style={styles.text}>Status: {route.params.status}</Text>
            <Text style={styles.text}>Created:</Text>
            <Text style={styles.text}>{route.params.created.slice(0, 10)}</Text>
            </View>
		</SafeAreaView>
    )
};

export default DetailCharacter;