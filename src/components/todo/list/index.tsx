import React from 'react';
import { FlatList, ListRenderItem, Text } from 'react-native';
import { Todo } from '../../../../interfaces/todo';
import TodoItem from '../item';

interface Props {
	todos: Todo[];
	onHandleDetail: (item: Todo) => void;
}

const TodoList = ({ todos, onHandleDetail }: Props) => {
	const renderItem: ListRenderItem<Todo> = ({ item }) => (
		<TodoItem item={item} onHandleDetail={onHandleDetail} />
	);

	return (
		<>
			{todos.length === 0 ? (
				<Text>No tasks yet...</Text>
			) : (
				<FlatList
					data={todos}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
				/>
			)}
		</>
	);
};

export default TodoList;
