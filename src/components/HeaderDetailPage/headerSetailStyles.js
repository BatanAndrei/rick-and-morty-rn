import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
	containerDark: {
        paddingHorizontal: 10,
        height: 50,
        backgroundColor: '#434B4D',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerLight: {
        paddingHorizontal: 10,
        height: 50,
        backgroundColor: '#9da19f',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mameCharacterDark: {
        color: 'white',
        fontSize: 20
    },
    mameCharacterLight: {
        color: 'black',
        fontSize: 20
    }
});