import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	Alert,
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	ListRenderItem,
	Modal,
} from 'react-native';
import ModalDetail from './components/ModalDetail';
import TodoItem from './components/TodoItem';
import { Todo } from './interfaces/todo';

export default function App() {
	const [task, setTask] = useState<string>('');
	const [todos, setTodos] = useState<Todo[]>([]);
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [activeTodo, setActiveTodo] = useState<Todo>({
		value: '',
		id: '',
	});

	const renderItem: ListRenderItem<Todo> = ({ item }) => (
		<TodoItem item={item} onHandleDetail={onHandleDetail} />
	);

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
			<View style={styles.addContainer}>
				<TextInput
					placeholder="Enter a task..."
					style={styles.input}
					placeholderTextColor={'white'}
					value={task}
					onChangeText={(text) => setTask(text)}
				/>
				<TouchableOpacity style={styles.buttonAdd} onPress={onHandleAdd}>
					<Text style={styles.buttonAddText}>ADD</Text>
				</TouchableOpacity>
			</View>

			<View>
				<Text style={styles.todoListTitle}>Todo List</Text>

				{todos.length === 0 ? (
					<Text>No tasks yet...</Text>
				) : (
					<FlatList
						data={todos}
						keyExtractor={(item) => item.id}
						renderItem={renderItem}
					/>
				)}
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

const styles = StyleSheet.create({
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
	addContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		backgroundColor: 'gray',
		color: 'white',
		padding: 10,
		borderRadius: 10,
		width: '80%',
	},
	buttonAdd: {
		backgroundColor: 'pink',
		color: 'white',
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginLeft: 10,
		borderRadius: 10,
	},
	buttonAddText: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	todoListTitle: {
		marginTop: 20,
		fontWeight: 'bold',
		fontSize: 22,
	},
});
