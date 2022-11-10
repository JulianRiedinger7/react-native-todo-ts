import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	image: {
		paddingVertical: 50,
		paddingHorizontal: 20,
		flex: 1,
	},
	appTitle: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 30,
		marginBottom: 20,
	},
	todoListTitle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 22,
	},
	todoListTitleContainer:{
		marginTop: 20,
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	markAllButton:{
		backgroundColor: 'green',
		padding: 10,
		borderRadius: 10,
	},
	markAll: {
		fontWeight: 'bold',
		color: 'white',
	}
});