import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const Header = ({showModal, setShowModal}) => {
	const toggleModal = () => {
		setShowModal(!showModal);
	}
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={toggleModal}>
				<Ionicons name="search" size={24} color="gray"/>
			</TouchableOpacity>	
			<Text style={{fontSize: 18, fontWeight: "600"}}>Convert</Text>
			<TouchableOpacity>
				<Ionicons name="notifications-outline" size={24} color="gray"/>
			</TouchableOpacity>	
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingTop: 10,
	}
})

export default Header;