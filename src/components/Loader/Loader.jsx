import { View, ActivityIndicator, Text } from 'react-native';
import { styles } from './loaderStyles';

const Loader = () => {
    return (
        <View style={styles.loader}>
			<ActivityIndicator size='large' color='grey'/>
			<Text>Loading caracters...</Text>
		</View>
    )
};

export default Loader;
