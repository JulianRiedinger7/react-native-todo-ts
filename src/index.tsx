import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	Alert,
	ImageBackground,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
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
		completed: false,
	});

	const onHandleChange = (text: string): void => setTask(text);

	const onHandleAdd = (): void => {
		if (task === '') return Alert.alert('You cannot add an empty task');
		setTodos((prevTodos) => [
			...prevTodos,
			{
				value: task,
				id: Math.random().toString(),
				completed: false,
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

	const onHandleCancel = (): void => setModalVisible(!modalVisible);

	const onHandleComplete = (id: string): void => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
		setModalVisible(!modalVisible);
	};

	const onHandleCompleteAll = (): void =>
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				!todo.completed ? { ...todo, completed: true } : todo
			)
		);

	return (
		<View style={styles.container}>
			<ImageBackground
				source={{
					uri: 'https://images.unsplash.com/photo-1453475250267-163ff185e88e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
				}}
				resizeMode="cover"
				style={styles.image}
			>
				<Text style={styles.appTitle}>Todo App!</Text>
				<StatusBar style="auto" />
				<AddItem
					task={task}
					onHandleAdd={onHandleAdd}
					onHandleChange={onHandleChange}
				/>

				{todos.length === 0 ? (
					<Text style={{ marginTop: 20, fontSize: 20, color: 'white' }}>
						No tasks yet...
					</Text>
				) : (
					<View>
						<View style={styles.todoListTitleContainer}>
							<Text style={styles.todoListTitle}>Todo List</Text>
							<TouchableOpacity style={styles.markAllButton}>
								<Text style={styles.markAll} onPress={onHandleCompleteAll}>
									Mark all as done
								</Text>
							</TouchableOpacity>
						</View>
						<TodoList onHandleDetail={onHandleDetail} todos={todos} />
					</View>
				)}

				<ModalDetail
					onHandleCancel={onHandleCancel}
					onHandleDelete={onHandleDelete}
					activeTodo={activeTodo}
					modalVisible={modalVisible}
					onHandleComplete={onHandleComplete}
				/>
			</ImageBackground>
		</View>
	);
}
