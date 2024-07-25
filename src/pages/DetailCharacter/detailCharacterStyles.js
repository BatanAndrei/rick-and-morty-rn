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
},
avatar: {
    width: 300,
    height: 300,
    borderRadius: 10
},
text: {
    marginTop: 10,
    color: 'white',
    fontSize: 25
}
});