import React from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import Communications, { phonecall } from "react-native-communications";

function ReservationForm() {
	const [name, setName] = React.useState("");
	const [message, setMessage] = React.useState("");
	const reservationHandler = () => {
		Communications.text("+3456000789", "Here is the reservation message");
	};

	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<TextInput
					onChangeText={setName}
					value={name}
					style={styles.input}
					placeholder="Enter your name..."
				/>
				<TextInput
					onChangeText={setMessage}
					value={message}
					style={styles.input}
					placeholder="'08:30'/'AM - PM'/'30/12/2023'"
				/>

				<TouchableOpacity style={styles.button} onPress={reservationHandler}>
					<Text style={styles.text}>Reserve</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	inner: { padding: 10 },
	input: {
		borderWidth: 1,
		marginTop: 10,
		padding: 5,
		marginBottom: 10,
	},
	button: {
		backgroundColor: "#FF3FA4",
		padding: 8,
		marginTop: 10,
		marginBottom: 10,
	},
	text: {
		color: "white",
		textAlign: "center",
	},
});

export default ReservationForm;
