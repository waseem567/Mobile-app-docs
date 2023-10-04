import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute, useNavigation } from "@react-navigation/native";

function Map() {
	const route = useRoute();
	const nav = useNavigation();
	const mapData = route.params;
	const loc = {
		lat: mapData.coords.lat,
		lng: mapData.coords.lng,
	};
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: loc.lat,
					longitude: loc.lng,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				<Marker
					coordinate={{
						latitude: loc.lat,
						longitude: loc.lng,
					}}
					title="Salon's Location"
					description="Faisalabad Pakistan"
				/>
			</MapView>
			<View
				style={{
					position: "absolute",
					left: 0,
					top: 0,
					backgroundColor: "white",
					width: "100%",
					padding: 10,
				}}
			>
				<TouchableOpacity
					onPress={() => {
						nav.navigate("form");
					}}
					style={{
						backgroundColor: "green",
						padding: 8,
						width: "40%",
						borderRadius: 10,
						alignSelf: "center",
					}}
				>
					<Text
						style={{ textAlign: "center", color: "white", fontWeight: "600" }}
					>
						RESERVE
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: "100%",
		height: "100%",
	},
});

export default Map;
