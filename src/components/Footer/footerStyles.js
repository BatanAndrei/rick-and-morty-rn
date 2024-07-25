import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
	container: {
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    touchArea: {
        width: 150,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#434B4D'
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});