import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalTitle: {
		fontWeight: 'bold',
		fontSize: 22,
	},
	activeTodoValue: {
		marginVertical: 10,
		fontSize: 18,
	},
	modalButtonsContainer: {
		width: '70%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	buttonClose: {
		backgroundColor: 'lightblue',
		paddingVertical: 10,
		borderRadius: 5,
		width: 70,
	},
	buttonDelete: {
		backgroundColor: 'red',
		paddingVertical: 10,
		borderRadius: 5,
		width: 70,
	},
	buttonChange: {
		backgroundColor: 'green',
		paddingVertical: 10,
		borderRadius: 5,
		width: 100,
	},
	buttonCloseText: {
		color: '#212121',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
	},
	buttonDeleteText: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
	},
});