import { Modal, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Todo } from '../../../interfaces/todo';
import { styles } from './styles';

interface Props {
	modalVisible: boolean;
	onHandleDelete: () => void;
	onHandleCancel: () => void;
	activeTodo: Todo;
	onHandleComplete: (id: string) => void;
}

const ModalDetail = ({
	modalVisible,
	onHandleDelete,
	onHandleCancel,
	onHandleComplete,
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
						style={styles.buttonChange}
						onPress={() => onHandleComplete(activeTodo.id)}
					>
						<Text style={styles.buttonDeleteText}>Change done</Text>
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
