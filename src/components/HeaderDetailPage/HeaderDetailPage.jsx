import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from './headerSetailStyles';
import { useGlobalContext  } from '../../Context/Context';
import AntDesign from '@expo/vector-icons/AntDesign';


const HeaderDetailPage = ({ nameCharacter, navigation }) => {

    const { otherTheme } = useGlobalContext();

    return (
        <View style={otherTheme ? styles.containerLight : styles.containerDark}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('MainPage')}>
                {otherTheme ? <AntDesign name="arrowleft" size={24} color="black" /> : <AntDesign name="arrowleft" size={24} color="white" />}
            </TouchableWithoutFeedback>
            <Text style={otherTheme ? styles.mameCharacterLight : styles.mameCharacterDark}>{nameCharacter}</Text>
            <View style={styles.arrowIcon}></View>
		</View>
    )
};

export default HeaderDetailPage;