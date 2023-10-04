import React, { useState, useEffect } from "react";
import {
	TextInput,
	Button,
	Alert,
	StyleSheet,
	SafeAreaView,
	Text,
	Keyboard,
	View,
	Image,
} from "react-native";
import axios from "axios";
import logo from "../assets/beautybudd-logo.png";
import { useNavigation } from "@react-navigation/native";
import USERS from "./data/Users";

function Signin() {
	const navigation = useNavigation();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [keyboardStatus, setKeyboardStatus] = useState("");

	async function signInHandler() {
		if (!email.includes("@")) {
			return Alert.alert("Email Validity", "Please use valid email.");
		}
		if (password.length < 6) {
			return Alert.alert(
				"Password Validity",
				"Password should be > 6 characters."
			);
		}
		const index = USERS.findIndex((obj) => obj.email === email);
		if (index === -1) {
			Alert.alert("No User Exists", "Create account first!");
		} else {
			return navigation.navigate("main");
		}
	}
	const DONT_HAVE_ACCOUNT_TEXT = "Dont have account? Create One";

	return (
		<SafeAreaView>
			<Image style={styles.logo} source={logo} />
			<TextInput
				style={styles.input}
				onChangeText={setEmail}
				placeholder="email"
				value={email}
				onSubmitEditing={Keyboard.dismiss}
				selectTextOnFocus
				placeholderTextColor="#FF3FA4"
			/>
			<TextInput
				style={styles.input}
				onChangeText={setPassword}
				placeholder="Password"
				value={password}
				onSubmitEditing={Keyboard.dismiss}
				selectTextOnFocus
				secureTextEntry={true}
				placeholderTextColor="#FF3FA4"
			/>
			<View
				style={{
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Button
					style={styles.button}
					onPress={signInHandler}
					title="Sign In"
					color="#FF3FA4"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>

			<Text style={{ textAlign: "center", padding: 10 }}>
				{DONT_HAVE_ACCOUNT_TEXT}
			</Text>
			<View
				style={{
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Button
					style={styles.button}
					onPress={() => {
						navigation.navigate("signup");
					}}
					title="Create an Account"
					color="#FF3FA4"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>

			<Text style={{ textAlign: "center", padding: 10 }}>{keyboardStatus}</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderColor: "#FF3FA4",
		color: "#FF3FA4",
	},
	button: {
		padding: 5,
		margin: 12,
	},
	logo: {
		height: 150,
		width: 335,
		alignSelf: "center",
		marginTop: 10,
	},
});

export default Signin;
