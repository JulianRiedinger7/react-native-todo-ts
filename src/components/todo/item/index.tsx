import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Todo } from '../../../../interfaces/todo';
import { styles } from './styles';

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
			<Text style={[styles.todoItemText, item.completed && styles.completed]}>
				{item.value}
			</Text>
		</TouchableOpacity>
	);
};

export default TodoItem;
