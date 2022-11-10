import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  addContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		backgroundColor: 'gray',
		color: 'white',
		padding: 10,
		borderRadius: 10,
		width: '80%',
	},
	buttonAdd: {
		backgroundColor: 'pink',
		color: 'white',
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginLeft: 10,
		borderRadius: 10,
	},
	buttonAddText: {
		fontWeight: 'bold',
		fontSize: 16,
	},
})