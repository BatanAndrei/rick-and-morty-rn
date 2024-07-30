import {View, Switch} from 'react-native';
import { styles } from './toggleThemeStyles';
import { useGlobalContext  } from '../../Context/Context';


const ToggleTheme = () => {

    const { otherTheme, toggleOtherTheme } = useGlobalContext();

    return (
    <View style={styles.container}>
        <Switch
            trackColor={{false: 'grey', true: 'grey'}}
            thumbColor={otherTheme === 'light' ? 'black' : 'white'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleOtherTheme}
            value={otherTheme}
        />
    </View>
    );
};

export default ToggleTheme;