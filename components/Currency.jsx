import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Currency = ({ currency }) => {
	return (
		<View style={styles.currency}>
			<View style={{flexDirection:"row", justifyContent:"space-between"}}>
				<View style={{flexDirection:"row", alignItems:"center"}}>
					<View style={styles.flag}>
						<Text>FL</Text>
					</View>
					<View style={{flexDirection:"row", alignItems:"center", paddingLeft: 5}}>
						<Text style={{fontWeight:"800"}}>{currency.code}</Text>
						<Ionicons name="chevron-down" size={20}/>
					</View>
				</View>
				<View style={{flexDirection:"row", alignItems:"center"}}>
					<View style={{paddingRight: 10}}>
						<Text style={{textAlign:"right", fontWeight:"800", fontSize:18}}>{currency.amount}</Text>
						<Text style={{textAlign:"right"}}>1 USD =  {currency.rate} {currency.code}</Text>
					</View>
					<Ionicons name="ellipsis-vertical" size={20}/>
				</View>
			</View>
			{/** Another Component **/}
		</View>
	);
}

const styles = StyleSheet.create({
	flag: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#ccc",
		justifyContent:'center',
		alignItems:'center'
	},
	currency: {
		borderColor: "lightgray",
		borderWidth: 1,
		padding:10,
		borderRadius: 5,
		marginBottom:20,
	}
})

export default Currency;