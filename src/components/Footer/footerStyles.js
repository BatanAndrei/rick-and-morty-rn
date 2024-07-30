import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
	container: {
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    touchAreaDark: {
        width: 150,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#434B4D'
    },
    touchAreaLight: {
        width: 150,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c5c9c8'
    },
    textDark: {
        color: 'white',
        fontSize: 20
    },
    textLight: {
        color: 'black',
        fontSize: 20
    }
});