import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
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
		<FlatList
			data={todos}
			keyExtractor={(item) => item.id}
			renderItem={renderItem}
		/>
	);
};

export default TodoList;
