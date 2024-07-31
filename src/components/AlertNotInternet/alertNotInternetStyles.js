import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
	container: {
        paddingTop: 5,
        alignItems: 'center',
		backgroundColor: '#d8cebb',
        width: '100%',
        height: '16%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
	},
    text: {
        fontSize: 18
    },
    button: {
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 193, 7, 1)',
        borderWidth: 2,
        borderColor: 'black',
        elevation: 3,
        paddingVertical: 3,
        paddingHorizontal: 12,
    }	
});