import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from './headerSetailStyles';


const HeaderDetailPage = ({ nameCharacter, navigation }) => {

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('MainPage')}>
                <Image style={styles.arrowIcon} source={require('../../images/icons8.png')}/>
            </TouchableWithoutFeedback>
            <Text style={styles.mameCharacter}>{nameCharacter}</Text>
            <View style={styles.arrowIcon}></View>
		</View>
    )
};

export default HeaderDetailPage;