import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Todo } from '../interfaces/todo';

interface Props {
	modalVisible: boolean;
	onHandleDelete: () => void;
	onHandleCancel: () => void;
	activeTodo: Todo;
}

const ModalDetail = ({
	modalVisible,
	onHandleDelete,
	onHandleCancel,
	activeTodo,
}: Props) => {
	return (
		<Modal animationType="fade" transparent visible={modalVisible}>
			<View style={styles.modalContainer}>
				<Text style={styles.modalTitle}>Todo Detail</Text>
				<Text style={styles.activeTodoValue}>{activeTodo.value}</Text>
				<View style={styles.modalButtonsContainer}>
					<TouchableOpacity style={styles.buttonClose} onPress={onHandleCancel}>
						<Text style={styles.buttonCloseText}>Close</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.buttonDelete}
						onPress={onHandleDelete}
					>
						<Text style={styles.buttonDeleteText}>Delete</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

export default ModalDetail;

const styles = StyleSheet.create({
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
		width: 100,
	},
	buttonDelete: {
		backgroundColor: 'red',
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
