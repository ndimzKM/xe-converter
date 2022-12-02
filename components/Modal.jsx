import { Modal, View, Text, StyleSheet } from 'react-native';

const ModalContainer = () => {
	return (
		<Modal>
			<View style={styles.container}>
				<Text>Welcome to this modal</Text>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor:"blue"
	}
})

export default ModalContainer;