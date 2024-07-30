import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
	containerDark: {
        height: 50,
        backgroundColor: '#434B4D',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerLight: {
        height: 50,
        backgroundColor: '#9da19f',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    arrowIcon: {
        width: 25,
        height: 25,
        marginLeft: 10,
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