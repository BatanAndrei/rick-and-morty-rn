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
    backgroundColor: '#cfd1d0'
},
avatar: {
    width: 300,
    height: 300,
    borderRadius: 10
},
textDark: {
    marginTop: 10,
    color: 'white',
    fontSize: 25
},
textLight: {
    marginTop: 10,
    color: 'black',
    fontSize: 25
}
});