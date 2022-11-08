import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Todo } from '../interfaces/todo';

interface Props {
	item: Todo;
	onHandleDetail: (item: Todo) => void;
}

const TodoItem = ({ item, onHandleDetail }: Props) => {
	return (
		<TouchableOpacity
			style={styles.todoItemContainer}
			onPress={() => onHandleDetail(item)}
		>
			<Text style={styles.todoItemText}>{item.value}</Text>
		</TouchableOpacity>
	);
};

export default TodoItem;

const styles = StyleSheet.create({
	todoItemContainer: {
		backgroundColor: 'pink',
		padding: 10,
		borderRadius: 10,
		marginVertical: 5,
	},
	todoItemText: {
		fontSize: 16,
	},
});
