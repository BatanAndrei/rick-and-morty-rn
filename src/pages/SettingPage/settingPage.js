import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
},
wrapperPage: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'black'
}
});