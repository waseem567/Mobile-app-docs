import React from "react";
import {
	TextInput,
	Button,
	Alert,
	StyleSheet,
	SafeAreaView,
	Text,
	Image,
	KeyboardAvoidingView,
	View,
	ToastAndroid,
} from "react-native";
import axios from "axios";
import logo from "../assets/beautybudd-logo.png";
import { useNavigation } from "@react-navigation/native";
import USERS from "./data/Users";
import { AsyncStorage } from "react-native";

// signup component function
function Signup() {
	const navigation = useNavigation();
	const [userExists, setUserExists] = React.useState(false);
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [passwordConfirm, setPasswordConfirm] = React.useState("");

	// handling new user
	async function signUpHandler() {
		if (!email.includes("@")) {
			return Alert.alert("Email Validity", "Please use valid email.");
		}
		if (password.length < 6) {
			return Alert.alert(
				"Password Validity",
				"Password should be > 6 characters."
			);
		}
		if (password !== passwordConfirm) {
			return Alert.alert(
				"Password Validity",
				"Your both passwords should match."
			);
		}
		for (var i = 0; i < USERS.length; i++) {
			if (USERS[i].email === email) {
				setUserExists(true);
			}
		}
		if (userExists) {
			return Alert.alert("User already exists", "Try Different email");
		}
		const user = {
			email,
			password,
		};
		setEmail("");
		setPassword("");
		setPasswordConfirm("");
		USERS.push(user);
		ToastAndroid.show("Account created successfully!", ToastAndroid.SHORT);
		return navigation.navigate("signin");
	}
	const HAVE_ACCOUNT = "Already have an account?";
	// signup ui components
	return (
		<KeyboardAvoidingView>
			<Image style={styles.logo} source={logo} />
			<SafeAreaView>
				<TextInput
					style={styles.input}
					placeholder="Email"
					placeholderTextColor="#FF3FA4"
					value={email}
					onChangeText={setEmail}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					secureTextEntry={true}
					placeholderTextColor="#FF3FA4"
					value={password}
					onChangeText={setPassword}
				/>
				<TextInput
					style={styles.input}
					placeholder="Repeat Password"
					secureTextEntry={true}
					placeholderTextColor="#FF3FA4"
					value={passwordConfirm}
					onChangeText={setPasswordConfirm}
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
						title="Signup"
						color="#FF3FA4"
						accessibilityLabel="Learn more about this purple button"
						onPress={signUpHandler}
					/>
				</View>

				<Text style={{ textAlign: "center", padding: 10 }}>{HAVE_ACCOUNT}</Text>
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
							navigation.navigate("signin");
						}}
						title="Go To Login"
						color="#FF3FA4"
						accessibilityLabel="Learn more about this purple button"
					/>
				</View>
			</SafeAreaView>
		</KeyboardAvoidingView>
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

export default Signup;
