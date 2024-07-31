import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#555',
        borderRadius: 12,
        zIndex: 5,
        top: 350,
        width: '30%',
        opacity: 0.7
    },
	arapperLoader: {
        alignItems: 'center',
    },
    loader: {
        padding: 12,
        
    },
    text: {
        color: 'white',
        fontSize: 18
    }
});
