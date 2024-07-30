import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
},
wrapperPageDark: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'black'
},
wrapperPageLight: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#d4d9d7'
},
textLight: {
    top: 200,
    color: 'black',
    fontSize: 22
},
textDark: {
    top: 200,
    color: 'white',
    fontSize: 22
}
});