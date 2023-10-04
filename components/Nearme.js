import { View, TouchableOpacity, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

function Nearme() {
	const navigation = useNavigation();
	const getLocationHandler = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			Alert.alert("Request denied", "Allow request to find salon near you!");
			return;
		}
		let location = await Location.getCurrentPositionAsync({});
		navigation.navigate("salonList");
	};

	return (
		<View
			style={{
				height: "100%",
				padding: 15,
				backgroundColor: "white",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<TouchableOpacity
				onPress={getLocationHandler}
				style={{
					backgroundColor: "#FF3FA4",
					borderRadius: 100,
					height: 150,
					width: 150,
					justifyContent: "center",
				}}
			>
				<Text
					style={{ color: "white", fontWeight: "600", textAlign: "center" }}
				>
					Find Near Me
				</Text>
			</TouchableOpacity>
		</View>
	);
}

export default Nearme;
