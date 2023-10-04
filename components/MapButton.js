import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MapButton({ location }) {
	const navigation = useNavigation();

	const seeOnMapHandler = () => {
		navigation.navigate("map", {
			coords: {
				lat: location.lat,
				lng: location.lng,
			},
		});
	};
	return (
		<TouchableOpacity
			onPress={seeOnMapHandler}
			style={{
				backgroundColor: "#FF3FA4",
				padding: 8,
				width: "100%",
				borderRadius: 10,
				alignSelf: "center",
			}}
		>
			<Text style={{ textAlign: "center", color: "white", fontWeight: "600" }}>
				SEE ON MAP
			</Text>
		</TouchableOpacity>
	);
}

export default MapButton;
