import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    dropdownDark: {
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
    dropdownLight: {
        margin: 16,
        height: 50,
        width: '45%',
        backgroundColor: '#c5c9c8',
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
    itemDark: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#434B4D',
    },
    itemLight: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#c5c9c8',
    },
    textItemDark: {
        flex: 1,
        fontSize: 16,
        color: 'white'
    },
    textItemLight: {
        flex: 1,
        fontSize: 16,
        color: 'black'
    },
    placeholderStyleDark: {
        fontSize: 16,
        color: 'white'
    },
    placeholderStyleLight: {
        fontSize: 16,
        color: 'black'
    },
    selectedTextStyleDark: {
        fontSize: 16,
        color: 'white'
    },
    selectedTextStyleLight: {
        fontSize: 16,
        color: 'black'
    }
});