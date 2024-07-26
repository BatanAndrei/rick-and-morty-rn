import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        width: '45%',
        backgroundColor: '#434B4D',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
    },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#434B4D',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
        color: 'white'
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'white'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'white'
    }
});