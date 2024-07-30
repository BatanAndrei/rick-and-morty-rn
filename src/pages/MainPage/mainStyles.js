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
	wrapperDropdownInput: {
		flexDirection: 'row'
	}
});