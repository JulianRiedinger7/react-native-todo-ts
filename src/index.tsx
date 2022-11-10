import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { AddItem, ModalDetail, TodoList } from './components/index';
import { Todo } from '../interfaces/todo';
import { styles } from './styles';

export default function App() {
	const [task, setTask] = useState<string>('');
	const [todos, setTodos] = useState<Todo[]>([]);
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [activeTodo, setActiveTodo] = useState<Todo>({
		value: '',
		id: '',
	});

	const onHandleChange = (text: string): void => setTask(text);

	const onHandleAdd = (): void => {
		if (task === '') return Alert.alert('You cannot add an empty task');
		setTodos((prevTodos) => [
			...prevTodos,
			{
				value: task,
				id: Math.random().toString(),
			},
		]);
		setTask('');
	};

	const onHandleDetail = (item: Todo): void => {
		setModalVisible(!modalVisible);
		setActiveTodo(item);
	};

	const onHandleDelete = (): void => {
		setTodos((prevTodos) =>
			prevTodos.filter((todo) => todo.id !== activeTodo.id)
		);
		setModalVisible(!modalVisible);
	};

	const onHandleCancel = (): void => {
		setModalVisible(!modalVisible);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.appTitle}>Todo App!</Text>
			<StatusBar style="auto" />
			<AddItem
				task={task}
				onHandleAdd={onHandleAdd}
				onHandleChange={onHandleChange}
			/>

			<View>
				<Text style={styles.todoListTitle}>Todo List</Text>
				<TodoList onHandleDetail={onHandleDetail} todos={todos} />
			</View>

			<ModalDetail
				onHandleCancel={onHandleCancel}
				onHandleDelete={onHandleDelete}
				activeTodo={activeTodo}
				modalVisible={modalVisible}
			/>
		</View>
	);
}
