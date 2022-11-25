import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './Header';

const Layout = ({ children , style = {} }) => {
	return (
		<SafeAreaView style={style}>
			<Header />
			<ScrollView>
				{children}
			</ScrollView>
		</SafeAreaView>
	)
}

export default Layout;