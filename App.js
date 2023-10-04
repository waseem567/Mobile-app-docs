import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./components/Signup";
import Signin from "./components/SignIn";
import Main from "./components/Main";
import Salons from "./components/Salons";
import Map from "./components/Map";
import ReservationForm from "./components/ReservationForm";

const Stack = createStackNavigator();

import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="signup"
					component={Signup}
					options={{ headerTitle: "" }}
				/>
				<Stack.Screen
					name="signin"
					component={Signin}
					options={{ headerTitle: "" }}
				/>
				<Stack.Screen
					name="main"
					component={Main}
					options={{ headerTitle: "Find Salons..." }}
				/>
				<Stack.Screen
					name="salonList"
					component={Salons}
					options={{ headerTitle: "Select Salon..." }}
				/>
				<Stack.Screen
					name="map"
					component={Map}
					options={{ headerTitle: "Location" }}
				/>
				<Stack.Screen
					name="form"
					component={ReservationForm}
					options={{ headerTitle: "Reservation" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
