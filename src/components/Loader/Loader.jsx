import { View, ActivityIndicator, Text } from 'react-native';
import { styles } from './loaderStyles';


const Loader = () => {
    return (
        <View style={styles.container}>
        <View style={styles.arapperLoader}>
			<ActivityIndicator size='large' color='white' style={styles.loader}/>
			<Text style={styles.text}>Loading...</Text>
		</View>
        </View>
    )
};

export default Loader;
