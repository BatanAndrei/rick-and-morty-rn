import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from './headerSetailStyles';
import { useGlobalContext  } from '../../Context/Context';


const HeaderDetailPage = ({ nameCharacter, navigation }) => {

    const { otherTheme } = useGlobalContext();

    return (
        <View style={otherTheme ? styles.containerLight : styles.containerDark}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('MainPage')}>
                <Image style={styles.arrowIcon} source={otherTheme ? require('../../images/iconback.png') : require('../../images/icons8.png')}/>
            </TouchableWithoutFeedback>
            <Text style={otherTheme ? styles.mameCharacterLight : styles.mameCharacterDark}>{nameCharacter}</Text>
            <View style={styles.arrowIcon}></View>
		</View>
    )
};

export default HeaderDetailPage;