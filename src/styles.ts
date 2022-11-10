import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		marginVertical: 50,
		paddingHorizontal: 20,
	},
	appTitle: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 30,
		marginBottom: 20,
	},
	todoListTitle: {
		
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