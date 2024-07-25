import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
	wrapperCard: {
		flexDirection: 'row',
		backgroundColor: '#434B4D',
		borderRadius: 10,
		marginBottom: 15
	},
	wrapperAvatar: {
		width: '40%',
	},
	wrapperInfoCharacter: {
		width: '60%',
	},
	avatar: {
		width: 150,
		height: 150,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
	styleTextWhite: {
		color: 'white',
		marginLeft: 5
	},
	styleTextGrey: {
		color: '#A5A5A5',
		marginLeft: 5
	},
	nameCharacter: {
		marginTop: 10,
		fontSize: 17,
		fontWeight: 'bold',
	},
	wrapperDotAndStatusText: {
		flexDirection: 'row',
		marginLeft: 5,
		height: 25
	},
	dotRed: {
		top: -11,
		color:'red',
		fontSize: 30
	},
	dotGreen: {
		top: -11,
		color:'green',
		fontSize: 30
	},
	dotGrey: {
		top: -11,
		color:'#A5A5A5',
		fontSize: 30
	},
	statusLives: {
		fontSize: 12
	},
	titleLocationAndSeen: {
		marginTop: 10,
		fontSize: 10
	}
});