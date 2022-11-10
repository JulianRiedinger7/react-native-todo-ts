import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface Props {
	task: string;
	onHandleAdd: () => void;
	onHandleChange: (text: string) => void;
}

const AddItem = ({ task, onHandleAdd, onHandleChange }: Props) => {
	return (
		<View style={styles.addContainer}>
			<TextInput
				placeholder="Enter a task..."
				style={styles.input}
				placeholderTextColor={'white'}
				value={task}
				onChangeText={onHandleChange}
			/>
			<TouchableOpacity style={styles.buttonAdd} onPress={onHandleAdd}>
				<Text style={styles.buttonAddText}>ADD</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AddItem;
