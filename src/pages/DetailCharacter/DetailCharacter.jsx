import { SafeAreaView, View, Text, Image } from 'react-native';
import { styles } from './detailCharacterStyles';
import HeaderDetailPage from '../../components/HeaderDetailPage/HeaderDetailPage';
import { useGlobalContext  } from '../../Context/Context';


const DetailCharacter = ({ route, navigation }) => {

    const { otherTheme } = useGlobalContext();

    return (
        <SafeAreaView style={styles.container}>
            <HeaderDetailPage navigation={navigation} nameCharacter={route.params.name}/>
            <View style={otherTheme ? styles.wrapperPageLight : styles.wrapperPageDark}>
            <Image style={styles.avatar} source={{uri: route.params.image}}/>
            <Text style={otherTheme ? styles.textLight : styles.textDark}>Species: {route.params.species}</Text>
            <Text style={otherTheme ? styles.textLight : styles.textDark}>Gender: {route.params.gender}</Text>
            <Text style={otherTheme ? styles.textLight : styles.textDark}>Status: {route.params.status}</Text>
            <Text style={otherTheme ? styles.textLight : styles.textDark}>Created:</Text>
            <Text style={otherTheme ? styles.textLight : styles.textDark}>{route.params.created.slice(0, 10)}</Text>
            </View>
		</SafeAreaView>
    )
};

export default DetailCharacter;